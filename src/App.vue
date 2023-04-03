<template>
  <div>
    <Header />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
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
  background-color: $grey;
}

.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
