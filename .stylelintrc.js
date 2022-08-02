module.exports = {
    root: true,
    extends: [
        "stylelint-config-standard",
        "stylelint-config-rational-order",
        "stylelint-config-prettier",
        "stylelint-config-html/vue",
    ],
    defaultSeverity: "warning",
    plugins: ["stylelint-order"],
    overrides: [
        {
            files: ["*.vue", "**/*.vue"],
            rules: {
                "selector-pseudo-class-no-unknown": [
                    true,
                    {
                        ignorePseudoClasses: ["deep"],
                    },
                ],
                "selector-pseudo-element-no-unknown": [
                    true,
                    {
                        ignorePseudoElements: ["v-deep"],
                    },
                ],
            },
        },
    ],
};
