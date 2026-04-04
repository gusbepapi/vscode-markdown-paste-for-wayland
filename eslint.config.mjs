import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended, 
  { 
    rules: 
    { 
      "@typescript-eslint/no-explicit-any": "off", 
      "@typescript-eslint/no-unused-vars": "off", 
      "prefer-const": "off", 
      "no-case-declarations": "off", 
      "no-useless-assignment": "off", 
      "no-prototype-builtins": "off", 
      "no-useless-escape": "off", 
      "@typescript-eslint/no-require-imports": "off", 
      "no-var": "off", "@typescript-eslint/no-var-requires": "off" 
    }
  }
);
