module.exports = {
    browser: true,
    notify: true,
    globals: {
        "ts-jest": {
            skipBabel: true
        }
    },
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    testRegex: "\\.(test|spec)\\.(js?|ts?)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
};
