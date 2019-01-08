import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const breadcrumb = props => (
  <Breadcrumb>
    <Breadcrumb.Section>
      <Link to="/">Boutique</Link>
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon="right angle" />
    <Breadcrumb.Section active>{props.productName}</Breadcrumb.Section>
  </Breadcrumb>
)

breadcrumb.propTypes = {
  productName: PropTypes.string.isRequired
}

export default breadcrumb
