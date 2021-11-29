import { MyElement } from './../my-element';
import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import '../my-element'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "my-element",
  component: 'my-element',
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<MyElement> = () => html`<my-element></my-element>`;

export const Primary = Template.bind({});
