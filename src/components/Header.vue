<template>
  <header class="header">
    <router-link class="header__logo" to="/">
      <img class="header__logo-img" src="/public/images/logo.svg" alt="vue logo">
    </router-link>
    <router-link class="header__link" to="/">Go to Home</router-link>
    <router-link class="header__link" to="/about">Go to About</router-link>
    <router-link class="header__link" to="/user/1">Go to User 1</router-link>
    <router-link class="header__link" to="/user/2">Go to User 2</router-link>
  </header>
</template>

<style lang="scss">
  .header {
    padding: 20px;
    box-shadow: 3px 3px 5px 6px #ccc;
    display: flex;
    align-items: center;

    &__logo {
      margin-right: 20px;
    }

    &__logo-img {
      width: 30px;
    }

    &__link {
      margin-left: 10px;
    }
  }
</style>
