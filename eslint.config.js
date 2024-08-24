import globals from "globals";
import pluginJs from "@eslint/js";
import p5js from 'eslint-plugin-p5js';


export default [
  {
    languageOptions: { 
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser, // Spread the browser globals
        setup: 'readonly',  // p5.js specific globals
        draw: 'readonly',
        createCanvas: 'readonly',
        background: 'readonly',
        ellipse: 'readonly',
        width: 'readonly',
        height: 'readonly',
      }
    },
    rules: {
      // You can add custom ESLint rules here if needed
    },
  },
  pluginJs.configs.recommended,  // Apply ESLint recommended rules
];