<script setup lang="ts">
import {XMarkIcon} from '@heroicons/vue/20/solid'

const banner = useState('banner', () => true)

</script>

<template>
    <div v-show="banner" class="flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p class="text-sm leading-6 text-white">
            <a href="#">
                <strong class="font-semibold">Dine like a King</strong>
                <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx="1" cy="1" r="1"/>
                </svg>
                Savor Exceptional Dining Experiences at Our Top-Ranked Restaurants <span
                    aria-hidden="true">&rarr;</span>
            </a>
        </p>
        <div class="flex flex-1 justify-end">
            <button @click="banner = false" type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                <span class="sr-only">Dismiss</span>
                <XMarkIcon class="h-5 w-5 text-white" aria-hidden="true"/>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>