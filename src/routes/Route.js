import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

//importanto os estilos
import AuthLayout from '~/pages/_layout/auth';
import DefaultLayout from '~/pages/_layout/default';

//desistruturando e recebendo as propriedades do index.js
export default function RouteWrap({
  component: Component,
  isPrivate,
  ...rest
}) {
  //recebe a informação de login do user
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  //condicional de renderização de layout de tela
  const Layout = signed ? DefaultLayout : AuthLayout;

  //as props vem informações sobre a navegação e parametros da rota etc...
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrap.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrap.defaultProps = {
  isPrivate: false,
};
