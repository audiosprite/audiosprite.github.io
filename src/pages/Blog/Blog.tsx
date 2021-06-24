import React from 'react';
import { lorem } from '../../utils';
import './Blog.scss';

const Blog = () => {
  return (
    <div className="Blog">
      <div className="Blog--Post">
        {lorem}
        {lorem}
      </div>
    </div>
  );
};

export default Blog;
