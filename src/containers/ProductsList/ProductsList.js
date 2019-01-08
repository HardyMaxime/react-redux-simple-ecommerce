import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import ProductCard from './../../components/ProductCard/ProductCard'

class ProductsList extends PureComponent {
     state = {}
     render () {
         return (
            <Fragment>
                <Card.Group>
                    {this.props.products
                    .filter(item => item.name.toLowerCase()
                        .includes(this.props.filterString.toLowerCase()))
                    .filter(item => item.category.toLowerCase()
                        .includes(this.props.categorieFilter))
                    .filter(item => item.price <= this.props.maxPrice)
                    .map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Card.Group>
            </Fragment>
        )
    }
};

ProductsList.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  filterString: PropTypes.string.isRequired,
  categorieFilter: PropTypes.string.isRequired,
  maxPrice: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  products: state.prod.products,
  filterString: state.filter.filterString,
  categorieFilter: state.filter.categorieFilter,
  maxPrice: state.filter.maxPrice
})

export default connect(mapStateToProps)(ProductsList)
