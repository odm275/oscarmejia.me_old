import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

function RainbowButton({ onClick }) {
  return (
    <a
      sx={{
        backgroundImage:
          "linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 100%)",
        position: "relative",
        padding: "3px",
        display: "inline-block",
        borderRadius: "7px",
      }}
      onClick={onClick}
    >
      <span
        sx={{
          display: "inline-block",
          bg: "background",
          color: "secondary",
          textTransform: "uppercase",
          padding: "10px 1rem",
          borderRadius: "5px",
          fontWeight: 800,
        }}
      >
        How are we feeling today?
      </span>
    </a>
  );
}

export default RainbowButton;
