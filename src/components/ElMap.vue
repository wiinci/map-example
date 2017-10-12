<template>
    <div class="map-container">
        <map-area :place="mapData[locationIndex]"></map-area>
        <map-controls @locationChange="updateArea" :data="mapData"></map-controls>
    </div>
</template>

<script>
import MapArea from '@/components/MapArea';
import MapControls from '@/components/MapControls';

export default {
    name: 'el-map',
    props: {
        mapData: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            locationIndex: 0,
        };
    },
    components: {
        MapArea,
        MapControls,
    },
    methods: {
        updateArea(event) {
            this.locationIndex = this.mapData.findIndex(place => place.city === event.target.textContent);
        },
    },
};
</script>

<style lang="less" scoped>
@import '~@/assets/variables/global';

.map-container {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    grid-column-gap: (@base-unit * 5);
}
</style>
