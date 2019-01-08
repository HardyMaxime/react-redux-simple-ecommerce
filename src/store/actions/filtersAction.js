export const onTextChange = value => (
    {
        type: 'ON_TEXT_CHANGE',
        value
    }
)
export const onChangeCategory = value => (
    {
        type: 'ON_CHANGE_CATEGORY',
        value
    }
)
export const onChangeFilterPrice = value => (
    {
        type: 'ON_CHANGE_FILTER_PRICE',
        value
    }
)

export const addQuantity = quantity => ({
  type: 'ADD_QUANTITY',
  quantity
})

export const removeQuantity = quantity => ({
  type: 'REMOVE_QUANTITY',
  quantity
})

export const updateQuantity = (update, quantity) => dispatch => {
  if (update === 'add') {
    dispatch(addQuantity(quantity))
  } else if (update === 'remove') {
    dispatch(removeQuantity(quantity))
  }
}
