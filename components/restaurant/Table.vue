<script setup lang="ts">
import restaurants from "~/data.json"

const restaurantsOrganized = {
    first: [...restaurants].splice(0, 25),
    second: [...restaurants].splice(25, 25)
}

</script>

<template>
    <div class="table">
        <h1>TOP 50: THE RANKING</h1>
        <div class="table-container">
            <div class="table-col">
                <RestaurantRow v-for="restaurants in restaurantsOrganized.first"
                               :key="restaurants.id"
                />
            </div>
            <div class="table-col">
                <RestaurantRow v-for="restaurants in restaurantsOrganized.second"
                               :key="restaurants.id"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.table {
    margin: 3rem 0;
}

.table h1 {
    margin-bottom: 2rem;
}

.table-container {
    display: flex;
    justify-content: space-between;
}

.table-col {
    width: 48%;
}
</style>