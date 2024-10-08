module.exports = {
    extends: ['stylelint-config-sass-guidelines'],
    plugins: ['stylelint-declaration-strict-value'],
    rules: {
        indentation: null,

        'max-nesting-depth': [
            12,
            {
                ignoreAtRules: ['each', 'media', 'supports', 'include']
            }
        ],

        'scale-unlimited/declaration-strict-value': [
            '/color$/',
            {
                ignoreKeywords: ['currentColor', 'transparent', 'inherit']
            }
        ],

        'scss/at-extend-no-missing-placeholder': null,
        'selector-max-compound-selectors': 12,
        'order/properties-alphabetical-order': null,

        'selector-class-pattern': null,

        'font-weight-notation': 'numeric',
        'font-family-no-duplicate-names': true,

        'font-family-name-quotes': 'always-where-recommended',
        'font-family-no-missing-generic-family-keyword': true,

        'scss/dollar-variable-pattern': null,
        'scss/at-function-pattern': null,
        'order/order': null,

        'string-quotes': null,
        'selector-max-id': null,
        'function-parentheses-space-inside': null,
        'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }]
    }
};
