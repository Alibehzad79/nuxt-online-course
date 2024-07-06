<script setup>

const route = useRoute()

</script>

<template>
    <div>
        {{ route.params.id }}
        {{ route.params.title }}
    </div>
</template>