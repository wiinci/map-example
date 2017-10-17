<template>
    <div class="map-controls">
        <input clas="c-textInput"
            type="text"
            v-model="filterText">
        <ul>
            <li v-for="place in filteredLocations"
                :class="{active: label === place.city}"
                :key="place.id">
                <button type="button"
                    class="c-button--control"
                    :class="{active: label === place.city}"
                    @click.prevent="handleClick">{{ place.city }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'map-controls',
    props: {
        mapData: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            filterText: '',
            label: this.mapData[0].city,
        };
    },
    methods: {
        handleClick(event) {
            this.label = event.target.innerText;
            this.$emit('locationChange', event.target.innerText);
        },
    },
    computed: {
        filteredLocations() {
            const filter = new RegExp(this.filterText, 'i');
            const filteredMapData = this.mapData.filter(el => el.city.match(filter));
            this.label = filteredMapData[0].city;
            this.$emit('locationChange', filteredMapData[0].city);
            return filteredMapData;
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

li {
    +li {
        border-top: 1px solid #CBAA89;
    }

    &.active {
        border-top-color: #25140D;
        +li {
            border-top-color: #25140D;
        }
    }
}

.map-controls {
    min-height: 100vh / 1.62;
}

.c-button--control {
    border: 0;
    padding: (@base-unit * 3) (@base-unit * 5);
    font-size: @small-text;
    font-weight: 600;
    width: 100%;
    text-align: left;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: contrast(#E7DAC7, #25140D, #fff);
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover,
    &:focus {
        outline: 0;
        background-color: lighten(#E7DAC7, 10%);
    }

    &.active {
        outline: 0;
        background-color: #25140D;
        color: contrast(#25140D, #25140D, #fff);
    }
}
</style>


