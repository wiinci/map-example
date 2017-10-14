<template>
    <div class="map-controls">
        <ul>
            <li v-for="place in data"
                :key="place.id">
                <button type="button"
                    @click.prevent="handleClick">{{ place.city }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'map-controls',
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    methods: {
        handleClick(event) {
            this.$emit('locationChange', event);
        },
    },
};
</script>

<style lang="less" scoped>
@import '~@/assets/variables/global';
</style>


