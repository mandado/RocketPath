import React, {useRef} from 'react';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Creators } from '../store/ducks/Login';
import { Creators as ModalCreators} from '../store/ducks/modal';


const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Campo requirido'),
  password: Yup.string()
    .min(4,'Senha precisa ter mais de 4 caracteres')
    .required('Campo requirido'),
});

const LoginModal = ({submitLogin, toggleLoginModal}) => {
  const handleSubmit = (values) => {
    submitLogin(values)
  }
  return (<Modal onClose={() => toggleLoginModal(false)}>
    <h4 className="color-brown">
      <span className="text-3xl leading-none mb-2 block">Ei o/</span>
      <span className="text-xl leading-none">
        Falta pouco para descobrir <br/> o seu caminho!
      </span>

      <Form className="mt-10 sign-in m-auto" onSubmit={handleSubmit} schema={schema}>
        <Input placeholder="EMAIL" name="email" type="text"/>
        <br/>
        <Input placeholder="SENHA" name="password" type="password"/>
        <div className="mt-8 text-center">
          <button type="submit" className="uppercase text-lg bg-blueteal hover:bg-blueteal-ligter text-white font-medium hover:text-white py-1 px-12 mb-8 mt-4 border-4 border-blueteal hover:border-transparent">
            Entrar
          </button>
        </div>
      </Form>
    </h4>
  </Modal>);
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...Creators, ...ModalCreators}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
