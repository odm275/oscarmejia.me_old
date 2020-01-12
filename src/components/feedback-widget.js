import React from "react";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import { Container } from "@theme-ui/components";
import { Styled, css, Flex } from "theme-ui";
import { Button } from "@theme-ui/components";
/** @jsx jsx */
import { jsx } from "theme-ui";

const feedbackMachine = Machine({
  id: "feedback",
  initial: "closed",
  states: {
    opened: {
      on: {
        CLOSED: "closed"
      }
    },
    closed: {
      on: {
        OPEN: "opened"
      }
    }
  }
});

function FeelingCard({ emotion, emoji, selected }) {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flex: "1 0 calc(100%/3)",
        backgroundColor: `${selected ? "noticeMe" : "pastyWhite"}`,
        color: "black"
      }}
    >
      <div>{emoji}</div>
      <div>{emotion}</div>
    </div>
  );
}

function FeedbackWidget() {
  const [current, send] = useMachine(feedbackMachine);

  function handleOpen() {
    send("OPEN");
  }
  function handleClose() {
    console.log("handle close");
    send("CLOSE");
  }

  console.log("current value", current.value);
  return (
    <Container
      sx={{
        maxWidth: "30vw",
        position: "absolute",
        top: "50vh",
        right: 0,
        backgroundColor: "noticeMe"
      }}
    >
      <h3>Hi, how are you doing today?</h3>
      <Flex sx={{ justifyContent: "space-between" }}>
        <FeelingCard emotion="poor" emoji=":(" />
        <FeelingCard emotion="fine" emoji=":\" />
        <FeelingCard emotion="great" emoji=":)" />
      </Flex>
      <Button
        onClick={handleClose}
        sx={{ color: "black", alignItems: "flex-end" }}
      >
        Close
      </Button>
    </Container>
  );
}

export default FeedbackWidget;
