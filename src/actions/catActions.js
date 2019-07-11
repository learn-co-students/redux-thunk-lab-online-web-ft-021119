export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(responseJSON => {
        const cats = responseJSON.images.map(image => ({ url: image.url }))
        // cats = responseJSON.images
        dispatch({
        type: 'FETCH_CATS',
        payload: cats
       })
     });
  };
}

export const loadingCats = () => {
  return {
    type: 'LOADING_CATS'
  };
};
