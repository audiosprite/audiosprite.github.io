import * as React from 'react';
import { Quote, YouTube } from '../../components';
import { lorem } from '../../utils';
import { BlogPostFooter } from './BlogPostFooter';
import './Blog.scss';

const Blog = () => {
  return (
    <div className="Blog">
      <div className="Blog--Post">
        <p>{lorem}</p>
        <YouTube id="2QpT6T5NnDE" />
        <p>{lorem}</p>
        <Quote author="Arvo Pärt">
          {
            'In the past years we have had many losses in the world of music to mourn. Why did the date of Benjamin Britten’s death – 4 December 1976 – touch such a chord in me? During this time I was obviously at the point where I could recognize the magnitude of such a loss. Inexplicable feelings of guilt, more than that even, arose in me. I had just discovered Britten for myself. Just before his death I began to appreciate the unusual purity of his music – I had had the impression of the same kind of purity in the ballads of Guillaume de Machaut. And besides, for a long time I had wanted to meet Britten personally – and now it would not come to that.'
          }
        </Quote>
        <p>{lorem}</p>
      </div>
      <BlogPostFooter />
    </div>
  );
};

export default Blog;
