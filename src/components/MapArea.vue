<template>
    <div class="map-area">
        <h2>{{ place.city }}</h2>
        <p>{{ place.longitude }}, {{ place.latitude }}</p>

        <v-map :zoom="zoom" :center="[place.longitude, place.latitude]">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-marker :lat-lng="{ lng: place.longitude, lat: place.latitude }"></v-marker>
        </v-map>
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
            zoom: 4,
            url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        };
    },
    components: {
        'v-map': Vue2Leaflet.Map,
        'v-tilelayer': Vue2Leaflet.TileLayer,
        'v-marker': Vue2Leaflet.Marker,
    },
};
</script>

<style scoped>
@import "~leaflet/dist/leaflet.css";

h2 {
    font-weight: 300;
}
</style>

