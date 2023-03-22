<template>
  <div class="container">
    <!-- Banner -->
    <div class="inner" v-if="route.query.preview">
      <p>
        You are currently previewing this city, click the "+" icon to start
        tracking this city.
      </p>
    </div>
    <!-- Weather Overview -->
    <div class="inner-two">
      <h1>{{ route.params.city }}</h1>
      <p></p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=7d5e9c17c89f2793b11b5e30779a2ad2?units=imperial`
    );

    //calc current date and time
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localOffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;

    //calc hourly weather offset
    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
    });

    return weatherData;
  } catch (err) {
    console.log(err);
  }
};
const weatherData = await getWeatherData();
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  text-align: center;

  .inner {
    color: white;
    display: flex;
    padding: 1rem;
    background-color: $primary-color;
    width: 100%;
    text-align: center;

    p {
      margin: 0 auto;
      text-align: center;
    }
  }

  .inner-two {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    padding: 3rem 0;

    h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
