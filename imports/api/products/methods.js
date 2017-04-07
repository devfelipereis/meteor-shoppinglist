// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Products } from './products';

Meteor.methods({
  'products.insert'({name, amount}) {
    check(name, String);
    check(amount, Number);

    return Products.insert({
      name,
      amount,
      createdAt: new Date(),
    });
  },
});

Meteor.methods({
  'products.delete'(productId) {
    check(productId, String);

    return Products.remove(productId);
  },
});
