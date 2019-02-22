import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const propTypes = {
  children: PropTypes.any.isRequired
};

const Hidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const VisuallyHidden = ({ children }) => <Hidden>{children}</Hidden>;

VisuallyHidden.propTypes = propTypes;

export default VisuallyHidden;
