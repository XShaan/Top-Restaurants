<script setup lang="ts">
import restaurants from "~/data.json"

const restaurantsOrganized = {
    first: [...restaurants].splice(0, 25),
    second: [...restaurants].splice(25, 25)
}

</script>

<template>
    <div class="container">
        <h1>TOP 50: THE RANKING</h1>
        <div class="row">
            <div class="col-6">
                <table class="table table-striped custom-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <RestaurantRow v-for="(restaurants, index) in restaurantsOrganized.first"
                                   :key="restaurants.id"
                                   :name="restaurants.name"
                                   :rank="restaurants.rank"
                                   :index="index"
                    />
                </table>
            </div>
            <div class="col-6">
                <table class="table table-striped custom-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    </thead>

                    <RestaurantRow v-for="(restaurants, index) in restaurantsOrganized.second"
                                   :key="restaurants.id"
                                   :name="restaurants.name"
                                   :rank="restaurants.rank"
                                   :index="index"
                    />

                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>