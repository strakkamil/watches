<template>
  <div class="empty">
    <span>Brak zegarków w koszyku</span>
    <RouterLink to="/watches">Przejdź do katalogu</RouterLink>
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

  a {
    padding: 15px 30px;
    display: block;
    background-color: var(--gold);
    font-family: "JetBrains";
    font-size: 18px;
    text-decoration: none;
    border-radius: 3px;
    color: var(--bg);
  }
}
</style>
