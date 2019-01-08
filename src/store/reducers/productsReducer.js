const initialState = {
   products: [],
   error: null,
   loading: false
}

const reducer = (state = initialState, action) => {
  let findProductIncart = id => state.products.find(product => product.id === id)
  let updateProductById = (currentQuantityProduct) => (
    state.products.map(
        product => product.id === action.id ? { ...product, quantity: currentQuantityProduct } : product)
  )

    switch (action.type) {
      case 'FETCH_DATA_BEGIN' :
         return {
            ...state,
            loading: true
         }
       case 'FETCH_DATA_SUCCESS' :
          return {
             ...state,
             loading: false,
             error: null,
             products: action.data
          }
       case 'FETCH_DATA_FAILED' :
          return {
             ...state,
             loading: false,
             error: action.error
          }
          /* eslint-disable */
       case 'ADD_PRODUCT_QUANTITY' :
          const currentProductForAddQuantities = findProductIncart(action.id)
          let updateProductAddQuantites = currentProductForAddQuantities.quantity - action.quantity;
          if (updateProductAddQuantites <= 0) {
            updateProductAddQuantites = 0;
          }
          return {
             ...state,
              products:  updateProductById(updateProductAddQuantites)
          }
       case 'REMOVE_PRODUCT_QUANTITY' :
          const currentProductForRemoveQuantities = findProductIncart(action.id);
          let updateProductRemoveQuantities = currentProductForRemoveQuantities.quantity + action.quantity;
          return {
             ...state,
             products: updateProductById(updateProductRemoveQuantities)
          }
          case 'ADD_REPLY_MESSAGE' :
          return { 
              ...state, 
              products: state.products.map(
                  product => product.id === action.idForUpdate ? {...product, comments : product.comments.concat(action.payload)  } : product)
          }
          case 'RATING_PRODUCT' :
          const currentProductRating = findProductIncart(action.id);
          let updateProductRating = (((currentProductRating.comments.length - 1) * currentProductRating.rating) + action.rating) / currentProductRating.comments.length
          return { 
              ...state, 
              products: state.products.map(
                  product => product.id === action.id ? {...product, rating : updateProductRating } : product)
          }

        default: return state
         }
}

export default reducer