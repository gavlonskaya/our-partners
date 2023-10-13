<template>
  <HeaderContainer />
  <PartnersContainer />
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

<style scoped lang="scss"></style>