import React from 'react';
import { Styled, css, Flex } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

function HowCanIHelp(){
  return(
    <div sx={{
      border: '4px solid #ff6ec7',
      borderRadius: '8px',
      padding: '20px'
    }}>
      <h2 sx={{padding:0, margin:0}}>How can I help?</h2>
      <p sx={{fontSize: 2}}>Write something thoughtful that will stand out here
      <br/>
      <b sx={{color: '#ff6ec7'}}>shoot me and email</b>, I'm happy to help
      </p>
      <a sx={{
        padding: '16px',
        borderRadius: '4px',
        backgroundColor: '#ff6ec7',
        display: 'inline-block',
        textDecoration: 'none',
        fontSize: 1
        
      }} href="mailto:pomejia@gmail.com.com" target="_blank">
        <span>👉</span>pomejia@gmail.com</a>
    </div>
  )
}

export default HowCanIHelp;