<template>
    <div class="a">
        <!-- <Tutorial /> -->
        <p @click="handlerClick">{{ $t("wechi") }}</p>
        <p @click="handlerClick">{{ $t("see") }}</p>
        <p @click="handlerClick">{{ $t("ceshi") }}</p>
        <p @click="handlerClick1">{{ $t("ce-shi-yi-xia-11") }}</p>
        <p @click="handlerClick1">{{ $t("login_up") }}</p>
        <p @click="handlerClick1">{{ $t("to_house") }}</p>
        <p @click="handlerClick1">{{ $t("rental_detail65") }}</p>
        <p @click="handlerClick1">{{ $t("rental_detail67") }}</p>
        <p @click="handlerClick1">{{ $t("rental_detail51") }}</p>
        <p @click="handlerClick1">{{ $t("rental_detail48") }}</p>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
    mounted() {
        console.log(this.$i18n.locales);
    },
};
</script>

<style lang="scss" scoped>
.a {
    position: relative;
    top: 0;
    left: 0;
}
</style>
