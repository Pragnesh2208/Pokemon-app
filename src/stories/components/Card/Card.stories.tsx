import { Meta, StoryObj } from "@storybook/react";
import CardComponent from "./Card.component";

const meta: Meta<typeof CardComponent> = {
  title: "Example/Card",
  component: CardComponent,
  argTypes: {
    background: String,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    background: " #efefef",
  },
};
