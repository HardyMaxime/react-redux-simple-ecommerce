import axios from 'axios'

export const fetchDataBegin = () => (
    {
        type: 'FETCH_DATA_BEGIN'
    }
)

export const fetchDataSuccess = data => (
    {
        type: 'FETCH_DATA_SUCCESS',
        data
    }
)

export const fetchDataFailed = error => (
    {
        type: 'FETCH_DATA_FAILED',
        error
    }
)

let isRender = false
export const initData = () => {
    if (!isRender) {
        isRender = true
        return dispatch => {
            dispatch(fetchDataBegin())
            return axios
              .get('data/fakeServerData.json')
              .then(res => dispatch(fetchDataSuccess(res.data.products)))
              .catch(err => dispatch(fetchDataFailed(err)))
            }
        }
  /* eslint-disable no-unused-expressions */
   dispatch => {}
}

export const addProductQuantity = (id, quantity) => ({
  type: 'ADD_PRODUCT_QUANTITY',
  id,
  quantity
})

export const removeProductQuantity = (id, quantity) => ({
  type: 'REMOVE_PRODUCT_QUANTITY',
  id,
  quantity
})

export const updateQuantity = (id, update, quantity) => dispatch => {
  if (update === 'add') {
    dispatch(addProductQuantity(id, quantity))
  } else if (update === 'remove') {
    dispatch(removeProductQuantity(id, quantity))
  }
}

export const addReplyMessage = (id, date, message, rating) => ({
  type: 'ADD_REPLY_MESSAGE',
  idForUpdate: id,
  payload: {
    id: new Date(),
    author: 'You',
    date,
    message,
    commentRatingProduct: rating
  }
})

export const ratingProduct = (id, rating) => ({
  type: 'RATING_PRODUCT',
  id,
  rating
})
