<script setup>

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="mt-5 md:w-1/2 mx-auto">
            <Message severity="success"><span class="pi pi-check animate-bounce me-2"></span>Your Password Changed Successfully.
            </Message>
        </div>
    </div>
</template>