import React from 'react';
import { connect } from 'react-redux';

import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';

import { createProduct } from './modules/product';

class CreateProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: 1
    };
  }

  render() {

    const { dispatchCreateProduct } = this.props

    const handleCreateProduct = (event) => {
      event.preventDefault();
      const product = this.state;
      dispatchCreateProduct(product)
    }

    return (
      <Form ref="create_product_form">
        <Header>
          <Heading>
            Cadastro de produtos
          </Heading>
        </Header>
        <FormField label="Produto">
          <TextInput name='name' placeHolder='Nome do produto' suggestions={['Frango', 'Arroz', 'Batata', 'Leite']} onSelect={({suggestion}) => this.setState({name: suggestion})} onDOMChange={(e) => this.setState({name: e.target.value})} />
        </FormField>
        <FormField label="Quantidade">
          <NumberInput name='amount' defaultValue={this.state.amount} min={1}  onChange={(e) => this.setState({amount: parseInt(e.target.value)})}/>
        </FormField>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Submit'
            type='submit'
            primary={true}
            onClick={handleCreateProduct.bind(this)} />
        </Footer>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchCreateProduct: product => dispatch(createProduct(product)),
});

export default connect(null, mapDispatchToProps)(CreateProductForm);