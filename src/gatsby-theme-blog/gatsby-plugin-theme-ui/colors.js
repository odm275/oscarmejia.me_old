import merge from 'lodash.merge'
import defaultThemeColors from 'gatsby-theme-blog'

export default merge({}, defaultThemeColors, {
  primary: '#0E23B4',
  modes: {
    dark: {
      background: 'rgb(28, 28, 28)',
      primary: '#0C80A5'
    }
  }
})
