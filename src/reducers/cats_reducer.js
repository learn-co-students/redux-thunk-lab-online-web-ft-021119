// 'FETCH_CATS' and 'LOADING_CATS'
const initialState = {
    loading: false,
    pictures: []
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'LOADING_CATS':
    return {...state, loading: true}

    case 'FETCH_CATS':
    return {...state, loading: false, pictures: action.payload}


    default:
      return state;
  }
}
