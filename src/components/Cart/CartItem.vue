<script setup>
import { useCartStore } from "@/stores/cart";
import { useWatchesStore } from "@/stores/watches";

const cartStore = useCartStore();
const watchesStore = useWatchesStore();

const props = defineProps({
  watch: Object,
});

function deleteItem() {
  cartStore.removeFromCart(props.watch.id);
  watchesStore.fetchCartWatches();
}
</script>

<template>
  <div class="cart-item">
    <img :src="props.watch.imageUrl" :alt="props.watch.name" />
    <div class="name">
      <RouterLink :to="`/product/${props.watch.id}`">{{
        props.watch.name
      }}</RouterLink>
      <span class="ref">{{ props.watch.reference }}</span>
    </div>
    <button @click="deleteItem">Usuń</button>
    <span class="price"
      >{{ props.watch.price }} {{ props.watch.currency }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  padding: 30px 0;
  display: grid;
  grid-template-columns: 100px 1fr 80px 150px;
  justify-content: start;
  align-items: center;
  gap: 40px;
  border-top: 1px solid var(--hairline);

  &.last {
    border-bottom: 1px solid var(--hairline);
  }

  img {
    height: auto;
    max-height: 100px;
    width: 100px;
    object-fit: cover;
  }

  .name {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: var(--gold);
      }
    }

    .ref {
      font-family: "JetBrains";
      font-size: 14px;
      color: var(--text-dim);
    }
  }

  button {
    padding: 10px;
    background-color: var(--danger);
    border: none;
    border-radius: 3px;
    color: var(--bg);
    font-family: "JetBrains";
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--danger-bright);
    }
  }

  .price {
    font-family: "JetBrains";
    font-size: 20px;
    color: var(--gold);
    text-align: right;
  }
}
</style>
