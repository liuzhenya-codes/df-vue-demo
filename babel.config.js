module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@df_scope/df-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
