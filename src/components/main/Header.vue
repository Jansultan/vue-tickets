<template>
    <div class="header">
        <div class="header-inner">
            <img src="../../assets/icons/favicon.svg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 80px;
    background: #ffffff;
    margin-bottom: 80px;
    &-inner{
        width: 1140px;
        height: 100%;
        margin: 0 auto;
        padding: 0 22px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
                align-items: center;
        h3{
            font-size: 20px;
            line-height: 28px;
            color: #ffffff;
            text-align: left;
        }
    }
}
</style>