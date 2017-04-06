import React from 'react';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';


class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [{name: 'asdsadas', amount: 10}]
    };
  }

  render() {

    console.log(this.state, this.props)
    
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

const mapStateToProps = (state, props) => {
  return {
    products: state
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, null)(ProductList);