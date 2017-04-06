import React from 'react';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product =>
            <TableRow>
              <td>{product.name}</td>
              <td>{product.amount}</td>
            </TableRow>
          )}
        </tbody>
      </Table>
    )
  }
}