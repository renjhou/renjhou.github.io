<template>
    <div :class="$style['go-top']" @click="animateScrollTo([0, 0])">
        <font-awesome-icon icon="arrow-up" />
    </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to';

export default {
    methods: {
        animateScrollTo
    }
};
</script>

<style lang="scss" module>
.go-top {
    z-index: 1;
    position: fixed;
    right: 5%;
    bottom: 5%;
    padding: .75rem;
    width: 3.5rem;
    height: 3.5rem;
    max-width: 80px;
    max-height: 80px;
    border-radius: 10px;
    color: #FFF;
    background: #949EAD;
    cursor: pointer;

    > svg {
        width: 100%;
        height: 100%;
    }
}
</style>
