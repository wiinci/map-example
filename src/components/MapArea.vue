<template>
    <div class="map-area">
        <div class="map-container">
            <v-map :zoom="zoom"
                :minZoom="minZoom"
                :maxZoom="maxZoom"
                :center="[place.longitude, place.latitude]">
                <v-tilelayer :url="url"
                    :attribution="attribution"></v-tilelayer>
                <v-marker :lat-lng="[place.longitude, place.latitude]"></v-marker>
            </v-map>
        </div>
    </div>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet';

// Workaround for Map Marker
// Inlined Base64 image appears broken
// https://github.com/Leaflet/Leaflet/issues/4968
// https://github.com/KoRiGaN/Vue2Leaflet/issues/28#issuecomment-320227460
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.imagePath = '';
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default {
    name: 'map-area',
    props: {
        place: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            minZoom: 4,
            zoom: 5,
            maxZoom: 10,
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        };
    },
    components: {
        'v-map': Vue2Leaflet.Map,
        'v-tilelayer': Vue2Leaflet.TileLayer,
        'v-marker': Vue2Leaflet.Marker
    }
};
</script>

<style lang="less" scoped>
@import (reference) '~@/assets/variables/global';
@import '~leaflet/dist/leaflet.css';

.map-container {
    width: 100%;
    height: 100% / 1.62;
    // max-height: 100vh / 1.62;
    padding: @base-unit;
    border: 1px solid #cbaa89;
}
</style>
