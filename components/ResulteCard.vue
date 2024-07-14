<script setup>
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const props = defineProps([
    'title',
    'content',
    'id',
])

const link = '/blog/articles/' + props.id + '/' + props.title.replaceAll(' ', '-')

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load">
            <NuxtLink :to="link">
                <div class="flex flex-col gap-2 p-5 border rounded-xl">
                    <h6 class="font-bold text-xl">{{ title }}</h6>
                    <p style="max-height: 20px; overflow: hidden; max-width: 500px;">{{ content }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>