import { Meta, StoryObj } from "@storybook/react";
import CustomSearchComponent from "./CustomSearch.component";

const meta: Meta<typeof CustomSearchComponent> = {
  title: "Example/Search",
  component: CustomSearchComponent,
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
