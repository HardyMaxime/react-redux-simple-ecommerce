import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updateProductAlreadyInCart,
  updateQuantity
} from './../../store/actions/index'

class Select extends Component {
  constructor () {
    super()
    this.state = {
      currentProduct: null,
      selectQuantities: 0
    }

    this.computedPrice = this.computedPrice.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    const currentProduct = this.props.products.find(
      currProduct => currProduct.id === this.props.productId
    )
    this.setState({
      currentProduct,
      selectQuantities:
        this.props.quantitiesWanted
    })
  }

  handleChange = e => {
    const value = parseInt(e.target.value, 10)
    this.setState({
      selectQuantities: value
    })

    this.props.onUpdateProductAlreadyInCart({
      id: this.props.productId,
      quantityWanted: value,
      totalPrice: this.computedPrice(
        this.state.currentProduct.price,
        value,
        this.props.totalPrice
      )
    })
    this.props.onUpdateQuantity(this.props.productId, 'remove', this.props.quantitiesWanted - value)
  }

  computedPrice = (price, quantityWanted, totalPrice) => {
    let result = 0
    if (quantityWanted === 1) {
      result = totalPrice - price
    } else {
      result = price * quantityWanted
    }
    return parseInt(result, 10)
  }

  render () {
    const array = []
    const quantities = this.props.quantitiesWanted
    for (let i = 0; i < quantities; i++) {
      array.push(i + 1)
    }
    return (
      <select
        name="selectQuantities"
        value={this.state.selectQuantities}
        onChange={this.handleChange}
      >
        {array.map(elem => (
          <option key={elem}>
            {elem}
          </option>
        ))}
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.prod.products
})

const mapDispatchToProps = dispatch => ({
  onUpdateProductAlreadyInCart: (obj) => dispatch(updateProductAlreadyInCart(obj)),
  onUpdateQuantity: (id, update, quantity) => dispatch(updateQuantity(id, update, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Select)
