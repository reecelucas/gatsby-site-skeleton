import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';

const propTypes = {
  children: PropTypes.any.isRequired,
  expanded: PropTypes.bool
};

const AccordionItem = ({ children, expanded }) => {
  const [isExpanded, setIsExpanded] = useState(expanded || false);

  const toggleVisibility = () => {
    setIsExpanded(isExpanded => !isExpanded);
  };

  return (
    <AccordionContext.Provider
      value={{
        expanded: isExpanded,
        onClick: toggleVisibility
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

AccordionItem.propTypes = propTypes;

export default AccordionItem;
