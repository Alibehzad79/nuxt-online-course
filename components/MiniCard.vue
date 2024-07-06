<script setup>
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
        <div class="flex gap-5 items-center border p-5 rounded-xl shadow-xl" style="width: 300px;">
            <Button :icon="`pi pi-${props.icon}`" :severity="choiseSeverity" rounded outlined aria-label="Filter" />
            <div class="flex flex-col gap-1">
                <span class="font-bold text-3xl">{{ props.title }}</span>
                <span class="text-gray-500">{{ props.subtitle }}</span>
            </div>
        </div>
    </div>
</template>