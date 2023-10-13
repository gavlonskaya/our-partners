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
    display: flex;

    @media (max-width: 375px) {
        flex-direction: column;
    }

    @media (min-width: 375px) and (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
    }


    &__title {
        font-weight: 500;
        color: $text !important;
        text-transform: uppercase;
        line-height: 160%;
        margin-bottom: 30px;
        font-size: 28px;
        padding-left: 20px;

        @media (min-width: 375px) and (max-width: 768px) {
            width: 100%;
        }

    }

    &__logo {
        border-radius: 5px;
        border: 1px solid $stroke;
        background: $bg;
        display: flex;
        justify-content: center;
        align-items: center;


        @media (max-width: 375px) {

            padding: 25px;
            max-width: 335px;
            max-height: 140px;
            width: 285px;
            height: 90px;
            margin: 0 20px 20px 20px;
        }

        @media (min-width: 375px) and (max-width: 768px) {
            margin: 0 0 20px 20px;
            padding: 15px;
            max-width: 229px;
            max-height: 120px;
            width: 199px;
            height: 90px;
        }

        &-image {
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>