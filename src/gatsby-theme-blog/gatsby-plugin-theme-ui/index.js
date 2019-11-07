import merge from 'lodash.merge'
import baseTheme from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui'

export default merge({}, baseTheme, {
  sizes: {
    container: 1024
  }
})
