export const fetchCats = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_CATS"})
    return fetch('http://localhost:4000/db')
      .then(resp => {
        return resp.json()})
      .then(respJSON => {
        return respJSON.images
      })
      .then(cats => {
        return({type: "FETCH_CATS", payload: cats})
      })
  }
}


// fetch('http://localhost:4000/db').then(response => {
//   return response.json()
// }).then(responseJSON => {
//   return responseJSON.images
// })
