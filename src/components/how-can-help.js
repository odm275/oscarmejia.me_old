import React from "react";
import { Styled, css, Flex } from "theme-ui";
/** @jsx jsx */
import { jsx } from "theme-ui";
import RainbowButton from "./rainbow-button";
import FeedbackWidget from "../components/feedback-widget";

function HowCanIHelp() {
  return (
    <div
      sx={{
        border: "4px solid",
        borderColor: "noticeMe",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <h2 sx={{ padding: 0, margin: 0 }}>How can I help?</h2>
      <p sx={{ fontSize: 2 }}>
        Write something thoughtful that will stand out here
        <br />
        <b sx={{ color: "noticeMe" }}>shoot me and email</b>, I'm happy to help
      </p>
      <Flex sx={{ justifyContent: "space-between" }}>
        <a
          sx={{
            padding: "16px",
            borderRadius: "4px",
            backgroundColor: "noticeMe",
            display: "inline-block",
            textDecoration: "none",
            fontSize: 1,
          }}
          href="mailto:pomejia@gmail.com.com"
          target="_blank"
        >
          <span>👉</span>pomejia@gmail.com
        </a>
        <RainbowButton />
        <FeedbackWidget />
      </Flex>
    </div>
  );
}

export default HowCanIHelp;
