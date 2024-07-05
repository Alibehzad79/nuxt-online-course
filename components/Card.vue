<script setup>
const props = defineProps([
    'id',
    'title',
    'subtitle',
    'rating',
    'image',
])

const link = `/filmes/${props.id}/${props.title.replaceAll(' ', '-')}`
</script>

<template>
    <div>
        <NuxtLink :to="link">
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img :src="props.image"
                            :alt="title" class="w-full rounded" />
                        <Tag :value="subtitle"
                            class="absolute"
                            style="left:5px; top: 5px" />
                    </div>
                </div>
                <div class="mb-4 font-medium">{{ title }}</div>
                <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">{{ rating }}</div>
                    <span>
                        <Button icon="pi pi-heart" severity="secondary" outlined />
                        <Button icon="pi pi-shopping-cart" class="ml-2" />
                    </span>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>