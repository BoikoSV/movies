<script setup>
import Header from './Header.vue'
import Search from './Search.vue'
</script>

<template>
    <div class="wrapper">
        <div class="header">
            <Header />
        </div>
        <div class="content">
            <div class="search">
                <Search />
            </div>
            <main class="main">
                <router-view></router-view>
            </main>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    gap: 15px;

    @media (min-width: 768px) {
        padding: 23px;
        gap: 20px;
    }

    @media (min-width: 1366px) {
        padding: 32px;
        gap: 36px;
        grid-template-columns: 96px 1fr;
        grid-template-rows: 100vh auto;
    }
}
.header{
    
    @media (min-width: 1366px) {
        padding-bottom: 50px;
    }
}
.content{
    margin: 0 16px;

    @media (min-width: 768px) {
        margin: 0;
    }
}
.search{
    
    margin-bottom: 10px;
    @media (min-width: 768px) {
        margin-bottom: 20px;
        padding-top: 20px;
    }
}
</style>