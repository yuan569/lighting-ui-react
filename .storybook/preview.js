import "../src/styles/index.scss";

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
      order: [
        "Welcome",
        "Button",
        "Menu",
        "Tabs",
        "Icon",
        "Input",
        "AutoComplete",
        "Select",
        "Progress",
        "Upload",
      ],
    },
  },
};
