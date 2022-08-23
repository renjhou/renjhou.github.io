<template>
    <div>
        <Banner />
        <component
            :is="item.key"
            v-for="item in navList"
            :id="item.key"
            :key="item.key"
        />
        <transition name="fade">
            <GoTop v-show="isShowGoTop" />
        </transition>
    </div>
</template>

<script>
import { navList } from '../lib/const';

export default {
    data() {
        return {
            isShowGoTop: false,
            navList
        };
    },
    mounted() {
        document.addEventListener('scroll', () => {
            this.isShowGoTop = window.scrollY > 0;
        });
    }
};
</script>
