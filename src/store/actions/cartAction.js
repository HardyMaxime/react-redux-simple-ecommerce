export const addToCart = productInCart => ({
  type: 'ADD_TO_CART',
  value: productInCart
})

export const updateProductAlreadyInCart = productInCart => ({
  type: 'UPDATE_PRODUCT_ALREADY_IN_CART',
  value: productInCart
})

export const deleteProductInCart = id => ({
  type: 'DELETE_PRODUCT_IN_CART',
  id
})
