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
  }

  render() {

    const { dispatchCreateProduct } = this.props

    const create = () => dispatchCreateProduct()

    return (
      <Form ref="create_product_form">
        <Header>
          <Heading>
            Cadastro de produtos
          </Heading>
        </Header>
        <FormField label="Produto">
          <TextInput name='name' placeHolder='Nome do produto' suggestions={['Frango', 'Arroz', 'Batata', 'Leite']} />
        </FormField>
        <FormField label="Quantidade">
          <NumberInput name='amount' defaultValue={1} min={1}  onChange={() => console.log('teste button')}/>
        </FormField>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Submit'
            type='button'
            primary={true}
            onClick={create} />
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCreateProduct: text => dispatch(createProduct(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductForm);