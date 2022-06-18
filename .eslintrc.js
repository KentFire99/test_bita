module.exports = {
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier", "react"],
  rules: {
    "no-unused-vars": "off",
    'camelcase': 'off',
    "prettier/prettier": "off",
    "react/function-component-definition": "off",
    "react/self-closing-comp": "off",
    "camelcase": ["error", { "allow": ["aa_bb"] }],
    "eqeqeq": "off",
    "import/no-unresolved": [
      2,
      { "caseSensitive": false }
    ],
    
   
  },

};
