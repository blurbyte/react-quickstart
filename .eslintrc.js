const path = require('path');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: ['react', 'jsx-a11y', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    quotes: 0,
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    semi: [1, 'always'],
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'spaced-comment': [2, 'always'],
    'jsx-quotes': 1,
    'import/no-unresolved': 2,
    'import/no-named-as-default': 0,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 1,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 0,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'import/extensions': 1,
    'react/self-closing-comp': 0,
    'react/sort-comp': 1,
    'react/jsx-wrap-multilines': 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': 2,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'prettier/prettier': [2, { singleQuote: true }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.prod.js')
      }
    }
  },
  globals: {}
};
