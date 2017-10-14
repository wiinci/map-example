<template>
    <div class="map-controls">
        <ul>
            <li v-for="place in data"
                :key="place.id">
                <button type="button"
                    class="c-button--control"
                    :class="{active: isActive}"
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
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        handleClick(event) {
            this.$emit('locationChange', event);
        },
        toggleActive() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style lang="less" scoped>
@import '~@/assets/variables/global';

ul {
    list-style-type: none;
    padding: 0;
}

li+li {
    border-top: 1px solid #d9d9d9;
}

.c-button--control {
    border: 2px solid transparent;
    background-color: #f7f7f7;
    padding: (@base-unit * 3) (@base-unit * 5);
    font-size: @small-text;
    font-weight: 600;
    width: 100%;
    text-align: left;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: darken(#f7f7f7, 7%);
    }

    &:focus {
        outline: 0;
        border-color: darken(#f7f7f7, 20%);
    }
}
</style>


