import '../src/css/index.scss';

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
        order: ['Introduction']
      },
    },
    docs: {
        inlineStories: true,
        prepareForInline: (storyFn, { args }) => {
            return storyFn({ args });
        },
    },
}