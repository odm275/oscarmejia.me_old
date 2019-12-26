import merge from 'deepmerge'
import defaultThemeColors from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui'

export default merge(defaultThemeColors, {
  primary: '#0E23B4',
  noticeMe: '#ff6ec7',
  modes: {
    dark: {
      background: 'rgb(28, 28, 28)',
      primary: '#0C80A5'
    }
  }
})
