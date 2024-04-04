import "../src/styles/index.scss"
import { Icon as FeatherIcon, IconComponentProps as FeatherIconProps } from '@ailibs/feather-react-ts';

import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  

  options: {
    storySort: {
      order: ['Button', 'Menu', 'Tabs', 'Icon', 'Input', 'AutoComplete', 'Select', 'Progress', 'Upload'],
    },
    
  },
}