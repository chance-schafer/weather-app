<template>
  <div v-for="city in savedCities" :key="city.id">
    <CityCard :city="city" @click="gotoCityView(city)" />
  </div>

  <p v-if="savedCities.length === 0">
    No locations added. To start tracking, search in the field above.
  </p>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import CityCard from "./CityCard.vue";

const savedCities = ref([]);
const getSavedCities = async () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));

    const requests = [];
    savedCities.value.forEach((city) => {
      requests.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.coors.lat}&lon=${city.coors.lng}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperial`
        )
      );
    });

    const weatherData = await Promise.all(requests);

    // Flicker Delay
    await new Promise((res) => setTimeout(res, 1000));

    weatherData.forEach((value, index) => {
      savedCities.value[index].weather = value.data;
    });
  }
};

await getSavedCities();
const router = useRouter();
const gotoCityView = (city) => {
  router.push({
    name: "cityView",
    params: {
      state: city.state,
      city: city.city,
    },
    query: {
      id: city.id,
      lat: city.coors.lat,
      lng: city.coors.lng,
    },
  });
};
</script>

<style lang="scss" scoped>
div {
  color: white;
}
</style>
