module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 0,
    'arrow-body-style': 0,
    'linebreak-style': 0,
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
