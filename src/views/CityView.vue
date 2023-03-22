<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
</script>

<style scoped>
div {
  width: 100%;
  margin: 0 auto;
}
p {
  color: white;
  text-align: center;
}
</style>
