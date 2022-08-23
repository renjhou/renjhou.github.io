<template>
    <div :class="$style.wrap">
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
.wrap {
    display: flex;
    flex-direction: column;
}
</style>
