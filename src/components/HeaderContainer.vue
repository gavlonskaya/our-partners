<template>
  <div class="header">
    <div class="header__content">
      <div class="header__logo">
        <img class="header__logo-image" src="../assets/images/logo.svg" alt="logo">
      </div>
      <div class="header__account">
        <img class="header__account-icon" src="../assets/images/account.svg" alt="account">
      </div>
    </div>
    <div class="header__search">
      <button class="header__search-button">
        <img src="../assets/images/search.svg" alt="search">
      </button>
      <input type="text" class="header__search-input" placeholder="Найти...">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContainer',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index.scss';

.header {
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 71px;
  }

  @media (min-width: 376px) and (max-width: 769px) {
    margin-bottom: 70px;
  }

  @media (min-width: 769px) {
    margin-bottom: 70px;
  }


  &__content {
    @media (max-width: 376px) {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__logo {
    @media (max-width: 376px) {
      width: 135px;
      height: auto;
    }
  }

  &__account {
    @media (max-width: 376px) {
      width: 24px;
      height: auto;
    }
  }

  &__search {
    padding: 8px 20px;
    display: flex;
    align-items: center;
    border-top: 1px solid $light-grey;
    opacity: 0.5;

    &-input {
      letter-spacing: 0.14px;
      color: $light-grey;
      font-size: 14px;
      border: none;
      font-weight: 400;
      opacity: 0.5;
      color: $text !important;

      @media (max-width: 376px) {
        width: 100%;
      }

      &:focus {
        outline: none;
      }
    }

    &-button {
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      width: 24px;
      height: 24px;
      margin-right: 5px;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
