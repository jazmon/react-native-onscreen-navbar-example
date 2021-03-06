module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.android.js', '.ios.js'],
      },
    },
    'import/core-modules': ['react', 'react-native'],
  },
  env: {
    node: true,
    es6: true,
  },
  globals: {
    fetch: true,
    __DEV__: true,
    FormData: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    impliedStrict: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'flowtype', 'react', 'react-native'],
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/aria-props': 2,
    'react/display-name': 1,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-unknown-property': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 1,
    'react/jsx-filename-extension': 0, // disabled because react native doesnt like .jsx
    'arrow-parens': 0,
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNewExceptions: [
          'Color',
          'TouchableNativeFeedback.SelectableBackground',
          'TouchableNativeFeedback.Ripple',
        ],
      },
    ],
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-unused-vars': 1,
    'no-use-before-define': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-mixed-operators': 0,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0, // replace with 1 for very strict type checks
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-undef': 0,
  },
};
