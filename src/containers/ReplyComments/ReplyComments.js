import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Comment, Form, Header, Rating } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { addReplyMessage, ratingProduct } from './../../store/actions/index'

class ReplyComments extends Component {
  constructor () {
    super()

    this.state = {
      message: '',
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRate = this.handleRate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e => this.setState({ message: e.target.value })
  handleRate = (e, { rating }) => {
    this.setState({ rating })
  }

  handleSubmit = () => {
    this.setState({ message: '', rating: 0 })
    this.props.onAddReplyMessage(this.props.productId, moment().fromNow(), this.state.message, this.state.rating)
    this.props.onRatingProduct(this.props.productId, this.state.rating)
  }
  render () {
    return <Fragment>
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>
          {this.props.comments.map(comment => <Comment key={comment.id}>
              <Comment.Content>
                <Comment.Author as="a">
                  {comment.author}{' '}
                  <Rating icon="star" defaultRating={comment.commentRatingProduct} maxRating={5} disabled/>
                </Comment.Author>
                <Comment.Metadata>{comment.date}</Comment.Metadata>
                <Comment.Text>{comment.message}</Comment.Text>
              </Comment.Content>
            </Comment>)}
          <Header as="h3" dividing>
            Share your experience
          </Header>
          <Rating icon="star" defaultRating={0} maxRating={5} onRate={this.handleRate} />
          <Form reply onSubmit={this.handleSubmit}>
            <Form.TextArea onChange={this.handleChange} />
            <Button content="Add Reply" labelPosition="left" icon="edit" primary />
          </Form>
        </Comment.Group>
      </Fragment>
  }
}

const mapDispatchToProps = dispatch => ({
  onAddReplyMessage: (id, date, message, rating) => dispatch(addReplyMessage(id, date, message, rating)),
  onRatingProduct: (id, rating) => dispatch(ratingProduct(id, rating))
})

ReplyComments.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired,
  onAddReplyMessage: PropTypes.func.isRequired,
  onRatingProduct: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired
}

export default connect(null, mapDispatchToProps)(ReplyComments)
