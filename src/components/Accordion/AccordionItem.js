import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AccordionItemContext from './AccordionItemContext';
import getHtmlAttributes from '../../helpers/getHtmlAttributes';

const propTypes = {
  children: PropTypes.any.isRequired,
  initialOpen: PropTypes.bool
};

const AccordionItem = ({ children, initialOpen, ...props }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(initialOpen || false);

  const onToggle = () => {
    setIsOpen(ref.current && ref.current.open);
  };

  return (
    <AccordionItemContext.Provider value={{ isOpen }}>
      <details
        ref={ref}
        open={isOpen}
        onToggle={onToggle}
        {...getHtmlAttributes(props)}
      >
        {children}
      </details>
    </AccordionItemContext.Provider>
  );
};

AccordionItem.propTypes = propTypes;

export default AccordionItem;
