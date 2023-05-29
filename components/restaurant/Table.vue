<script setup lang="ts">
import restaurants from "~/data.json"

const restaurantsOrganized = {
    first: [...restaurants].splice(0, 25),
    second: [...restaurants].splice(25, 25)
}

</script>

<template>
    <div class="bg-gray-900 grid grid-cols-2 gap-2">
        <div class="py-10">
            <h2 class="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Latest activity</h2>
            <table class="mt-6 w-full whitespace-nowrap text-left">
                <colgroup>
                    <col class="w-full sm:w-4/12"/>
                    <col class="lg:w-4/12"/>
                </colgroup>
                <thead class="border-b border-white/10 text-sm leading-6 text-white">
                <tr>
                    <th scope="col" class="py-2 pl-0 pr-8 font-semibold sm:pl-6 lg:pl-8">name</th>
                    <th scope="col" class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">Rank</th>

                </tr>
                </thead>
                <tbody class="divide-y divide-white/5">
                <tr v-for="restaurant in restaurantsOrganized.first" :key="restaurant.id">
                    <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                        <div class="flex items-center gap-x-4">
                            <img :src="restaurant.imageUrl" alt="" class="h-8 w-8 rounded-full bg-gray-800"/>
                            <div class="flex gap-x-3">
                                <div class="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                    <a :href="`/restaurants/${restaurant.name}`" class="link">{{ restaurant.name }}</a>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                        <div class="flex items-center gap-x-4">
                            <div class="flex gap-x-3">
                                <div class="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                    {{ restaurant.rank }}
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="py-10">
            <h2 class="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Latest activity</h2>
            <table class="mt-6 w-full whitespace-nowrap text-left">
                <colgroup>
                    <col class="w-full sm:w-4/12"/>
                    <col class="lg:w-4/12"/>
                </colgroup>
                <thead class="border-b border-white/10 text-sm leading-6 text-white">
                <tr>
                    <th scope="col" class="py-2 pl-0 pr-8 font-semibold sm:pl-6 lg:pl-8">name</th>
                    <th scope="col" class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">Rank</th>

                </tr>
                </thead>
                <tbody class="divide-y divide-white/5">
                <tr v-for="restaurant in restaurantsOrganized.second" :key="restaurant.id">
                    <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                        <div class="flex items-center gap-x-4">
                            <img :src="restaurant.imageUrl" alt="" class="h-8 w-8 rounded-full bg-gray-800"/>
                            <div class="flex gap-x-3">
                                <div class="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                    <a :href="`/restaurants/${restaurant.name}`" class="link">{{ restaurant.name }}</a>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                        <div class="flex items-center gap-x-4">
                            <div class="flex gap-x-3">
                                <div class="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                    {{ restaurant.rank }}
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>