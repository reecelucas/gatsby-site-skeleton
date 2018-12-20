import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.any.isRequired
};

const Accordion = ({ children }) => <div>{children}</div>;

Accordion.propTypes = propTypes;

export default Accordion;
