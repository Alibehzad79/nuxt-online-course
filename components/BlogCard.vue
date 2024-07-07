<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

import { useTimeAgo } from '@vueuse/core'
const props = defineProps([
    'id',
    'title',
    'dateCreated',
    'category',
    'image',
])

const link = '/blog/' + props.title.replaceAll(" ", "-")
const timeAgo = useTimeAgo(new Date(props.dateCreated))
const blogImage = props.image
const { isLoading } = useImage({ src: blogImage })
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <NuxtLink :to="link" v-if="!load">
            <Card style="width: 20rem; overflow: hidden" class="w-full" data-aos="fade-up">
                <template #header>
                    <img :alt="title" :src="image" v-if="!isLoading" style="height: 20rem; width: 100%;" />
                    <div v-if="isLoading">
                        <Progress />
                    </div>
                </template>
                <template #title>{{ title }}</template>
                <template #subtitle>
                    <div class="flex flex-col gap-3">
                        <div><span class="pi pi-tag me-1"></span> {{ category }}</div>
                        <div><span class="pi pi-calendar"></span> {{ timeAgo }} ago</div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <NuxtLink :to="link" class="w-full">
                            <Button label="More..." severity="contrast" outlined class="w-full" />
                        </NuxtLink>
                    </div>
                </template>
            </Card>
        </NuxtLink>
    </div>
</template>