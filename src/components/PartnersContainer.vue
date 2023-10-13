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

    @media (max-width: 376px) {
        flex-direction: column;
    }

    @media (min-width: 376px) and (max-width: 769px) {
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
        padding: 0 100px 0 100px;
    }


    &__title {
        font-weight: 500;
        color: $text !important;
        text-transform: uppercase;
        line-height: 160%;
        margin-bottom: 30px;
        font-size: 28px;
        padding-left: 20px;

        @media (min-width: 376px) {
            width: 100%;
        }

        @media (min-width: 768px) {
            width: 100%;
            font-size: 36px;
            padding-left: 30px;
        }

    }

    &__logo {
        border-radius: 5px;
        border: 1px solid $stroke;
        background: $bg;
        display: flex;
        justify-content: center;
        align-items: center;


        @media (max-width: 376px) {

            padding: 25px;
            max-width: 335px;
            max-height: 140px;
            width: 285px;
            height: 90px;
            margin: 0 20px 20px 20px;
        }

        @media (min-width: 376px) and (max-width: 769px) {
            margin: 0 0 20px 20px;
            padding: 15px;
            max-width: 229px;
            max-height: 120px;
            width: 199px;
            height: 90px;
        }

        @media (min-width: 769px) {

            padding: 28px 26.5px 28px 27px;
            max-width: 287.5px;
            max-height: 120px;
            width: 234px;
            height: 64px;
            margin: 0 0 30px 30px;
            cursor: pointer;

            &:hover {
                box-shadow: 0px 0px 10px 0px rgba(164, 164, 164, 0.03), -3px 0px 40px 0px rgba(0, 0, 0, 0.10);
            }
        }

        &-image {
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>