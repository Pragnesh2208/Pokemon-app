import type { Meta, StoryObj } from "@storybook/react";
import { bool } from "prop-types";
import { InputComponentStyled } from "./Input.styled";

// Learn how to write stories:
// https://web.docs.shopify.io/docs/guides/storybook/how-to-write-story-files
const meta: Meta<typeof InputComponentStyled> = {
  title: "Example/Input",
  component: InputComponentStyled,
  argTypes: {
    id: String,
    label: String,
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
    },
    autoFocus: bool,
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    defaultValue: String,
    error: Boolean,
    helperText: String,
    type: {
      control: "select",
      options: ["text", "number", "password", "email"],
    },
    value: String,
  },
  args: {
    label: "Input Label",
    type: "text",
    autoFocus: true,
    value: "Input Value",
    color: "primary",
    error: true,
    helperText: "Input is required",
    defaultValue: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
  },
};
