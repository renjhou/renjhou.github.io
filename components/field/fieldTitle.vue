<template>
    <div>
        <div :class="[$style.title, { [$style.white]: titleWhite }]">
            {{ title }}
        </div>
        <div :class="$style['sub-title']">
            {{ `－ ${subTitle} －` }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        titleWhite: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" module>
.title {
    margin: 0.67rem 0;
    color: $light-block;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 5px;

    &.white {
        color: #FFF;
    }
}

.sub-title {
    margin-bottom: .5rem;
    color: $gray;
    text-align: center;
    font-size: 1.75rem;
    font-weight: bold;
    letter-spacing: 2px;
}
</style>
