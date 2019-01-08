import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { initData } from './store/actions/index'

import Layout from './hoc/Layout'
import Spinner from './components/Spinner/Spinner'
import Navbar from './components/Navbar/Navbar'
import ProductPage from './containers/ProductPage/ProductPage'

class App extends Component {
  componentDidMount () {
    this.props.fetchData()
  }
  render () {
    if (this.props.isLoading) {
      return <Spinner />
    }
    if (this.props.error) {
      return <div>Un erreur est survenu : {this.props.error.message} </div>
    }
    return <div className="App">
        <Navbar />
        <Switch>
          <Route path="/produit/:id" render={props => {
              const productId = parseInt(props.match.params.id, 10)
              const product = this.props.products.find(el => el.id === productId)
              return product ? <ProductPage product={product} /> : <Redirect to="/" />
            }} />
          <Route exact path="/" component={Layout} />
          <Redirect to="/" />
        </Switch>
      </div>
  }
}

App.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  products: state.prod.products,
  isLoading: state.prod.loading,
  error: state.prod.error
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(initData())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
