import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLOURS } from '../../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  ratio: PropTypes.oneOf(['2:1', '3:4', '4:3', '16:9']),
  as: PropTypes.string
};

const calculatePadding = ({ ratio }) => {
  if (!ratio) {
    return '100%'; // Default to a square
  }

  const [antecedent, consequent] = ratio.split(':');
  return `${(consequent / antecedent) * 100}%`;
};

const Container = styled.div`
  background-color: ${COLOURS.gray1};
  display: block;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: ${props => calculatePadding(props)};
    width: 100%;
  }

  > * {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

const IntrinsicRatio = ({ children, ratio, ...rest }) => (
  <Container ratio={ratio} {...rest}>
    {children}
  </Container>
);

IntrinsicRatio.propTypes = propTypes;

export default IntrinsicRatio;
