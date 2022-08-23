<template>
    <b-container :class="$style['container-wrap']">
        <field-title title="客製廣告筆" sub-title="CUSTOM PEN" />
        <div :class="$style['option-wrap']">
            <div :class="$style.options" @scroll="scroll">
                <div v-show="isShowLeftShadow" :class="$style['left-shadow-gradient']" />
                <div
                    v-for="(item, key) in productOptions"
                    :key="key"
                    :class="[$style.item, { [$style.active]: curOption === key }]"
                    @click="curOption = key"
                >
                    {{ item }}
                </div>
                <div v-show="isShowRightShadow" :class="$style['right-shadow-gradient']" />
            </div>
        </div>
        <div v-if="productList[curOption]" :class="$style['product-wrap']">
            <div
                v-for="(item, index) in productList[curOption].data"
                :key="`product-${item.id}-${index}`"
                :class="$style.product"
            >
                <div :class="$style['product-img']">
                    <img :src="`/product/${curOption === 'all' ? item.key : curOption}/${item.id}-${item.label}.jpg`" />
                </div>
                <div :class="$style['product-info']">
                    <div :class="$style['product-label']">
                        {{ item.label }}
                    </div>
                    <div :class="$style.info">
                        <div>
                            {{ `編號：${item.id}` }}
                        </div>
                        <div :class="$style.amount">
                            {{ `$ ${item.amount}` }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
import FieldTitle from './field/fieldTitle';

export default {
    components: {
        FieldTitle
    },
    data() {
        return {
            isShowLeftShadow: false,
            isShowRightShadow: false,
            curOption: 'all',
            productList: {},
            productOptions: {}
        };
    },
    mounted() {
        fetch('./product.json')
            .then(res => res.json())
            .then((res) => {
                this.productOptions = Object.keys(res)
                    .reduce((init, key) => ({ ...init, [key]: res[key].text }), { all: 'ALL' });
                const allData = Object.keys(res).reduce((init, key) => [
                    ...init,
                    ...res[key].data.map(item => ({
                        key,
                        ...item
                    }))],
                []);
                this.productList = {
                    all: { data: allData },
                    ...res
                };
            });
    },
    methods: {
        imagePath(item) {
            return `/product/${this.curOption}/${item.label}.jpg`;
        },
        scroll({ target }) {
            this.isShowLeftShadow = target.scrollLeft > 0;
            this.isShowRightShadow = target.offsetWidth + target.scrollLeft < target.scrollWidth;
        }
    }
};
</script>

<style lang="scss" module>
.container-wrap {
    padding: 4rem 0 2rem;
}

.option-wrap {
    display: flex;
    position: relative;
    margin: 0 1rem;
    padding: 1rem 0;
    justify-content: center;
}

.options {
    display: flex;
    overflow-x: auto;
}

.item {
    flex-shrink: 0;
    margin: 0 .6rem;
    padding: .5rem 1.2rem;
    font-size: 1.2rem;
    background: #4B505E22;
    border-radius: 40px;
    color: $light-block;
    min-width: 5rem;
    text-align: center;
    cursor: pointer;

    &.active,
    &:hover {
        transition: .5s;
        background: $dark-blue;
        color: #FFF;
    }
}
.product-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-bottom: 9rem;
}

.product {
    display: flex;
    flex-direction: column;
    margin: 1%;
    padding: 1rem;
    width: 48%;
    border: 1px solid rgba($color: #000, $alpha: .1);
    border-radius: 10px;

    &:hover {
        box-shadow: 0 0 15px rgba($color: #000, $alpha: .3);
    }
}

.product-img {
    flex: 1;
    background: white;
    img {
        width: 100%;
        height: 100%;
        max-height: 200px;
        object-fit: contain;
    }
}

.product-info {
    flex-shrink: 0;
    padding: 0 .2rem;
}

.product-label {
    margin-top: .5rem;
    color: #000;
    font-size: 1rem;
    letter-spacing: 2px;
}

.info {
    display: flex;
    justify-content: space-between;
    color: $gray;
    font-size: 12px;
}

.amount {
    font-size: 1rem;
    font-weight: 600;
    color: #F66;
}

.shadow-gradient {
    position: absolute;
    top: 1rem;
    width: 8rem;
    height: calc(100% - 2rem);
    pointer-events: none;
}

.left-shadow-gradient {
    composes: shadow-gradient;
    left: 0;
    background-image: linear-gradient(to right, #FFFA ,#FFF0);
}

.right-shadow-gradient {
    composes: shadow-gradient;
    right: 0;
    background-image: linear-gradient(to left, #FFFA ,#FFF0);
}

@media screen and (min-width: 768px) {
    .product {
        width: 31.3%;
    }
}

@media screen and (min-width: 1200px) {
    .product {
        width: 23%;
    }
}
</style>
