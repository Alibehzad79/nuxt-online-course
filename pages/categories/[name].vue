<script setup>

const route = useRoute()
const category_name = route.params.name

</script>


<template>
    <div>
        {{ category_name }}
    </div>
</template>