<script setup>
import { useWatchesStore } from "@/stores/watches";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import Watch from "../Watch.vue";
import WatchesList from "../WatchesList.vue";

const watchesStore = useWatchesStore();

const { lastWatches } = storeToRefs(watchesStore);

onMounted(() => {
  watchesStore.fetchLastWatches();
});
</script>

<template>
  <section class="watches container">
    <div class="header">
      <h2>Ostatnio dodane</h2>
      <h3>06 MODELI</h3>
    </div>
    <WatchesList>
      <Watch v-for="watch in lastWatches" :key="watch.id" :watch="watch" />
    </WatchesList>
  </section>
</template>

<style lang="scss" scoped>
.watches {
  margin-top: 50px;
  margin-bottom: 100px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 30px;
    grid-area: h2;
  }

  h3 {
    font-size: 18px;
    font-family: "JetBrains";
    grid-area: h3;
    text-align: right;
  }

  @media (max-width: 640px) {
    margin-top: 30px;

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 14px;
    }
  }
}
</style>
