<script setup>
import Button from "../Button.vue";
import Price from "../Price.vue";
</script>

<template>
  <div class="summary-container">
    <div class="info">
      <span>Razem</span>
      <span class="price">
        <Price />
      </span>
    </div>
    <Button type="LINK" to="/payment">Przejdź do podsumowania</Button>
  </div>
</template>

<style lang="scss" scoped>
.summary-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 25px;
  margin-left: auto;
  width: 25%;
  gap: 15px;

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      font-family: "JetBrains";
      font-size: 24px;
    }
  }
}
</style>
