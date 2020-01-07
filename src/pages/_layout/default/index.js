import React from 'react';
import PropTypes from 'prop-types';
//wrapper = embrulho, quando inspecionar o  nome aparecerá de forma diferente.

import { Wrapper } from './styles';

//children sao todos os componentes filhos do authLayout

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

//validação de propriedades.
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
