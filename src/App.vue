<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
@import "./assets/styles/base.scss";

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: $primary-color;
}
</style>
