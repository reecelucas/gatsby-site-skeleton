import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { SPACING, TYPE_SCALE } from '../../styles/theme';

import successIcon from '../../images/alert-icon--success.svg';
import warningIcon from '../../images/alert-icon--warning.svg';
import errorIcon from '../../images/alert-icon--error.svg';

setConfig({ pureSFC: true });

const propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  className: PropTypes.string
};

const alertIconSize = '24';

const themeColours = {
  success: '#3c763d',
  warning: '#8a6d3b',
  error: '#a94442'
};

const themeBgColours = {
  success: '#dff0d8',
  warning: '#fcf8e3',
  error: '#f2dede'
};

const themeBorderColours = {
  success: '#d6e9c6',
  warning: '#faebcc',
  error: '#ebccd1'
};

const themeIcons = {
  success: successIcon,
  warning: warningIcon,
  error: errorIcon
};

const Container = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => themeBgColours[theme]};
  border: ${({ theme }) => `1px solid ${themeBorderColours[theme]}`};
  border-radius: 2px;
  color: ${({ theme }) => themeColours[theme]};
  display: flex;
  font-size: ${TYPE_SCALE[16]};
  padding: ${SPACING.small};

  &:before {
    content: '';
    background-color: transparent;
    background-image: ${({ theme }) => `url(${themeIcons[theme]})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    flex-shrink: 0;
    height: ${alertIconSize}px;
    margin-right: ${SPACING.small};
    width: ${alertIconSize}px;
  }
`;

const CloseButton = styled.button`
  align-self: center;
  color: currentColor;
  font-size: ${TYPE_SCALE[16]};
  font-weight: 600;
  margin-left: auto;
  text-transform: uppercase;
`;

const Alert = ({ children, theme, className }) => {
  const [show, setShow] = useState(true);

  const dismiss = () => {
    setShow(false);
  };

  const renderAlert = () => (
    <Container
      className={className}
      theme={theme}
      role="alert"
      aria-live="assertive"
    >
      {children}
      <CloseButton onClick={dismiss}>Dismiss</CloseButton>
    </Container>
  );

  return show ? renderAlert() : null;
};

Alert.propTypes = propTypes;

export default Alert;
