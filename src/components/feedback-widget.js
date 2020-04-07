import React from "react";

import { Container } from "@theme-ui/components";
import { Styled, css, Flex } from "theme-ui";
import { Button } from "@theme-ui/components";
/** @jsx jsx */
import { jsx } from "theme-ui";

function FeelingCard({ emoji, selected = false, uniqueStyles }) {
  const selectedButton = selected ? "block" : "none";

  return (
    <Button variant="primary" style={{ fontSize: "30px", selectedButton }}>
      {emoji}
    </Button>
  );
}

function FeedbackWidget({ handleClose }) {
  return (
    <Container>
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
