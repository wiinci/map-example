<template>
    <div class="map-header">
        <h2>{{ place.city }}</h2>
        <p>{{ place.longitude }}, {{ place.latitude }}</p>
    </div>
</template>

<script>
export default {
    name: 'map-header',
    props: {
        place: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="less" scoped>
@import (reference) '~@/assets/variables/global';

h2 {
    font-weight: 300;

    + p {
        margin: 0.8rem 0 2.4rem;
        color: #777;
    }
}
</style>
