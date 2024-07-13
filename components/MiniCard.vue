<script setup>

const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const props = defineProps([
    'title',
    'subtitle',
    'icon'
])
const severity = [
    'secondary',
    'success',
    'info',
    'warn',
    'danger',
    'contrast'
]

const choiseSeverity = severity[(Math.floor(Math.random() * severity.length))]
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div class="flex flex-col gap-5 p-5 rounded-xl shadow" style="width: 300px;" v-if="!load">
            <div class="flex gap-2 items-center">
                <Button :icon="`pi pi-${props.icon}`" style="min-width: 40px;" :severity="choiseSeverity" rounded
                    outlined aria-label="Filter" />
                <span class="font-bold text-2xl">{{ title }}</span>
            </div>
            <span class="text-gray-500">{{ props.subtitle }}</span>
        </div>
    </div>
</template>