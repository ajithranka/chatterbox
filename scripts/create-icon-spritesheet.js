const fs = require('fs')
const prettier = require('prettier')

const ICON_SOURCE_DIRECTORY = './assets/icons'

let iconSymbols = ''
fs.readdirSync(ICON_SOURCE_DIRECTORY).forEach((fileName) => {
  const iconSlug = fileName
    // Strip file extension
    .replace(/\.\w+$/, '')
    // Replaces spaces with hyphens
    .replace(/ /, '-')
    .toLowerCase()
  const iconContent = fs
    .readFileSync(`${ICON_SOURCE_DIRECTORY}/${fileName}`, 'utf8')
    //
    // Regex to
    //   (1) Strip all text before and after the svg tag
    //   (2) Remove all attributes except the viewBox
    //   (3) Preserve the contents the svg element
    //
    // /^(--1--)(-----------2---------------)(---3---)(--2--)(--1--)$/
    // /^[\s\S]*<svg.*(viewBox=\"[^\"]*\").*>([\s\S]*)<\/svg>[\s\S]*$/,
    //
    .replace(
      /^[\s\S]*<svg.*(viewBox="[^"]*").*>([\s\S]*)<\/svg>[\s\S]*$/,
      `<symbol id="icon-${iconSlug}" $1>$2</symbol>`
    )
  iconSymbols += iconContent
})

const spritesheet = prettier.format(
  `
<template>
  <!-- 
  This file is auto-generated by the create-icon-spritesheet script.
  $ node scripts/create-icon-spritesheet.js
  -->
  <svg width="0" height="0" style="display: none">
    ${iconSymbols}
  </svg>
</template>
`,
  { parser: 'vue' }
)

fs.writeFileSync('./components/AppIconSpritesheet.vue', spritesheet)