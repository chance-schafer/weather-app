<template>
  <Transition name="modal-outer">
    <div v-if="modalActive" class="modal">
      <Transition name="modal-inner">
        <div class="modal__container">
          <slot />
          <button @click="$emit('close-modal')">Close</button>
        </div>
      </Transition>
    </div>
  </Transition>
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
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  // background-color: rgb(0, 0, 0, 0.3);
  height: 100vh;

  &__container {
    background-color: white;
    align-self: flex-start;
    padding: 1rem;
    margin-top: 10rem;
    max-width: map-get($breakpoints, sm);
    background: $primary-color;
    opacity: 100%;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);

    button {
      color: black;
      background-color: white;
      border-radius: 10px;
      border: 0;
      box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
      box-sizing: border-box;
      cursor: pointer;
      display: inherit;
      margin: 0 auto;
      font-size: 1rem;
      position: relative;
      text-align: center;
      padding: 0.75rem 1.375rem;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    button:hover {
      background-color: black;
      color: white;
      transform: translateY(-2px);
    }
  }
}
</style>
