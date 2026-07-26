<script setup>
import { useWatchesStore } from "@/stores/watches";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const watchesStore = useWatchesStore();
const { caliber } = storeToRefs(watchesStore);

const now = new Date();
const second = now.getSeconds() * 6;
const minute = now.getMinutes() * 6;

const props = defineProps({
  size: String,
});

function getValues(time) {
  return {
    "--from": `${time}deg`,
    "--to": `${time + 360}deg`,
    "--caliber": caliber.value === "MECHANICAL" ? 360 : 60,
  };
}

function size(size) {
  return {
    "--size": `${size}px`,
  };
}

const secondStyle = computed(() => getValues(second));
const minuteStyle = computed(() => getValues(minute));
const sizeStyle = size(+props.size);

function changeCaliber(type) {
  watchesStore.changeCaliber(type);
}
</script>

<template>
  <div class="clock-animation">
    <div class="type-buttons">
      <button
        @click="changeCaliber('MECHANICAL')"
        :class="{ active: caliber === 'MECHANICAL' }"
      >
        Mechaniczny
      </button>
      <button
        @click="changeCaliber('QUARTZ')"
        :class="{ active: caliber === 'QUARTZ' }"
      >
        Kwarcowy
      </button>
    </div>
    <div class="clock" :style="sizeStyle">
      <div class="watch-face">
        <span class="index zero big"></span>
        <span class="index five"></span>
        <span class="index ten"></span>
        <span class="index fifteen big"></span>
        <span class="index twenty"></span>
        <span class="index twenty-five"></span>
        <span class="index thirty big"></span>
        <span class="index thirty-five"></span>
        <span class="index forty"></span>
        <span class="index forty-five big"></span>
        <span class="index fifty"></span>
        <span class="index fifty-five"></span>
        <span class="hand second" :style="secondStyle"></span>
        <span class="hand minute" :style="minuteStyle"></span>
        <span class="center"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid var(--hairline);
  border-radius: 3px;
  button {
    display: flex;
    justify-content: center;
    padding: 10px;
    font-family: "JetBrains";
    font-size: 12px;
    background-color: transparent;
    border: none;
    width: 50%;
    height: 100%;
    cursor: pointer;
    transition: 0.2s;
    border: 1px solid transparent;

    &:hover {
      color: var(--gold);
    }

    &.active {
      color: var(--gold);
      border: 1px solid var(--gold);
      border-radius: 3px;
    }
  }
}

.clock {
  --origin: calc(var(--size) * 0.9 / 2 - 2px); // dwa razy odjęty border
  position: relative;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid var(--hairline);

  .center {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: var(--gold-bright);
    width: 2.5%;
    height: 2.5%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 3;
  }

  .watch-face {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border-radius: 50%;
    border: 1px solid var(--gold);

    .hand {
      position: absolute;
      display: block;
      top: 10%;
      left: calc(50% - 1px);
      width: 1px;
      height: 40%;
      background-color: var(--danger);
      transform-origin: 100% 100%;
      rotate: 0deg;
      z-index: 2;
      animation: tick 60s steps(var(--caliber), end) infinite;
      transform: translateX(50%);

      &.minute {
        position: absolute;
        display: block;
        top: 25%;
        left: calc(50% - 2px);
        width: 2px;
        height: 25%;
        background-color: var(--gold-bright);
        z-index: 1;
        animation: tick 3600s linear infinite;
        transform: translateX(50%);
      }
    }

    @keyframes tick {
      from {
        rotate: var(--from);
      }

      to {
        rotate: var(--to);
      }
    }

    .index {
      top: 0%;
      left: 50%;
      position: absolute;
      display: block;
      width: 1%;
      height: 4%;
      background-color: var(--text-dim);
      translate: -50% 0;
      transform-origin: 50% var(--origin);

      &.big {
        width: 1.5%;
        height: 5%;
        background-color: var(--gold);
      }

      &.zero {
        rotate: 0deg;
      }

      &.five {
        rotate: 30deg;
      }

      &.ten {
        rotate: 60deg;
      }

      &.fifteen {
        rotate: 90deg;
      }

      &.twenty {
        rotate: 120deg;
      }

      &.twenty-five {
        rotate: 150deg;
      }

      &.thirty {
        rotate: 180deg;
      }

      &.thirty-five {
        rotate: 210deg;
      }

      &.forty {
        rotate: 240deg;
      }

      &.forty-five {
        rotate: 270deg;
      }

      &.fifty {
        rotate: 300deg;
      }

      &.fifty-five {
        rotate: 330deg;
      }
    }
  }
}
</style>
