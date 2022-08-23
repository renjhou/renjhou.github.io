<template>
    <div :style="warpStyle">
        <b-navbar
            id="header-wrap"
            ref="nav"
            :class="[isFixed ? $style['fixed-nav'] : $style.nav]"
            toggleable="lg"
        >
            <b-navbar-brand href="#">
                <img
                    src="/logo/logo-text-gray.png"
                    :class="$style.logo"
                    @load="reSize"
                />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" />

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item
                        v-for="item in navList"
                        :key="item.key"
                        :class="$style.link"
                        @click="goTo(item.key)"
                    >
                        {{ item.label }}
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to';
import { navList } from '@/lib/const';

export default {
    data() {
        return {
            isFixed: false,
            warpStyle: {},
            navList
        };
    },
    mounted() {
        document.addEventListener('scroll', () => {
            this.isFixed = window.scrollY > 0;
        });

        this.$nextTick(() => {
            this.warpStyle = { minHeight: `${this.$refs.nav.$el.clientHeight}px` };
        });

        document.addEventListener('resize', this.reSize);
    },
    methods: {
        reSize() {
            this.warpStyle = { minHeight: `${this.$refs.nav.$el.clientHeight}px` };
        },
        goTo(key) {
            const verticalOffset = this.warpStyle.minHeight.replace('px', '') * -1;
            animateScrollTo(document.getElementById(key), { verticalOffset });
        }
    }
};
</script>

<style lang="scss" module>
.nav {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    padding: .5rem 5%;
    width: 100%;
    background: #FFF;
    box-shadow: 0 0 5px #0005;
}

.link {
    margin: 0 .25rem;
    font-size: 1.1rem;

    > a {
        color: $dark-blue !important;
        font-weight: bold;
        letter-spacing: .1rem;
    }
}

.fixed-nav {
    composes: nav;
    position: fixed;
}

.logo {
    width: 8.5rem;
    min-width: 200px;
    transform: scale(1.3);
}
</style>
