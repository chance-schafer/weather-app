<template>
  <main class="main">
    <div class="main__container">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search for a city or state"
      />
      <ul v-if="mapboxSearchResults">
        <p v-if="searchError">Sorry something wen't wrong, please try again.</p>
        <p v-if="!searchError && mapboxSearchResults.length === 0">
          No results match your query, try a different term.
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
    <!-- <Hero /> -->
  </main>
</template>

<script setup>
// import Hero from "../components/Hero.vue";
import { ref } from "vue";
import axios from "axios";

const mapboxAPIKey =
  "pk.eyJ1IjoidGhlZGV2Y2hhbmNlIiwiYSI6ImNsZmhwcXJ0czBhbDczcm5tNjBoeHo5anUifQ.VUaMYEPMFksEF4sfO72cJw";

const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      if (searchQuery.value)
        try {
          const result = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
          );
          mapboxSearchResults.value = result.data.features;
          console.log(mapboxSearchResults.value);
          return;
        } catch {
          searchError.value = true;
        }
    }
    mapboxSearchResults.value = null;
  }, 300);
};

function checksInput(str) {
  return /[^\w\s]/gi.test(str); // Returns true if string contains any special character or number
}
</script>

<style lang="scss" scoped>
.main {
  color: white;
  width: 100%;
  padding: 1rem 6rem;
  z-index: 1;

  &__container {
    padding-top: 1rem;
    margin-bottom: 2rem;
    position: relative;

    input {
      font-size: 1.15rem;
      color: white;
      padding: 0.5rem 0.25rem;
      width: 100%;
      background: transparent;
      border-bottom: 1px solid grey;
      text-align: center;
      border-radius: 10px;
    }

    input::placeholder {
      color: white;
    }

    input:focus {
      color: white;
      border-color: $secondary-color;
      outline: none;
      --tw-shadow-color: 0px 1px 0px 0px #004e71;
    }

    ul {
      position: absolute;
      background-color: $primary-color;
      color: white;
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
      padding: 0.5rem 1.25rem;
      top: 4.125rem;

      p {
        text-align: center;
      }

      li {
        margin: 0 auto;
        text-align: center;
        padding: 0.5rem 0;
        cursor: pointer;
      }
    }
  }
}
</style>
