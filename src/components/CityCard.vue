<template>
  <div class="city-card">
    <div class="city-card-title">
      <h2 class="city">{{ city.city }}</h2>
      <h3>{{ city.state }}</h3>
    </div>

    <div class="city-card-info">
      <p class="temp">{{ Math.round(city.weather.main.temp) }}&deg;</p>
      <div class="high-low">
        <span class="high">
          H:
          {{ Math.round(city.weather.main.temp_max) }}&deg;
        </span>
        <span class="low">
          L:
          {{ Math.round(city.weather.main.temp_min) }}&deg;
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.city-card {
  display: flex;
  padding: 1.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: $primary-color;
}

.city-card-title {
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;

  .city {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

.city-card-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .temp {
    font-size: 1.875rem;
    line-height: 2.25rem;
    align-self: flex-end;
  }

  .high-low {
    display: flex;
    gap: 0.5rem;

    .high,
    .low {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
}
</style>
