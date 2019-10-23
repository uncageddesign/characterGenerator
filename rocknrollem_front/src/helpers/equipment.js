import Request from './request.js'

class Equipment {
  constructor(charClass){
    this.charClass = charClass

  }

  getStartingEquipment(){
    const request = new Request();
    request.get(this.charClass.url)
    .then((result) => {
      this.startingItems = result.starting_equipment
      for (let i = 1; i <= parseInt(result.choices_to_make); i++){
        this[`choice${i}`] = result[`choice_${i}`][0].from[0]
      }
    })
    .then(() => {
      this.getStartingEquipmentDetails();
    })
    .then(() => {
      this.getChoiceDetails();
    })
    .then(() => {
      this.getPackDetails()
      this.getStartingPackDetails();
    })
  }

  getStartingEquipmentDetails(){
    const promises = this.startingItems.map((item) => {
      return fetch(item.item.url).then(res=> res.json())
    })
    const request = new Request();
    request.getPromises(promises)
    .then((result) => {
      for(let i=0; i< this.startingItems.length; i++){
        this.startingItems[i].item = result[i]
      }
    })
  }

  getChoiceDetails(){
    const request = new Request();
    for (let key in this){
      if (key.includes('choice')){
        request.get(this[key].item.url)
        .then(data => this[key] = data)
      }
    }
  }

  getPackDetails(){
    const request = new Request();
    for (let key in this){
      if (key.includes('choice') && this[key].item.name.includes('Pack')){
        let pack = null;
        request.get(this[key].item.url)
        .then((result) => {
          pack = result
        })
        .then(() => {
          this.getPackContents(pack, key);
        })
      }
    }
  }

  getStartingPackDetails(){
    const request = new Request();
    for (let key in this){
      if (key === 'startingItems'){
        for (let item of this[key]){
          if(item.item.name.includes('Pack')){
            let pack = null;
            request.get(item.item.url)
            .then((result) => {
              pack = result
            })
            .then(() => {
              this.getStartingPackContents(pack, item);
            })
          }
        }
      }
    }
  }

  getStartingPackContents(pack, item){
    const request = new Request();
    const promises = pack.contents.map((content) => {
      return request.get(content.item_url)
    })
    request.getPromises(promises)
    .then((results) => {
        this['startingItems'].forEach((item) => {
          if(item.item.name.includes('Pack')){
            item.contents = results;
          }
        })
      })
    }


  getPackContents(pack, key){
    const request = new Request();
    const promises = pack.contents.map((content) => {
      return request.get(content.item_url)
    })
    request.getPromises(promises)
    .then((results) => {
        this[key].contents = results;
        })
      }
}

export default Equipment;
