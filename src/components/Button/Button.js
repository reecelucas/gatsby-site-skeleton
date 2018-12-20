import React from 'react';
import PropTypes from 'prop-types';
import getAttributeProps from '../../helpers/getAttributeProps';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { COLOURS, SPACING } from '../../styles/theme';

const propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

const reset = css`
  appearance: none;
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
`;

const StyledButton = styled.button`
  ${reset};
  align-items: center;
  background-color: ${COLOURS.accent};
  color: ${COLOURS.primary};
  display: inline-flex;
  font-weight: 600;
  line-height: 1;
  padding: ${SPACING.small} ${SPACING.base};

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({ disabled, onClick, children, className, ...rest }) => {
  const attributes = getAttributeProps(rest);

  if (disabled) {
    attributes['aria-disabled'] = true;
    attributes.disabled = true;
  }

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      className={className}
      {...attributes}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = propTypes;

export default React.memo(Button);
