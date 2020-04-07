import React from "react";
import { Flex } from "theme-ui";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import RainbowButton from "./rainbow-button";
import FeedbackWidget from "../components/feedback-widget";

const WidgetWrapper = ({ children, hidden }) => {
  return (
    <div
      sx={{
        display: hidden ? "none" : "block",
        position: "absolute",
        top: "50vh",
        right: 0,
        maxWidth: "300px",
        backgroundColor: "background",
        borderStyle: "solid",
        borderColor: "noticeMe",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

const feedbackMachine = Machine({
  id: "feedback",
  initial: "closed",
  states: {
    opened: {
      on: {
        CLOSED: "closed",
      },
    },
    closed: {
      on: {
        OPEN: "opened",
      },
    },
  },
});

function HowCanIHelp() {
  const [current, send] = useMachine(feedbackMachine);

  const handleOpen = () => {
    send("OPEN");
    console.log(current.value, current.value === "closed");
  };
  const handleClose = () => {
    send("CLOSE");
    console.log(current.value);
  };

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
        <RainbowButton onClick={handleOpen} />
        <WidgetWrapper hidden={current.value === "closed"}>
          <FeedbackWidget handleClose={handleClose} />
        </WidgetWrapper>
      </Flex>
    </div>
  );
}

export default HowCanIHelp;
