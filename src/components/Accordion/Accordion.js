import React from 'react';
import PropTypes from 'prop-types';
import getHtmlAttributes from '../../helpers/getHtmlAttributes';

const propTypes = {
  children: PropTypes.any.isRequired
};

const Accordion = ({ children, ...props }) => (
  <div {...getHtmlAttributes(props)}>{children}</div>
);

Accordion.propTypes = propTypes;

export default Accordion;
