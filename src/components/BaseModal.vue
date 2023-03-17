<template>
  <div v-if="modalActive" class="modal">
    <div class="modal__container">
      <slot />
      <button @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  background-color: rgb(0, 0, 0, 0.3);
  height: 100vh;

  &__container {
    color: black;
    background-color: white;
    align-self: flex-start;
    padding: 1rem;
    margin-top: 8rem;
    max-width: map-get($breakpoints, sm);

    button {
      color: white;
      margin-top: 2rem;
      background-color: $primary-color;
      padding: 2rem 1.5rem;
    }
  }
}
</style>
