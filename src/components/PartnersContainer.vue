<template>
    <div class="partners">
        <div class="partners__title">Наши партнеры</div>
        <div class="partners__logo">
            <img class="partners__logo-image" src="../assets/images/img/henkel.png" alt="Henkel">
        </div>
        <div class="partners__logo">
            <img class="partners__logo-image" src="../assets/images/img/jonh-deere.png" alt="Jonh Deere">
        </div>
        <div class="partners__logo">
            <img class="partners__logo-image" src="../assets/images/img/macdonalds.png" alt="MacDonalds">
        </div>
        <div class="partners__logo">
            <img class="partners__logo-image" src="../assets/images/img/ikea.png" alt="Ikea">
        </div>
        <div class="partners__logo">
            <img class="partners__logo-image" src="../assets/images/img/reebok.png" alt="Reebok">
        </div>
        <div class="partners__logo">
            <img class="partners__logo-image" src="../assets/images/img/nike.png" alt="Nike">
        </div>
        <div class="partners__logo">
            <img class="partners__logo-image" src="../assets/images/img/caterpillar.png" alt="Caterpillar">
        </div>
    </div>
</template>

  
<script>
export default {
    name: 'PartnersContainer',
    props: {
        msg: String
    }
}
</script>
<style scoped lang="scss">
@import '../assets/layouts/index.scss';

.partners {
    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
    }

    &__title {
        font-weight: 500;
        color: $text !important;
        text-transform: uppercase;
        line-height: 160%;

        @media (max-width: 375px) {
            font-size: 28px;
            margin-bottom: 30px;
        }
    }

    &__logo {
        border-radius: 5px;
        border: 1px solid $stroke;
        background: $bg;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 285px;
        height: 90px;

        @media (max-width: 375px) {
            margin-bottom: 20px;
            padding: 25px;
            max-width: 335px;
            max-height: 140px;
        }

        &-image {
            max-width: 100%;
            max-height: 100%;
        }
    }
}


.partners__content {
    @media (max-width: 375px) {
        width: 100%;
        max-width: 375px;
    }

}
</style>