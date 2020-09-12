import { defineComponent, PropType, h, VNode } from "vue";

interface Props {
  tag: string;
  text: string;
  class: string;
}

type Element = VNode | string;

export default defineComponent({
  functional: true,
  props: {
    tag: { type: String as PropType<string>, required: false, default: "p" },
    text: { type: String as PropType<string>, required: true },
    class: { type: String as PropType<string>, required: false, default: "" }
  },
  setup(props: Props) {
    return () =>
      h(
        props.tag,
        {
          class: props.class
        },
        props.text
          .split("\n")
          .reduce((accumulator: Element[], string: string): Element[] => {
            if (!Array.isArray(accumulator)) {
              return [accumulator, h("br"), string];
            }
            return accumulator.concat([h("br"), string]);
          }, [])
      );
  }
});
