<template>
  <div class="counter">
    <p class="counter-value"> {{ counter }}</p>
    <div class="counter-controls">
      <button
        type="button"
        @click="increment">+
      </button>
      <button
        type="button"
        @click="decrement">-
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyComponent",
    props: {
      value: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        counter: this.value
      };
    },

    mounted() {
      this.$nextTick(() => {
        const nop = () => {};
        nop();
      });
    },

    methods: {
      increment() {
        this.$emit(`increment`, ++this.counter);
      },

      decrement() {
        this.$emit(`decrement`, --this.counter);
      }
    },

    watch: {
      value(newVal) {
        this.counter = +newVal;
      }
    }
  };
</script>

<style lang="scss">
  .conter,
  .counter-value,
  .counter-controls {
    display: inline-block;
  }

  .counter-value,
  .counter-controls {
    vertical-align: middle;
  }

  .counter-value {
    margin: 0 5px 0 0;
  }
</style>
