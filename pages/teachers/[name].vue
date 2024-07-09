<script setup>
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const route = useRoute()

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load">
            {{ route.params.name }}
        </div>
    </div>
</template>