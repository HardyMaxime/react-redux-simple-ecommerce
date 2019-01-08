import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Modal from './../Modal/Modal'
import Cart from './../../containers/Cart/Cart'

const navbar = () => (
  <Menu size="large" inverted>
    <Link to="/">
      <Menu.Item name="Ma Super Boutique" />
    </Link>
    <Menu.Item position="right">
      <Modal title="Your current cart" >
        <Cart />
      </Modal>
    </Menu.Item>
  </Menu>
)

export default navbar
