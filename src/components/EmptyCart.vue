<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div class="empty">
    <span>Brak zegarków w koszyku</span>
    <Button type="LINK" to="/watches">Przeglądaj kolekcję</Button>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  span {
    font-family: "JetBrains";
    font-size: 32px;
  }
}
</style>
