import React from 'react'
import { Menu, Header, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const menuCategories = props => (
  <Menu pointing vertical>
    <Menu.Item>
      <Header as="h3">
        <Icon name="list layout" />
        <Header.Content>Categories</Header.Content>
      </Header>
    </Menu.Item>
    <Menu.Item onClick={() => props.onChangeCategoryHandler('')}>Afficher tout</Menu.Item>
    {props.allCategories.map((item, index) => (
      <Menu.Item key={index} onClick={() => props.onChangeCategoryHandler(item.toLowerCase())}>
        {item.charAt(0).toUpperCase() +
          item.substr(1).toLowerCase()}
      </Menu.Item>
    ))}
  </Menu>
)

menuCategories.propTypes = {
  allCategories: PropTypes.instanceOf(Array).isRequired,
  onChangeCategoryHandler: PropTypes.func.isRequired
}

export default menuCategories
