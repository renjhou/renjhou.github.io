<template>
    <div :class="$style.contact">
        <b-container>
            <field-title
                title="聯絡我們"
                sub-title="CONTACT"
                title-white
            />
            <div :class="$style.content">
                <div :class="$style.label">歡迎與我們聯絡</div>
                <div :class="$style['company-info-wrap']">
                    <div :class="$style['company-info']">
                        <img :class="$style['info-icon']" src="/contactUs/address.png" />
                        <div :class="$style['info-content']">
                            新北市三重區頂崁街210巷48弄10號
                        </div>
                    </div>
                    <div :class="$style['company-info']">
                        <img :class="$style['info-icon']" src="/contactUs/phone.png" />
                        <div :class="$style['info-content']">
                            0926-234-001
                        </div>
                    </div>
                    <div :class="$style['company-info']">
                        <img :class="$style['info-icon']" src="/contactUs/mail.png" />
                        <div :class="$style['info-content']">
                            <a href="mailto:luckygo1985@gmail.com">
                                luckygo1985@gmail.com
                            </a>
                        </div>
                    </div>
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
.contact {
    padding: 2rem 0 5rem;
    background: $dark-blue;
    text-align: center;
}

.content {
    display: inline-block;
    margin-top: 4rem;
    color: #FFF;
}

.company-info-wrap {
    margin: 2rem 0 1rem;
    display: flex;
}

.company-info {
    margin-bottom: .25rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;

    &:nth-of-type(2) {
        border: 1px solid #FFF;
        border-width: 0 1px;
    }
}

.label {
    margin-bottom: 4rem;
    font-size: 1.4rem;
    letter-spacing: .25rem;
    text-align: center;
}

.info-icon {
    padding: 1rem;
    width: 60%;
    object-fit: contain;
}

.info-content {
    margin-top: 2rem;
    font-size: 1.2rem;
    letter-spacing: .15rem;
    text-align: left;
    word-break: break-word;

    > a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
    }
}

@media screen and (max-width: 768px) {
    .company-info-wrap {
        flex-direction: column;
        align-items: center;
    }

    .company-info{
        padding: 1rem 0;
        width: 100%;

        &:nth-of-type(2) {
            border-width: 0;
        }
    }

    .info-icon {
        width: 30%;
    }

    .info-content {
        margin-top: 1rem;
    }

    .label {
        margin-bottom: 2rem;
    }
}
</style>
