import { Meta, StoryObj } from "@storybook/react";
import CustomSelectComponent from "./CustomSelect.component";

const meta: Meta<typeof CustomSelectComponent> = {
  title: "Example/Select",
  component: CustomSelectComponent,
  argTypes: {
    background: String,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    background: " #efefef",
    defaultValue: 10,
    menuInfo: [
      {
        key: 10,
        value: 10,
      },
      {
        key: 20,
        value: 20,
      },
    ],
  },
};
