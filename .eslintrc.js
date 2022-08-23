module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    "settings": {
        "import/resolver": {
            "nuxt-import": {}
        }
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:vue/recommended'],
    // add your custom rules here
    rules: {
        'semi': ["error", "always"],
        "vue/comment-directive": 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-unused-vars': 'warn',
        'comma-dangle': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'global-require': 'off',
        'max-len': 'off',
        'object-curly-newline': 'off',
        // 暫時先關掉
        'no-alert': 'off',
        'no-console': 'off',
        'func-names': 'off',
        // allow debugger during development
        'no-debugger': 'off',
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        'import/prefer-default-export': 'warn',
        'import/no-dynamic-require': 'off',
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js']
        }],
        'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
        // vue plugin
        'vue/no-v-html': 'off',
        'vue/html-indent': ['warn', 4],
        'vue/max-attributes-per-line': ['warn', {
            singleline: 2,
            multiline: 1
        }],
        'vue/html-self-closing': ['warn', {
            html: {
                void: 'always',
                normal: 'always',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }],
        // 此規則會導致safari瀏覽器跑版
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        "space-before-function-paren": ["error", "never"],
        "import/prefer-default-export": "off",
    }
};
