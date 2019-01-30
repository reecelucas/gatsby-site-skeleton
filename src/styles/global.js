import { css } from '@emotion/core';
import * as generic from './generic';
import * as elements from './elements';

export default css`
  ${generic.boxSizing};
  ${generic.normalize};
  ${generic.reset};
  ${generic.shared};
  ${generic.focusManagement};
  ${generic.fonts};

  ${elements.page};
  ${elements.headings};
  ${elements.images};
`;
