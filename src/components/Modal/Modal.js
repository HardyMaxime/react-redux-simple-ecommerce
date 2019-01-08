import React from 'react'

import { Button, Icon, Modal, Header } from 'semantic-ui-react'

const modal = props => (
        <Modal
            trigger={<Button animated='vertical' color='yellow'>
              <Button.Content hidden>Cart</Button.Content>
                <Button.Content visible>
                  <Icon name='shop' />
                </Button.Content>
            </Button>}
            header={
            <Header icon='cart' content={
            <Header as='h2'>
               <Header.Content>
                {props.title}
               </Header.Content>
            </Header> } />
            }
            content={props.children}
            actions={[
            'Cancel',
            { key: 'done', content: 'Purchase', positive: true }
            ]}
        />
    )

export default modal
