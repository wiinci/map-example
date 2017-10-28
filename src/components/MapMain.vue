<template>
    <div class="map-main">
        <map-header :place="mapData[locationIndex]"></map-header>
        <div class="map-container">
            <map-area :place="mapData[locationIndex]"></map-area>
            <map-controls @locationChange="updateArea"
                :mapData="mapData"></map-controls>
        </div>
    </div>
</template>

<script>
import MapHeader from '@/components/MapHeader';
import MapArea from '@/components/MapArea';
import MapControls from '@/components/MapControls';

export default {
    name: 'map-main',
    props: {
        mapData: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            locationIndex: 0
        };
    },
    components: {
        MapHeader,
        MapArea,
        MapControls
    },
    methods: {
        updateArea(label) {
            this.locationIndex = this.mapData.findIndex(
                place => place.city === label
            );
        }
    }
};
</script>

<style lang="less" scoped>
@import (reference) '~@/assets/variables/global';

.map-container {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    grid-column-gap: 2.4rem;
    grid-auto-rows: 62vh;
}
</style>
