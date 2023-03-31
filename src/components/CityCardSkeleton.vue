<template>
  <div class="city-card-skeleton">
    <div class="skeleton-one">
      <AnimatedPlaceholder class="placeholder-one" />
      <AnimatedPlaceholder class="placeholder-two" />
    </div>

    <div class="skeleton-two">
      <AnimatedPlaceholder class="placeholder-three" />
      <AnimatedPlaceholder class="placeholder-four" />
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<style lang="scss" scoped>
.city-card-skeleton {
  display: flex;
  padding: 1.5rem 0.75rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: $primary-color;

  .skeleton-one {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    gap: 0.5rem;

    .placeholder-one {
      max-width: 50%;
    }

    .placeholder-two {
      max-width: 40%;
    }
  }

  .skeleton-two {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    align-items: flex-end;
    gap: 0.5rem;

    .placeholder-three {
      width: 100%;
      max-width: 50px;
    }

    .placeholder-four {
      width: 100%;
      max-width: 75px;
    }
  }
}
</style>
