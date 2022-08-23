<template>
    <b-container :class="$style.service">
        <field-title title="服務介紹" sub-title="OUR SERVICES" />
        <div :class="$style.content">
            <div>禮品、贈品，更提供客製化產品服務，滿足客戶的需求。</div>
        </div>
    </b-container>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
.service {
    padding: 4rem 0 6rem;
}

.content {
    margin: 0 auto;
    padding-top: 4rem;
    width: 90%;
    color: $dark-blue;
    text-align: center;
    font-size: 1.4rem;
    letter-spacing: .25rem;
    word-break: break-all;
}
</style>
