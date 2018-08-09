import React from 'react';
import PropTypes from 'prop-types';

const ShowPost = ({ post }) => {
  return (
    <div>
      <div className="shadow-sm card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <img
              className="rounded-circle d-none d-md-block"
              src={post.avatar}
              alt=""
            />
            <br />
            <p className="badge badge-dark text-center">
              Author: '{post.name}'
            </p>
          </div>
          <div className="col-md-10">
            <h4 className="mb-4">
              <strong>{post.subject}</strong>
            </h4>

            <p className="lead mb-5">{post.text}...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ShowPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default ShowPost;