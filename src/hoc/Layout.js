import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import ProductsList from './../containers/ProductsList/ProductsList'
import Sidebar from './../containers/Sidebar/Sidebar'

 class Layout extends Component {
    state = {}
    render () {
        return <Grid container stackable columns={2}>
              <Grid.Row centered>
                <Grid.Column mobile={16} tablet={6} computer={3}>
                  <Sidebar />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={10} computer={13}>
                  <ProductsList />
                </Grid.Column>
              </Grid.Row>
            </Grid>
    }
}

export default Layout
