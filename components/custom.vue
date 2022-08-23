<template>
    <b-container :class="$style.wrap">
        <field-title title="我們的客戶" sub-title="OUR CUSTOMERS" />
        <div :class="$style.custom">
            <div
                v-for="item in customs"
                :key="item.key"
                class="col-6 col-sm-4"
                :class="$style.logo"
            >
                <img
                    :src="`/custom/${item.key}.png`"
                    :alt="item.label"
                    :title="item.label"
                />
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            customs: [
                { key: 'FullonHotels', label: '福容大飯店' },
                { key: 'Skoda', label: 'SKODA' },
                { key: 'CGGC', label: '長庚高爾夫球場' },
                { key: 'NPUST', label: '國立屏東科技大學' },
                { key: 'XinDianHotpot', label: '辛殿麻辣鍋' },
                { key: 'YungChing', label: '永慶房屋' }
            ]
        };
    }
};
</script>

<style lang="scss" module>
.wrap {
    padding: 4rem 1.5rem 6rem;
}
.title {
    text-align: center;
}

.custom {
    display: flex;
    margin: 3rem auto 0;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.logo {
    margin-bottom: 1.5rem;
    text-align: center;

    > img {
        width: 100%;
        max-width: 200px;
    }
}
</style>
