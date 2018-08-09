import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Inputs from '../common/Inputs';
import TextArea from '../common/TextArea';
import { editPost, updatePost } from '../../actions/postActions';

export class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      text: '',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentDidMount() {
    this.props.editPost(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.post.post) {
      const postItem = nextProps.post.post;
      this.setState({
        subject: postItem.subject,
        text: postItem.text,
        errors: postItem.errors
      });
    }
  }

  async handleUpdate(e) {
    e.preventDefault();
    const newData = {
      subject: this.state.subject,
      text: this.state.text
    };
    const id = this.props.match.params.id;
    await this.props.updatePost(id, newData);
    this.props.history.push('/posts');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.props;
    return (
      <div>
        <div>
          <Link to="/posts" className="btn btn-secondary mb-3">
            Back to Posts
          </Link>
        </div>
        <div className="animated bounceInDown post-form mb-3">
          <div className="card card-secondary">
            <div className="card-header bg-secondary text-white">
              Edit Post...
            </div>
            <div className="card-body">
              <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <Inputs
                    placeholder="Subject"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleChange}
                    error={errors.subject}
                  />
                  <TextArea
                    placeholder="Create apost"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    error={errors.text}
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  editPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editPost, updatePost }
)(withRouter(EditPost));
