<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/strict">Strict</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
  }
});
</script>
<style></style>
