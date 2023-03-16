<template>
  <header class="header">
    <nav class="header__container">
      <RouterLink :to="{ name: 'home' }">
        <div class="container">
          <img class="icon-weather" src="@/assets/images/icon-weather.svg" />
          <h1>The Local Weather</h1>
        </div>
      </RouterLink>
      <div class="container-secondary">
        <img class="icon" src="@/assets/images/icon-information.svg" />
        <img class="icon" src="@/assets/images/icon-plus.svg" />
      </div>
      <div></div>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  background-color: $primary-color;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
    padding: 1rem 6rem;
    font-size: 1.25rem;
    line-height: 1.25rem;

    .container {
      // need to apply to all containers -
      margin: auto;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex: 1 1 0%;

      router-link {
        color: white;
        text-decoration: none;
      }

      .icon-weather {
        width: 3rem;
        height: 3rem;
      }
    }

    .icon {
      width: 2rem;
      height: 2rem;
      filter: invert(99%) sepia(35%) saturate(180%) hue-rotate(109deg)
        brightness(111%) contrast(99%);
      &:hover,
      &:focus {
        transition-duration: 150ms;
        cursor: pointer;
        filter: invert(55%) sepia(96%) saturate(3135%) hue-rotate(180deg);
      }
    }

    .container-secondary {
      display: flex;
      gap: 0.75rem;
      flex: 1 1 0%;
      justify-content: flex-end;
    }

    @media (min-width: map-get($breakpoints, sm)) {
      flex-direction: row;
    }
  }

  &__container--blue {
    background-color: $secondary-color;
  }
}
</style>
