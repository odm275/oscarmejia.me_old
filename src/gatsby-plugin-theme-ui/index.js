import merge from 'deepmerge'
import baseTheme from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui'
import typography from './typography'
import styles from './styles'

console.log(baseTheme)
const myOverrides = {
  fonts: {
    body: 'Roboto, sans-serif'
  },
  sizes: {
    container: 768
  },
  typography,
  styles,
}

console.log(merge(baseTheme, myOverrides))
export default merge(baseTheme, myOverrides)
