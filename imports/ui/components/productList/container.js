import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ProductList from './ProductList';
import { Products } from '../../../api/products/products';

export default createContainer((props) => {

  const subscription = Meteor.subscribe('products.all');

  console.log('Products.find({}).fetch()', Products.find({}).fetch())

  return {
    products: Products.find({}).fetch(),
  };
}, ProductList);