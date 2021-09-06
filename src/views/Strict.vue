<template>
  <div>
    <br />
    <mark>是否为奇数的trigger watch: {{ data.isEven }}</mark>
    <br />
    <button>value: {{ data.counter }}</button>
    <button @click="uiIncrease">UI increase</button>
    <button @click="reducerIncrease">reducerIncrease</button>
    <button @click="reducerDecrease">reducerDecrease</button>
    <br />
    <input type="text" v-model="vModelInput" />
    <button @click="computed2Input">computed2Input</button>
    <legend>componentupdated</legend>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { createStrictModel } from "../models/strict";
export default defineComponent({
  setup() {
    const {
      state: { data },
      getters: { vModelInput },
      reducers
    } = createStrictModel();

    const uiIncrease = () => {
      data.counter++;
    };

    const reducerIncrease = () => {
      reducers.composeState("data", {
        counter: data.counter + 1
      });
    };

    const reducerDecrease = () => {
      reducers.composeState("data", {
        counter: data.counter - 1
      });
    };

    return {
      data,
      vModelInput,
      uiIncrease,
      computed2Input: () => reducers.computed2Input(1, 2, 3),
      reducerIncrease,
      reducerDecrease
    };
  }
});
</script>
<style>
button + button {
  margin-left: 20px;
}
</style>
