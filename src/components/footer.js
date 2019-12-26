import React from 'react'
import { Styled, css, Flex } from 'theme-ui'

function Footer() {
  return (
    <footer>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Flex sx={{ width: '20%', justifyContent: 'space-between' }}>
          <div>Oscar Mejia</div>
          <div>Blog</div>
          <div>About</div>
        </Flex>
        <div>© {new Date().getFullYear()}, Oscar Mejia</div>
      </Flex>
    </footer>
  )
}

export default Footer
