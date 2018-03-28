<template>
  <div>
    <c :value="count" @increment="logAdd" @decrement="logMinus"/>
  </div>
</template>

<script>
  import {action} from "@storybook/addon-actions";
  import Component from "../Component.vue";

  export default {
    name: "simple-story",
    data() {
      return {
        count: 5
      };
    },
    methods: {
      logAdd: action(`increase`),
      logMinus: action(`decrease`)
    },
    components: {
      c: Component
    }
  };
</script>

<style scoped>

</style>
