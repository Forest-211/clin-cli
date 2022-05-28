module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: 'eslint:recommended',

    rules: {
        indent: [
            'error',
            4,
            {
                MemberExpression: 'off'
            }
        ],
        quotes: [4, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'quote-props': 'off',
        'no-shadow': ['error'],
        'node/no-extraneous-require': [
            'error',
            {
                allowModules: ['@vue/cli-service', '@vue/cli-test-utils']
            }
        ]
    }
};
