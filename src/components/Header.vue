<script setup>

</script>

<template>
    <div class="header">
        <router-link :to="{name: 'home'}" class="logo">
            <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#FC4747"/></svg>
        </router-link>
        <div class="menu">
            <router-link :to="{name: 'home'}" class="link">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill="#5A698F"/></svg>
            </router-link>
            <router-link :to="{name: 'movie'}" class="link">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#5A698F"/></svg>
            </router-link>
            <router-link :to="{name: 'series'}" class="link">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill="#5A698F"/></svg>
            </router-link>
            <router-link :to="{name: 'bookmarked'}" class="link">
                <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" fill="#5A698F"/></svg>
            </router-link>
        </div>
        <div class="image-wrapper">
            <img class="user-avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/330px-Outdoors-man-portrait_%28cropped%29.jpg" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 16px;
    background-color: #161D2F;

    @media (min-width: 768px) {
        border-radius: 10px;
        padding: 24px;
    }

    @media (min-width: 1360px) {
        flex-direction: column;
        height: 100%;
        width: 100%;
        gap: 70px;
        border-radius: 20px;
    }
}
.logo{
    width: 50px;
    display: flex;
    align-items: center;

    @media (min-width: 1360px) {
        width: auto;
    }
}
.menu{
    display: flex;
    align-items: center;
    gap: 24px;

    @media (min-width: 768px) {
        gap: 32px;
    }

    @media (min-width: 1360px) {
        flex-direction: column;
        gap: 40px;
    }
}
.link{
    cursor: pointer;
    display: flex;
    align-items: center;
}
.link path{
    transition: fill 0.2s;
}
.link:hover path{
    
    @media (min-width: 1360px) {
        fill: #FC4747;
    }
}
.menu .router-link-active path{
    fill: #fff;
}
.image-wrapper{
    margin-left: 24px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;

    @media (min-width: 768px) {
        width: 32px;
        height: 32px;
    }

    @media (min-width: 1360px) {
        margin-left: 0;
        margin-top: auto;
        width: 40px;
        height: 40px;
    }
}
.user-avatar{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>