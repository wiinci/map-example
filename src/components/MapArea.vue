<template>
    <div class="map-area">
        <h2>{{ place.city }}</h2>
        <p>{{ place.longitude }}, {{ place.latitude }}</p>

        <div class="map-container">
            <v-map :zoom="zoom"
                :minZoom="minZoom"
                :maxZoom="maxZoom"
                :center="[place.longitude, place.latitude]">
                <v-tilelayer :url="url"
                    :attribution="attribution"></v-tilelayer>
                <v-marker :lat-lng="{ lng: place.longitude, lat: place.latitude }"></v-marker>
            </v-map>
        </div>
    </div>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet';

export default {
    name: 'map-area',
    props: {
        place: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            minZoom: 4,
            zoom: 5,
            maxZoom: 10,
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        };
    },
    components: {
        'v-map': Vue2Leaflet.Map,
        'v-tilelayer': Vue2Leaflet.TileLayer,
        'v-marker': Vue2Leaflet.Marker,
    },
};
</script>

<style lang="less" scoped>
@import (reference) '~@/assets/variables/global';
@import "~leaflet/dist/leaflet.css";

h2 {
    font-weight: 300;
}

.map-container {
    width: 100%;
    height: 100% / 1.62;
    padding: @base-unit;
    border: 1px solid #CBAA89;
}
</style>
