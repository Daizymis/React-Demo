import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <p>oops！！！您所看的页面不存在</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
