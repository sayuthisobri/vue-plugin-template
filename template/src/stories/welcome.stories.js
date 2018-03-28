import {storiesOf} from "@storybook/vue";
import ComponentSimpleStory from "./ComponentSimpleStory.vue";

storiesOf("Counter", module)
  .add("simple", () => ({
    components: {story1: ComponentSimpleStory},
    template: `<story1></story1>`
  }))
;
