import { TextArea } from "components";
export default {
  title: "init_s_application9/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "OutlineGray400",
  size: "sm",
  placeholder: "placeholder",
};
