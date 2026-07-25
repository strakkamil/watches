<script setup>
import EmptyCart from "@/components/EmptyCart.vue";
import Payment from "@/components/Payment/Payment.vue";
import { useCartStore } from "@/stores/cart";
import { useWatchesStore } from "@/stores/watches";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const cartStore = useCartStore();
const watchStore = useWatchesStore();
const { cart } = storeToRefs(cartStore);

onMounted(() => {
  watchStore.fetchCartWatches();
});
</script>

<template>
  <section class="payment-page">
    <EmptyCart v-if="cart.length === 0" />
    <Payment v-else />
  </section>
</template>

<style lang="scss" scoped>
.payment-page {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
