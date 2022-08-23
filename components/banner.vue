<template>
    <div :class="$style.banner">
        <img src="/banner.jpg" :class="$style.img" />
        <div :class="$style.label">
            <div :class="$style['label-1']">我們的專業與用心</div>
            <div :class="$style['label-2']">ALL YOU NEED, </div>
            <div :class="$style['label-2']">LUCKY1985</div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" module>
.banner {
    position: relative;
}

.img {
    width: 100%;
}

.label {
    z-index: 1;
    position: absolute;
    top: 60%;
    left: 22%;
    transform: translateX(-50%);
}

.label-1 {
    margin-bottom: .5rem;
    color: #000;
    font-size: 1.2rem;
    letter-spacing: .2rem;
    font-weight: bold;
}

.label-2 {
    line-height: 1.3;
    color: $gray;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: .1rem;
}

@media screen and (min-width: 360px) {
    .label-1 {
        font-size: 14px;
    }

    .label-2 {
        font-size: 12px;
    }
}

@media screen and (min-width: 480px) {
    .label-1 {
        font-size: 18px;
    }

    .label-2 {
        font-size: 16px;
    }
}

@media screen and (min-width: 768px) {
    .label-1 {
        font-size: 24px;
    }

    .label-2 {
        font-size: 20px;
    }
}

@media screen and (min-width: 1200px) {
    .label-1 {
        font-size: 30px;
    }

    .label-2 {
        font-size: 26px;
    }
}

@media screen and (min-width: 1920px) {
    .label-1 {
        font-size: 36px;
    }

    .label-2 {
        font-size: 32px;
    }
}
</style>
