const initialState = {
  inCart: []
}
/* eslint-disable */
const reducer = (state = initialState, action) => {
  let updateProductById = (id,quantities, price) => (
    state.inCart.map(
        item => item.id === id ? {...item, quantityWanted : quantities, totalPrice: price  } : item)
  )
    switch (action.type) {
       case "ADD_TO_CART" :
          return {
             ...state,
            inCart : state.inCart.concat(action.value)
          }
       case "UPDATE_PRODUCT_ALREADY_IN_CART" :
          return {
             ...state,
            inCart : updateProductById(action.value.id, action.value.quantityWanted, action.value.totalPrice)
          }
       case "DELETE_PRODUCT_IN_CART" :
          return {
             ...state,
            inCart : state.inCart.filter(product => product.id !== action.id)
          }

        default: return state
         }
}

export default reducer