import React from 'react';
import PropTypes from 'prop-types';
import getHtmlAttributes from '../../helpers/getHtmlAttributes';
import { captureInteraction } from '../../error-handling/error-handling';
import styled from '@emotion/styled';
import Link from '../Link/Link';
import { css } from '@emotion/core';
import { COLOURS, SPACING } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string,
  newTab: PropTypes.bool,
  disabled: PropTypes.bool
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

const buttonStyles = css`
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

const StyledButton = styled.button`
  ${buttonStyles};
`;

const StyledLink = styled(Link)`
  ${buttonStyles};
`;

const Button = React.forwardRef(function Button(props, ref) {
  const { id, onClick, disabled, children, href, newTab, ...rest } = props;

  const attributes = getHtmlAttributes(rest);

  if (disabled) {
    attributes['aria-disabled'] = true;
    attributes.disabled = true;
  }

  const renderLink = () => {
    return (
      <StyledLink
        id={id}
        href={href}
        newTab={newTab}
        onClick={onClick}
        ref={ref}
        {...attributes}
      >
        {children}
      </StyledLink>
    );
  };

  const renderButton = () => (
    <StyledButton
      type="button"
      onClick={event => {
        captureInteraction(event);
        onClick(event);
      }}
      data-interaction-id={id}
      ref={ref}
      {...attributes}
    >
      {children}
    </StyledButton>
  );

  return href ? renderLink() : renderButton();
});

Button.propTypes = propTypes;

export default Button;
