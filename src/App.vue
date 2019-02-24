<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<style lang="stylus">
    @import "./assets/stylus/react.css"
    #app
        width 100%
        height 100%
        color #ffffff
</style>
