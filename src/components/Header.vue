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
        <img
          class="icon"
          @click="toggleModal"
          src="@/assets/images/icon-information.svg"
        />
        <img
          class="icon"
          @click="addCity"
          v-if="route.query.preview"
          src="@/assets/images/icon-plus.svg"
        />
      </div>

      <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="modal-container">
          <h1>About:</h1>
          <p>
            The Local Weather app allows you to track the current and future
            weather of cities of your choosing.
          </p>
          <h2>How it works:</h2>
          <ol>
            <li>
              Search for your city by entering the name into the search bar.
            </li>
            <li>
              Select a city within the results, this will take you to the
              current weather for your selection.
            </li>
            <li>
              Track the city by clicking the '+' icon in the top right. This
              will save the city to view at a later time on the home page.
            </li>
          </ol>
          <h2>Removing a city:</h2>
          <p>
            If you no longer wish to track a city, simply select the city within
            the home page. At the bottom of the page, there will be an option to
            delete a city.
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { uid } from "uid";
import { RouterLink, useRoute, useRouter } from "vue-router";
import BaseModal from "./BaseModal.vue";

const savedCities = ref([]);
const route = useRoute();
const router = useRouter();
const addCity = () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
  }

  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coors: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  savedCities.value.push(locationObj);
  localStorage.setItem("savedCities", JSON.stringify(savedCities.value));

  let query = Object.assign({}, route.query);
  delete query.preview;
  router.replace({ query });
};

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  background: rgba(29, 113, 242, 1);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
    padding: 1rem 6rem;
    font-size: 1.15rem;
    line-height: 1.25rem;

    li {
      margin: 0.5rem 0;
    }

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
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      filter: invert(99%) sepia(35%) saturate(180%) hue-rotate(109deg)
        brightness(111%) contrast(99%);
      &:hover,
      &:focus {
        transition-duration: 150ms;
        cursor: pointer;
        filter: invert(74%) sepia(89%) saturate(1639%) hue-rotate(357deg)
          brightness(99%) contrast(107%);
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
  .modal-container {
    color: white;

    h1 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin-bottom: 0.25rem;
    }

    h2 {
      font-size: 1.2rem;
      line-height: 1.75rem;
    }

    p {
      margin-top: 0.25rem;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    ol {
      list-style-type: decimal;
      list-style-position: inside;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
  }
}
</style>
