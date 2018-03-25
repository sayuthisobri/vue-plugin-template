import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import MyComponent from '../Component.vue'

storiesOf('Counter', module)
  .add('simple', () => ({
    components: {MyComponent},
    template: '<my-component :value="count" @increment="count += 1" @decrement="count -= 1"></my-component>',
    data() {
      return {
        count: 0
      }
    },
    methods: {action: action('clicked')}
  }));
