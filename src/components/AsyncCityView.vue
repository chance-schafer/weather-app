<template>
  <div class="container">
    <!-- Banner -->
    <div class="banner" v-if="route.query.preview">
      <p>
        You are currently previewing this city, click the "+" icon to start
        tracking this city.
      </p>
    </div>
    <!-- Weather Overview -->
    <div class="weather-overview">
      <h1 class="city">{{ route.params.city }}</h1>
      <p class="current-time">
        {{
          new Date(weatherData.data.currentTime).toLocaleDateString("en-us", {
            weekday: "short",
            day: "2-digit",
            month: "long",
          })
        }}
        {{
          new Date(weatherData.data.currentTime).toLocaleTimeString("en-us", {
            timeStyle: "short",
          })
        }}
      </p>
      <p class="temperature">
        {{ Math.round(weatherData.data.current.temp) }}&deg;
      </p>
      <p class="feels-like">
        Feels like
        {{ Math.round(weatherData.data.current.feels_like) }} &deg;
      </p>
      <p class="description">
        {{ weatherData.data.current.weather[0].description }}
      </p>
      <img
        class="weather-icon"
        :src="`http://openweathermap.org/img/wn/${weatherData.data.current.weather[0].icon}@2x.png`"
        alt=""
      />
    </div>
    <hr />
    <div class="hourly-weather">
      <div class="hourly-weather-container">
        <h2 class="hourly-header">Hourly Weather</h2>
        <div class="hourly-weather-container-nested">
          <div
            v-for="hourData in weatherData.data.hourly"
            :key="hourData.dt"
            class="hourly-weather-container-nested-inside"
          >
            <p class="hour">
              {{
                new Date(hourData.currentTime).toLocaleTimeString("en-us", {
                  hour: "numeric",
                })
              }}
            </p>
            <img
              :src="`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`"
              alt=""
              class="hourly-weather-icon"
            />
            <p class="hourly-temperature">
              {{ Math.round(hourData.temp) }}&deg;
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="weekly-weather">
      <div class="weekly-weather-container">
        <h2 class="weekly-header">7 Day Forecast</h2>
        <div
          v-for="day in weatherData.data.daily"
          :key="day.dt"
          class="weekly-weather-container-nested"
        >
          <p class="weekday">
            {{
              new Date(day.dt * 1000).toLocaleDateString("en-us", {
                weekday: "long",
              })
            }}
          </p>
          <img
            :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
            alt=""
            class="weekly-weather-icon"
          />
          <div class="weekly-temperature">
            <p class="high">H: {{ Math.round(day.temp.max) }}</p>
            <p class="low">L: {{ Math.round(day.temp.min) }}</p>
          </div>
        </div>
      </div>
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
      `https://api.openweathermap.org/data/2.5/onecall?lat=38.97425&lon=-94.68517&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperial`
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
    return {};
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

  hr {
    width: 100%;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .banner {
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

  // Weather Overview
  .weather-overview {
    display: flex;
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: #ffffff;
    flex-direction: column;
    align-items: center;

    .city {
      margin-bottom: 0.5rem;
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    .current-time {
      margin-bottom: 3rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .temperature {
      margin-bottom: 2rem;
      font-size: 6rem;
      line-height: 1;
    }

    .description {
      text-transform: capitalize;
    }

    .weather-icon {
      height: auto;
      width: 150px;
    }
  }

  // Hourly Weather
  .hourly-weather {
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;

    .hourly-weather-container {
      margin-left: 2rem;
      margin-right: 2rem;
      color: #ffffff;

      .hourly-header {
        margin-bottom: 1rem;
      }

      .hourly-weather-container-nested {
        display: flex;
        overflow-x: scroll;
        gap: 2.5rem;

        .hourly-weather-container-nested-inside {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;

          .hour {
            white-space: nowrap;
          }

          .hourly-weather-icon {
            object-fit: cover;
            width: auto;
            height: 50px;
          }

          // Check if this applies to correct child
          .hourly-temperature {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      }
    }
  }

  // Weekly Weather
  .weekly-weather {
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;

    .weekly-weather-container {
      margin-left: 2rem;
      margin-right: 2rem;
      color: #ffffff;

      .weekly-header {
        margin-bottom: 1rem;
      }

      .weekly-weather-container-nested {
        display: flex;
        align-items: center;

        .weekday {
          flex: 1 1 0%;
        }

        .weekly-weather-icon {
          object-fit: cover;
          width: 50px;
          height: 50px;
        }

        .weekly-temperature {
          display: flex;
          flex: 1 1 0%;
          justify-content: center;
          gap: 0.5rem;
        }
      }
    }
  }

  // .inner-two {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   color: white;
  //   text-align: center;
  //   padding: 3rem 0;

  //   h1 {
  //     font-size: 2.25rem;
  //     line-height: 2.5rem;
  //     margin-bottom: 0.5rem;
  //   }
  // }
}
</style>
