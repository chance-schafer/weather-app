<template>
  <div class="city-view-skeleton">
    <!-- Overview -->
    <div class="overview-container">
      <AnimatedPlaceholder class="placeholder-one" />
      <AnimatedPlaceholder class="placeholder-two" />
      <AnimatedPlaceholder class="placeholder-three" />
      <AnimatedPlaceholder class="placeholder-four" />
      <AnimatedPlaceholder class="placeholder-five" />
    </div>
    <!-- Hourly -->
    <div class="hourly-container">
      <AnimatedPlaceholder class="hourly-placeholder" />
    </div>
    <!-- Weekly -->
    <div class="weekly-container">
      <AnimatedPlaceholder class="weekly-placeholder" />
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<style lang="scss" scoped>
.city-view-skeleton {
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;

  .overview-container {
    display: flex;
    padding-top: 3rem;
    padding-bottom: 3rem;
    flex-direction: column;
    align-items: center;

    .placeholder-one {
      max-width: 300px;
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .placeholder-two {
      max-width: 300px;
      height: 100px;
      width: 100%;
      margin-bottom: 3rem;
    }

    .placeholder-three {
      max-width: 300px;
      height: 100px;
      width: 100%;
      margin-bottom: 3rem;
    }

    .placeholder-four {
      max-width: 300px;
      width: 100%;
      margin-bottom: 2rem;
    }

    .placeholder-five {
      max-width: 300px;
      height: 75px;
      width: 100%;
    }
  }

  .hourly-container {
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    flex-direction: column;
    align-items: center;

    .hourly-placeholder {
      margin-bottom: 3rem;
      width: 100%;
      max-width: 768px;
      height: 100px;
    }
  }

  .weekly-container {
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    flex-direction: column;
    align-items: center;

    .weekly-placeholder {
      margin-bottom: 3rem;
      width: 100%;
      max-width: 768px;
      height: 100px;
    }
  }
}
</style>
