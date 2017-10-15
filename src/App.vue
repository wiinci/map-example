<template>
    <div id="app">
        <header class="page-header u-padding-x">
            <nav>
                <h1 class="page-header_text">VueJS Map Test</h1>
            </nav>
        </header>
        <main class="u-padding-y">
            <el-map :map-data="mapData"></el-map>
        </main>
    </div>
</template>

<script>
import ElMap from '@/components/ElMap';
import MapJSON from '../static/data/aulatlong.json';

export default {
    name: 'app',
    components: {
        ElMap,
    },
    data() {
        return {
            mapData: MapJSON,
        };
    },
};
</script>

<style lang="less">
@import (reference) '~@/assets/variables/global';

html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: percentage(10 / 16);
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    min-height: 100vh;
    margin: 0;
    position: relative;
    color: @black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: @normal-text;
    font-family: -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen-Sans,
    Ubuntu,
    Cantarell,
    "Helvetica Neue",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
}

strong {
    font-weight: bolder;
}

h1,
h2,
h3,
h4,
h5 {
    margin: 0;
}

h1 {
    font-size: @h1;
}

h2 {
    font-size: @h2;
}

h3 {
    font-size: @h3;
}

h4 {
    font-size: @h4;
}

h5 {
    font-size: @h5;
}

#app {
    min-height: inherit;
}

main {
    max-width: 80vw;
    margin: 0 auto;
}

/// Classes
.u-padding-x {
    padding-left: 5vw;
    padding-right: 5vw;
}

.u-padding-y {
    padding-top: 5vh;
    padding-bottom: 5vh;
}

.page-header {
    height: 4.8rem;
    background-color: @gray-11;
    display: flex;
    align-items: center;
}

.page-header_text {
    font-size: @small-text;
    color: @white;
    margin: 0;
}
</style>
