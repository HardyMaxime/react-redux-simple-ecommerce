import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Table, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Select from './../../containers/Select/Select'

import {
  deleteProductInCart,
  updateQuantity
} from './../../store/actions/index'

class Cart extends PureComponent {
  updateCart (id, quantity) {
    this.props.onDeleteProduct(id, quantity)
    this.props.onUpdateQuantity(id, 'remove', quantity)
  }
  render () {
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Product name</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Quantities</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Total Price</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Delete product
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.props.productInCart.map(inCart => {
          const array = []
          for (let i = 0; i < inCart.quantityWanted; i++) {
            array.push(i + 1)
          }
          return <Table.Body key={inCart.id}>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h2" textAlign="center">
                      {inCart.name}
                    </Header>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Select quantitiesWanted={inCart.quantityWanted} productId={inCart.id} totalPrice={inCart.totalPrice} />
                  </Table.Cell>
                  <Table.Cell textAlign="center">{inCart.totalPrice}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button
                      negative
                      icon="delete"
                      onClick={() =>
                        this.updateCart(inCart.id, inCart.quantityWanted)
                      }
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            })
        }
      </Table>
    )
  }
}

Cart.propTypes = {
  productInCart: PropTypes.instanceOf(Array).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  productInCart: state.cart.inCart
})

const mapDispatchToProps = dispatch => ({
  onDeleteProduct: id => dispatch(deleteProductInCart(id)),
  onUpdateQuantity: (id, update, quantity) => dispatch(updateQuantity(id, update, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
