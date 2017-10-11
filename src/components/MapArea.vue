<template>
    <div class="map-area">
        <h2>Map</h2>
        <p>{{ data.city }}</p>
        <p>{{ data.latitude }}</p>
        <p>{{ data.longitude }}</p>
    </div>
</template>

<script>
export default {
    name: 'map-area',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>
