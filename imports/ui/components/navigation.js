import React from 'react';
import { Link } from 'react-router-dom'

export const Navigation = () => (
  <ul>
    <li><Link to="/one">Page One</Link></li>
    <li><Link to="/two">Page Two</Link></li>
  </ul>
)