import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Input, Form } from 'semantic-ui-react'

import { onTextChange, onChangeCategory, onChangeFilterPrice } from './../../store/actions/index'

import MenuCategories from './../../components/MenuCategories/MenuCategories'

class Sidebar extends PureComponent {
    render () {
        let categories = this.props.products.map(item => item.category)
        const maxPrice = parseInt(this.props.maxPrice, 10)
        /* eslint-disable */
        const allCategories = array => {
            let i, j, len = array.length, 
            out = [], obj = {};

            for (i = 0; i < len; i++) {
                obj[array[i]] = 0;
            }
            for (j in obj) {
                out.push(j);
            }
            return out;
        }
        /* eslint-enabled */
        categories = allCategories(categories)
        return <Fragment>
            <Input icon="search" placeholder="Search..." onKeyUp={e => this.props.onTextChange(e.target.value)} />
            <Form>
              <Form.Input label={`Prix max : ${maxPrice}€ `} min={0} max={999} name="rangePrice" onChange={e => this.props.onChangeFilterPrice(parseInt(e.target.value, 10))} step={5} type="range" value={maxPrice} />
            </Form>
            <MenuCategories onChangeCategoryHandler={this.props.onChangeCategory} allCategories={categories} />
          </Fragment>; 
    }
}

Sidebar.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  onTextChange: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  products: state.prod.products,
  maxPrice: state.filter.maxPrice
})

const mapDispatchToProps = dispatch => ({
  onTextChange: value => dispatch(onTextChange(value)),
  onChangeCategory: value => dispatch(onChangeCategory(value)),
  onChangeFilterPrice : value => dispatch(onChangeFilterPrice(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
