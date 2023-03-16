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
</style>
