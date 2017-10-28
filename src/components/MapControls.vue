<template>
    <div class="map-controls">
        <label for="filterText">Search within places</label>
        <input class="c-textInput c-mapFilter"
            :class="{ 'c-textInput--error': error }"
            id="filterText"
            type="search"
            v-model="filterText"
            aria-describedby="errorText"
            autofocus>
        <p v-if="error"
            class="c-fieldHelp"
            id="errorText">No matching place in list. Please try a different search term.</p>
        <div v-if="filteredLocations.length > 0">
            <h5>Places</h5>
            <ul>
                <li v-for="place in filteredLocations"
                    :class="{ active: label === place.city }"
                    :key="place.id">
                    <button type="button"
                        class="c-button--control"
                        :class="{ active: label === place.city }"
                        @click.prevent="handleClick">{{ place.city }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'map-controls',
    props: {
        mapData: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            error: false,
            filterText: '',
            label: this.mapData[0].city
        };
    },
    methods: {
        handleClick(event) {
            this.label = event.target.innerText;
            this.$emit('locationChange', event.target.innerText);
        }
    },
    computed: {
        filteredLocations() {
            const filter = new RegExp(this.filterText, 'i');
            const filteredMapData = this.mapData.filter(el =>
                el.city.match(filter)
            );

            if (filteredMapData.length > 0) {
                this.error = false;
                this.label = filteredMapData[0].city;
                this.$emit('locationChange', filteredMapData[0].city);
            } else {
                this.error = true;
            }

            return filteredMapData;
        }
    }
};
</script>

<style lang="less" scoped>
@import '~@/assets/variables/global';

h5 {
    font-weight: 400;
    margin-bottom: 0.8rem;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    + li {
        border-top: 1px solid #cbaa89;
    }

    &.active {
        border-top-color: #25140d;
        + li {
            border-top-color: #25140d;
        }
    }
}

.c-textInput {
    height: 3.6rem;
    width: 100%;
    border: 2px solid #cbaa89;
    border-radius: 0.4rem;
    padding: 0 0.8rem;
    font-size: @small-text;
    font-weight: 500;

    &:focus {
        outline: 0;
        border-color: #25140d;
    }

    &--error {
        border-color: #d1242a;

        &:focus {
            border-color: #d1242a;
        }

        + .c-fieldHelp {
            margin-top: -2.4rem;
            margin-bottom: 3.2rem;
            color: #d1242a;
            font-size: @small-text;
            font-weight: 500;
        }
    }
}

.c-mapFilter {
    margin: 0.8rem 0 3.2rem;
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
    color: contrast(#e7dac7, #25140d, #fff);
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover,
    &:focus {
        outline: 0;
        background-color: lighten(#e7dac7, 10%);
    }

    &.active {
        outline: 0;
        background-color: #25140d;
        color: contrast(#25140d, #25140d, #fff);
    }
}
</style>


