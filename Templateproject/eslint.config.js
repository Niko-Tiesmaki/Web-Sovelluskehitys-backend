import globals from 'globals';
import js from '@eslint/js'

export default [
    {
        languageoptions : {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {...globals.node},
        },
    },
    js.configs.recommended,
];