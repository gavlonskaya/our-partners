<template>
  <HeaderContainer />
  <div class="wrapper">
    <PartnersContainer />
  </div>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue';
import PartnersContainer from './components/PartnersContainer.vue';

export default {
  name: 'App',
  components: {
    HeaderContainer,
    PartnersContainer
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 0 20px;
  margin: 0;
}
</style>