const initialState = {
  filterString: '',
  categorieFilter: '',
  maxPrice: 999
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case 'ON_TEXT_CHANGE' :
          return {
             ...state,
             filterString: action.value
          }
       case 'ON_CHANGE_CATEGORY' :
          return {
             ...state,
             categorieFilter: action.value
          }
       case 'ON_CHANGE_FILTER_PRICE' :
          return {
             ...state,
             maxPrice: action.value
          }
        default: return state
   }
}

export default reducer
