/** @type {import('eslint').Linter.Config[]} */
import js from '@eslint/js'; 
export default [
  js.configs.recommended, 
  {
    languageOptions: {
      globals: {
        browser: true,
      },
    },
    rules: {
      "no-undef": "off",
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
      "no-console": "off",
      "quotes": [
      'warn',
      'single'
      ],
    },
    
    
  },
  {
    ignores: ["eslint.config.js"]
}
];
