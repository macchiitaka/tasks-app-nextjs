module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-a11y'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'no-empty-source': null,
    'declaration-property-value-no-unknown': true,
    'value-keyword-case': null,
    'no-descending-specificity': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['content-visibility', 'contain-intrinsic-size'],
      },
    ],
    'a11y/no-outline-none': null,
    'a11y/selector-pseudo-class-focus': true,
    'a11y/content-property-no-static-value': true,
    'a11y/font-size-is-readable': true,
    'a11y/no-obsolete-attribute': true,
    'a11y/no-obsolete-element': true,
    'a11y/no-text-align-justify': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: [
          'css-appearance',
          'css-gradients',
          'css-sticky',
          'intrinsic-width',
        ],
      },
    ],
  },
};
