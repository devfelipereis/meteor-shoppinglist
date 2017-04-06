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
<<<<<<< HEAD
    this.state = {
      name: '',
      amount: 1
    };
=======
>>>>>>> 15e8e774f4c938f7493b4d9d9521d6edf023ab28
  }

  render() {

    const { dispatchCreateProduct } = this.props

<<<<<<< HEAD
    const create = (event) => {
      event.preventDefault();
      const product = this.state;
      dispatchCreateProduct(product)
    }
=======
    const create = () => dispatchCreateProduct()
>>>>>>> 15e8e774f4c938f7493b4d9d9521d6edf023ab28

    return (
      <Form ref="create_product_form">
        <Header>
          <Heading>
            Cadastro de produtos
          </Heading>
        </Header>
        <FormField label="Produto">
<<<<<<< HEAD
          <TextInput name='name' placeHolder='Nome do produto' suggestions={['Frango', 'Arroz', 'Batata', 'Leite']} onSelect={({suggestion}) => this.setState({name: suggestion})} onDOMChange={(e) => this.setState({name: e.target.value})} />
        </FormField>
        <FormField label="Quantidade">
          <NumberInput name='amount' defaultValue={this.state.amount} min={1}  onChange={(e) => this.setState({amount: parseInt(e.target.value)})}/>
        </FormField>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Submit'
            type='submit'
            primary={true}
            onClick={create.bind(this)} />
=======
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
>>>>>>> 15e8e774f4c938f7493b4d9d9521d6edf023ab28
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
<<<<<<< HEAD
  dispatchCreateProduct: product => dispatch(createProduct(product)),
=======
  dispatchCreateProduct: text => dispatch(createProduct(event)),
>>>>>>> 15e8e774f4c938f7493b4d9d9521d6edf023ab28
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductForm);