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

function FeelingCard({ emoji, selected, uniqueStyles }) {
  // const styles = {
  //   display: "flex",
  //   alignItems: "center",
  //   flexDirection: "column",
  //   flex: "1 0 auto",
  //   backgroundColor: `${selected ? "noticeMe" : "primary"}`,
  //   fontSize: "35px",
  //   borderRadius: "10px",
  // };
  // const allStyles = { ...styles, ...uniqueStyles };
  return <Button variant="secondary">{emoji}</Button>;
}

function FeedbackWidget() {
  const [current, send] = useMachine(feedbackMachine);

  function handleOpen() {
    send("OPENED");
  }
  function handleClose() {
    send("CLOSED");
  }

  console.log("current value", current.value);
  return (
    <Container
      sx={{
        maxWidth: "300px",
        position: "absolute",
        top: "50vh",
        right: 0,
        backgroundColor: "background",
        borderStyle: "solid",
        borderColor: "noticeMe",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h3>Hi, how are you doing today?</h3>
      <Flex sx={{ justifyContent: "space-between", marginBottom: "10px" }}>
        <FeelingCard emoji="🙂" />
        <FeelingCard
          emoji="🥳"
          uniqueStyles={{ marginLeft: "15px", marginRight: "15px" }}
        />
        <FeelingCard emoji="😎" />
      </Flex>
      <Flex sx={{ justifyContent: "flex-start" }}>
        <Button
          onClick={handleClose}
          sx={{
            alignItems: "flex-start",
          }}
          style={{
            marginRight: "10px",
          }}
        >
          Close
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            alignItems: "flex-start",
          }}
        >
          Submit
        </Button>
      </Flex>
    </Container>
  );
}

export default FeedbackWidget;
