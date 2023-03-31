<template>
  <div class="animated-placeholder">&nbsp;</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.animated-placeholder {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  background-color: #f3f4f6;

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
