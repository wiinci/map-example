// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: ['html'],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        // no-undef
        'no-undef': ['warn'],
        // max-len
        'max-len': 'off',
        // 4-space indentation
        indent: ['warn', 4],
        // Multi-line comma dangle
        'comma-dangle': ['error', 'only-multiline'],
        // Turn off no-underscore-dangle
        'no-underscore-dangle': 'off',
        // Turn off global-require
        'global-require': 'off',
        // don't require .vue extension when importing
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                vue: 'never'
            }
        ],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: ['test/unit/index.js']
            }
        ],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
