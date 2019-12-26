import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled, css, Flex } from 'theme-ui'
import { Link } from "gatsby"

function BioContent() {
  return (
    <>
      <h1>
        Oscar Mejia
        <br />
        <div
          sx={{
            fontSize: 2
          }}
        >
          I'm a software developer from Houston, Texas.
          <br />I help companies meet their user's needs and wants.
        </div>
      </h1>
      <Flex
        sx={{
          flexWrap: 'wrap'
        }}
      >
        <Styled.a
        as={Link}
        to="/blog"
          sx={{
            marginRight: 16
          }}
        >
          Blog
        </Styled.a>
        <Styled.a
        as={Link}
        to="/projects"
          sx={{
            marginRight: 16
          }}
        >
          Projects
        </Styled.a>
        <Styled.a
          href="https://github.com/odm275"
          target="_blank"
          sx={{
            marginRight: 16
          }}
        >
          Github
        </Styled.a>
      </Flex>
    </>
  )
}
export default BioContent
