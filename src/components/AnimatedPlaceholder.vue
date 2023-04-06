<template>
  <div class="container">&nbsp;</div>
</template>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(to right, var(#fff 0%, #fff 100%));
  background-color: #f3f4f6;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: 0.375rem;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
}
</style>
