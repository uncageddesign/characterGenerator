class Request {
  get(url){
    return fetch(url)
    .then(res => res.json())
  }

  getPromises(array){
    return Promise.all(array)
  }
}

export default Request;
