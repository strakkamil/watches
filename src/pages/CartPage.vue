<script setup>
import CartItem from "@/components/Cart/CartItem.vue";
import Summary from "@/components/Cart/Summary.vue";
import EmptyCart from "@/components/EmptyCart.vue";
import WatchesLink from "@/components/WatchesLink.vue";
import { usePlural } from "@/composables/usePlular";
import { useWatchesStore } from "@/stores/watches";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";

const watchesStore = useWatchesStore();
const { cartWatches } = storeToRefs(watchesStore);

const watchesCount = computed(() => cartWatches.value.length);
const watchesLabel = usePlural(watchesCount, [
  "produkt",
  "produkty",
  "produktów",
]);

onMounted(() => {
  watchesStore.fetchCartWatches();
});
</script>

<template>
  <WatchesLink />
  <section class="cart container">
    <div class="heading">
      <h1>Twój koszyk</h1>
      <h2>{{ watchesLabel }}</h2>
    </div>
    <div class="items">
      <CartItem
        v-for="(watch, index) in cartWatches"
        :watch="watch"
        :key="watch.id"
        :class="{ last: index === cartWatches.length - 1 }"
      />
    </div>
    <EmptyCart v-if="cartWatches.length === 0" />
    <Summary v-if="cartWatches.length !== 0" />
  </section>
</template>

<style lang="scss" scoped>
.cart {
  margin-top: 80px;
  margin-bottom: 100px;

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 20px;
      font-family: "JetBrains";
      color: var(--text-dim);
    }
  }

  @media (max-width: 640px) {
    margin-top: 40px;

    .heading {
      margin-bottom: 20px;

      h1 {
        font-size: 22px;
      }

      h2 {
        font-size: 14px;
      }
    }
  }
}
</style>
