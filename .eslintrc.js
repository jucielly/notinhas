module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'warn',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'react/jsx-props-no-spreading': 'off',
  },
};
