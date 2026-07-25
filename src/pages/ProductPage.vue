<script setup>
import { useRoute } from "vue-router";
import { useWatchesStore } from "@/stores/watches";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import Buttons from "@/components/ProductPage/Buttons.vue";
import WatchesLink from "@/components/WatchesLink.vue";

const route = useRoute();
const id = route.params.id;

const watchesStore = useWatchesStore();
const { watch } = storeToRefs(watchesStore);

onMounted(() => {
  watchesStore.fetchWatch(id);
});
</script>

<template>
  <WatchesLink />
  <section class="watch card container">
    <div class="image-container">
      <img loading="lazy" :src="watch.imageUrl" :alt="watch.reference" />
    </div>
    <div class="info">
      <span class="name">{{ watch.name }}</span>
      <span class="desc">{{ watch.description }}</span>
      <span class="price">{{ watch.price }} {{ watch.currency }}</span>
      <div class="watch-info">
        <span class="title">REF.</span>
        <span class="value">{{ watch.reference }}</span>
        <span class="title">TYP</span>
        <span class="value type">{{ watch.type }}</span>
        <span class="title">Mechanizm</span>
        <span class="value">{{ watch.movement }}</span>
        <span class="title">Ø KOPERTY</span>
        <span class="value">{{ watch.caseDiameterMm }} mm</span>
        <span class="title" v-if="watch.powerReserveHours">REZERWA CHODU</span>
        <span class="value" v-if="watch.powerReserveHours"
          >{{ watch.powerReserveHours }} h</span
        >
        <span class="title">WODOSZCZELNOŚĆ</span>
        <span class="value">{{ watch.waterResistance }}</span>
        <span class="title last">SZKŁO</span>
        <span class="value last">{{ watch.crystal }}</span>
      </div>
      <Buttons :id="Number(id)" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.watch {
  margin-top: 100px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 80px;

  .image-container {
    background-image: radial-gradient(circle at 50% 40%, #1a1a1d, #0a0a0b);
    border: 1px solid var(--hairline);

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    span.name {
      font-size: 24px;
      margin-bottom: 10px;
    }

    span.desc {
      font-family: "JetBrains";
      font-size: 14px;
      text-align: justify;
      color: var(--text-dim);
      margin-bottom: 10px;
    }

    span.price {
      font-family: "JetBrains";
      font-size: 28px;
      color: var(--gold);
      margin-bottom: 20px;
    }

    .watch-info {
      display: grid;
      grid-template-columns: 30% 1fr;

      span {
        display: flex;
        padding: 10px 0;
        font-family: "JetBrains";
        font-size: 14px;
        border-top: 1px solid var(--hairline);

        &.title {
          color: var(--text-dim);

          &.last {
            border-bottom: 1px solid var(--hairline);
          }
        }

        &.value {
          justify-content: end;

          &.last {
            border-bottom: 1px solid var(--hairline);
          }

          &.type {
            text-transform: capitalize;
          }
        }
      }
    }
  }
}
</style>
