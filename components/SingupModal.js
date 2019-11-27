import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Creators } from '../store/ducks/Login';
import { Creators as ModalCreators} from '../store/ducks/modal';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Select from '../components/Select';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Campo requirido'),
  email: Yup.string()
    .email('Email inválido')
    .required('Campo requirido'),
  grade: Yup.string()
  .required('Campo requirido'),
  password: Yup.string()
    .min(4,'Senha precisa ter mais de 4 caracteres')
    .required('Campo requirido'),
});

const SingupModal = ({ toggleSignupModal, submitSignup }) => {
  const handleSubmit = (values) => {
    submitSignup(values);
  }
  return(
    <Modal onClose={() => toggleSignupModal(false)}>
      <h4 className="color-brown">
        <span className="text-3xl leading-none mb-2 block">Ei o/</span>
        <span className="text-xl leading-none">
          Falta pouco para descobrir <br/> o seu caminho!
        </span>
        <Form className="mt-10 sign-in m-auto" onSubmit={handleSubmit} schema={schema}>
          <Input placeholder="NOME" name="name" type="nome"/>
          <br/>
          <Input placeholder="EMAIL" name="email" type="email"/>
          <br/>
          <Select
            name="grade"
            options={[
              { value: 'EnsinoFundamental', label: 'Ensino Fundamental' },
              { value: 'EnsinoMedio', label: 'Ensino Médio' },
              { value: 'EnsinoSuperior', label: 'Ensino Superior' },
            ]}
            placeholder="Selecione sua escolaridade"
          />
          <br/>
          <Input placeholder="SENHA" name="password" type="password" />
          <div className="mt-8 text-center">
            <button type="submit" className="uppercase text-lg bg-blueteal hover:bg-blueteal-ligter text-white font-medium hover:text-white py-1 px-12 mb-8 mt-4 border-4 border-blueteal hover:border-transparent">
              Cadastrar
            </button>
          </div>
        </Form>
      </h4>
    </Modal>
  );
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...Creators, ...ModalCreators}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SingupModal);
