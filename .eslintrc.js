module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": [
            "error",
            "always"
        ],
        /**
         * This will make the history of changes in the hit a little cleaner
         */
            "comma-dangle": [
            "warn",
            "always-multiline"
        ],
        /**
         * Just for beauty
         */
        "quotes": [
            "warn", "single"
        ]
    }
}
