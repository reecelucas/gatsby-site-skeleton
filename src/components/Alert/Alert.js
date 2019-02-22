import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { SPACING, TYPE_SCALE } from '../../styles/theme';

import successIcon from '../../images/alert-icon--success.svg';
import warningIcon from '../../images/alert-icon--warning.svg';
import errorIcon from '../../images/alert-icon--error.svg';

const propTypes = {
  children: PropTypes.string.isRequired,
  appearance: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  className: PropTypes.string
};

const alertIconSize = '24';
const themes = {
  success: {
    bg: '#dff0d8',
    text: '#3c763d',
    border: '#d6e9c6',
    icon: successIcon
  },
  warning: {
    bg: '#fcf8e3',
    text: '#8a6d3b',
    border: '#faebcc',
    icon: warningIcon
  },
  error: {
    bg: '#f2dede',
    text: '#a94442',
    border: '#ebccd1',
    icon: errorIcon
  }
};

const Container = styled.div`
  align-items: flex-start;
  background-color: ${({ appearance }) => themes[appearance].bg};
  border: ${({ appearance }) => `1px solid ${themes[appearance].border}`};
  border-radius: 2px;
  color: ${({ appearance }) => themes[appearance].text};
  display: flex;
  font-size: ${TYPE_SCALE[16]};
  padding: ${SPACING.small};

  &:before {
    content: '';
    background-color: transparent;
    background-image: ${({ appearance }) => `url(${themes[appearance].icon})`};
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

const Alert = ({ children, appearance, className }) => {
  const [show, setShow] = useState(true);

  const dismiss = () => {
    setShow(false);
  };

  const renderAlert = () => (
    <Container
      className={className}
      appearance={appearance}
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
