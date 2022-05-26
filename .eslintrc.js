module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    rules: {
        indent: ['error', 4],
        'max-len': 'off',
        'no-console': 'off',
        'no-shadow': 'off', // Investigate
        'no-alert': 'off', // TODO
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'class-methods-use-this': 'off', // We need to use abstract methods
    },
    ignorePatterns: [
        'static/**/*',
    ],
};
