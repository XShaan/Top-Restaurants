<script setup lang="ts">

interface RowProps {
    rank?: number;
    name?: string;
    index?: number;
    isHeader?: boolean;
}

const props = defineProps<RowProps>()

</script>

<template>
    <tbody>
    <tr>
        <td>{{ rank }}</td>
        <td><a :href="`/restaurants/${name}`" class="link">{{ name }}</a></td>
    </tr>
    </tbody>
</template>

<style scoped>
.link {
    text-decoration: none;
    color: rgb(228, 157, 27);
    width: auto;
    font-weight: 500;
}
</style>