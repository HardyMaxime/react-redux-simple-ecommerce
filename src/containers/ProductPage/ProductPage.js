import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Grid, Segment, Image, Button, Form, Message } from 'semantic-ui-react'

import {
  addToCart,
  updateQuantity,
  updateProductAlreadyInCart
} from './../../store/actions/index'

import Breadcrumb from './../../components/Breadcrumb/Breadcrumb'
import ProductDescription from './../../components/ProductDescription/ProductDescription'
import ReplyComments from './../ReplyComments/ReplyComments'

class ProductPage extends Component {
  constructor () {
    super()

    this.state = {
      selectQuantity: 0,
      message: ''
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  computedPrice (quantityWanted) {
    /* Calculé le prix en fonctionne de la quantité
        Ex : Prix produit = 5€ quantité demandé 2
        prix total : 2*5
    */
    const result = this.props.product.price * quantityWanted
    return parseInt(result, 10)
  }

  handleClick = (id) => {
    const quantityWanted = parseInt(this.state.selectQuantity, 10)
    if (quantityWanted <= 0 || quantityWanted === null) {
      return this.setState({ message: 'Veuillez choisir une quantité valide' })
    }

    if (quantityWanted > this.props.product.quantity) {
      return this.setState({ message: `Ce produit ne possède plus assez de stock (stock actuel : ${this.props.product.quantity})` })
    }
    this.setState({ message: '', selectQuantity: 0 })

    let productAlreadyInCart = this.props.productInCart.find(prod => prod.id === id)

    if (productAlreadyInCart) {
      productAlreadyInCart = {
        id: this.props.product.id,
        quantityWanted: productAlreadyInCart.quantityWanted + quantityWanted,
        totalPrice: productAlreadyInCart.totalPrice + this.computedPrice(quantityWanted)
      }

      this.props.onUpdateProductAlreadyInCart(productAlreadyInCart)
    } else {
      const totalPrice = this.computedPrice(quantityWanted)
      const productInCart = {
        id: this.props.product.id,
        name: this.props.product.name,
        quantityWanted,
        totalPrice
    }
      this.props.addToCart(productInCart)
    }
    this.props.updateQuantity(this.props.product.id, 'add', quantityWanted)
    return true
  }

  render () {
    return <Grid container stackable columns="equal">
        <Segment style={{ width: '100%' }} textAlign="center">
          <h1>{this.props.product.name}</h1>
        </Segment>
        <Breadcrumb productName={this.props.product.name} />
        <Grid.Row centered>
          <Grid.Column>
            <Image src={this.props.product.path} size="big" />
          </Grid.Column>
          <Grid.Column>
            <ProductDescription product={this.props.product} productRating={this.props.product.rating} />
            {this.state.message ? <Message warning>
                <Message.Header>{this.state.message}</Message.Header>
              </Message> : null}
            <Form>
              <Form.Input name="selectQuantity" type="number" value={this.state.selectQuantity} onChange={this.handleChange} />
            </Form>
            {this.props.product.quantity !== 0
              ? <Button basic color="green" onClick={() => this.handleClick(this.props.product.id)}>
                  Ajouter au panier
                </Button>
              : <Button disabled basic color="red">
                  Article epuisé
                </Button>}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ReplyComments productId={this.props.product.id} comments={this.props.product.comments} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
  }
}

ProductPage.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  productInCart: PropTypes.instanceOf(Object).isRequired,
  addToCart: PropTypes.func.isRequired,
  onUpdateProductAlreadyInCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  productInCart: state.cart.inCart
})

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
  onUpdateProductAlreadyInCart: product => dispatch(updateProductAlreadyInCart(product)),
  updateQuantity: (id, update, quantity) => dispatch(updateQuantity(id, update, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
