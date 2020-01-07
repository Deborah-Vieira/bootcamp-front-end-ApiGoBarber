import React from 'react';
import PropTypes from 'prop-types';
//wrapper = embrulho, quando inspecionar o  nome aparecerá de forma diferente.

import { Wrapper, Content } from './styles';

//children sao todos os componentes filhos do authLayout

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

//validação de propriedades.
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
