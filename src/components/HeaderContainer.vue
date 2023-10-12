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
      <div class="header__search-icon">
        <button class="search-icon__button">
          <img src="../assets/images/search.svg" alt="search" class="search-icon__image">
        </button>
      </div>
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

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 71px;
  }
}

.header__content {
  @media (max-width: 375px) {
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header__logo {
  @media (max-width: 375px) {
    width: 135px;
    height: auto;
  }
}

.header__account {
  @media (max-width: 375px) {
    width: 24px;
    height: auto;
  }
}


.header__search {
  padding: 8px 20px;
  display: flex;
  align-items: center;
  border-top: 1px solid $light-grey;
  opacity: 0.5;
}

.search-icon__button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.search-icon__button:hover .search-icon__image {
  transform: scale(1.1);
}

.header__search-icon img {
  @media (max-width: 375px) {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    transition: transform 0.2s;
  }
}

.header__search-input {
  letter-spacing: 0.14px;
  color: $light-grey;
  font-size: 14px;
  border: none;
  font-weight: 400;
  opacity: 0.5;

  @media (max-width: 375px) {
    width: 100%;
  }
}

.header__search-input:focus {
  outline: none;
  color: $text;
}
</style>
