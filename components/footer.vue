<template>
    <footer :class="$style['footer-wrap']">
        <b-container>
            <div :class="$style['company-info']">
                <img src="/logo/logo-white.png" :class="$style.logo" />
            </div>
            <div :class="$style['web-info']">
                <div :class="$style.nav">
                    <div
                        v-for="item in navList"
                        :key="item.key"
                        :class="$style.link"
                        @click="goTo(item.key)"
                    >
                        {{ item.label }}
                    </div>
                </div>
                <div :class="$style['copy-right']">
                    COPYRIGHT ©2022 上鏵企業有限公司. All rights reserved.
                </div>
            </div>
        </b-container>
    </footer>
</template>

<script>
import animateScrollTo from 'animated-scroll-to';
import { navList } from '@/lib/const';

export default {
    data() {
        return {
            navList
        };
    },
    methods: {
        goTo(key) {
            const verticalOffset = document.getElementById('header-wrap').clientHeight * -1;
            animateScrollTo(document.getElementById(key), { verticalOffset });
        }
    }
};
</script>

<style lang="scss" module>

.company-info {
    padding-bottom: 2rem;
    border-bottom: 1px solid #FFF;
}

.footer-wrap {
    padding: 1.5rem 0;
    color: #FFF;
    background: $light-block;
    text-align: center;
}

.logo {
    margin-bottom: .5rem;
    width: 4rem;
    min-width: 80px;
}

.name {
    font-size: 1.2rem;
}

.web-info {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    font-size: .85rem;
}

.nav {
    display: flex;
}

.link {
    margin: 0 .7rem;
    cursor: pointer;
}

.copy-right {
    color: $light-gray;
}

@media screen and (max-width: 768px) {
    .company-info {
        padding-bottom: 0;
        border: initial;
    }

    .nav {
        display: none;
    }

    .web-info {
        justify-content: center;
    }
}
</style>
