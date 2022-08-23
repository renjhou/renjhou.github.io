<template>
    <div :class="$style['company-profile']">
        <b-container>
            <field-title title="公司介紹" sub-title="COMPANY PROFILE" />
            <div :class="$style['about-us-wrap']">
                <div :class="$style['img-wrap']">
                    <div :class="$style['image-block']" />
                    <img src="/aboutUs1.jpg" :class="$style.image" />
                </div>
                <div :class="$style['about-us']">
                    <div :class="$style.title">ABOUT US</div>
                    <div :class="$style['sub-title']">
                        <span :class="$style.label">
                            <div :class="$style.block" />
                            <span>關於我們</span>
                        </span>
                    </div>
                    <div :class="$style.content">
                        專營各式廣告筆、金屬筆、水鑽筆、鉛筆 、造型筆...等。自有專業雷射雕刻機及印刷廠，可印刷公司LOGO及文宣，專為企業及顧客提供訂製客製化商品。
                    </div>
                </div>
            </div>
            <div :class="$style.philosophy">
                <div :class="$style.title">PHILOSOPHY</div>
                <div :class="$style['sub-title']">
                    <span :class="$style.label">
                        <div :class="$style.block" />
                        <span>經營理念</span>
                    </span>
                </div>
                <div :class="$style.content">
                    本公司秉持著務實、專業、誠信與熱忱服務的核心價值理念，務實與踏實的耕耘，品質與服務的堅持，提升自我的實力，朝客戶更滿意的目標邁進。
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
.company-profile {
    padding: 4rem 0 6rem;
    background: $light-gray;
}

.about-us-wrap {
    display: flex;
    padding-top: 3rem;
}

.img-wrap {
    position: relative;
    width: 50%;

    .image-block {
        position: absolute;
        top: 0;
        left: 0;
        width: 90%;
        height: 90%;
        background: $dark-blue;
    }

    .image {
        display: block;
        position: relative;
        margin: 5% 0 5% 5%;
        width: 90%;
        height: 90%;
    }
}

.title {
    color: $gray;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: .1rem;
}

.sub-title {
    color: $dark-blue;
    font-size: 1.75rem;
    font-weight: bold;
    letter-spacing: .15rem;
}

.content {
    margin-top: 2.25rem;
    line-height: 2rem;
    color: #000;
    font-size: 1.2rem;
    text-align: left;
    letter-spacing: .05rem;
}

.block {
    position: absolute;
    left: -5%;
    bottom: 0;
    width: 115%;
    height: 65%;
    background: $gray;
}

.about-us {
    display: flex;
    padding: 0 2.25rem;
    width: 50%;
    flex-direction: column;
    justify-content: center;

    .title {
        padding-left: .5rem;
    }

    .content {
        margin-top: 1rem;
    }
}

.philosophy {
    padding: 4rem 3rem 0;
    text-align: center;

    .content {
        padding: 0 10%;
    }
}

.label {
    position: relative;
    > span {
        position: relative;
    }
}

@media screen and (max-width: 768px) {
    .philosophy {
        .content {
            padding: 0;
        }
    }

    .about-us-wrap {
        flex-direction: column;
    }

    .img-wrap,
    .about-us {
        width: 100%;
        text-align: center;
    }
}
</style>
