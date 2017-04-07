import React from 'react';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import { deleteProduct } from '../product/modules/product';

class ProductList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { dispatchDeleteProduct } = this.props

    const handleDeleteProduct = (productId) => {
      dispatchDeleteProduct(productId)
    }

    return (
      <Table selectable={true}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product =>
            <TableRow key={product._id} onClick={handleDeleteProduct.bind(this, product._id)}>
              <td>{product.name}</td>
              <td>{product.amount}</td>
            </TableRow>
          )}
        </tbody>
      </Table>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(null, mapDispatchToProps)(ProductList);