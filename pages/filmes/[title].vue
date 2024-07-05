<script setup>

const route = useRoute()

</script>

<template>
    <div>
        {{ route.params.title }}
    </div>
</template>