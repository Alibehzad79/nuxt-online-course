<script setup>
import { useImage, useTimeAgo } from '@vueuse/core'
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const props = defineProps([
    'id',
    'title',
    'courseTime',
    'rating',
    'image',
    'price',
    'dateCreated',
])

const courseImage = props.image
const { isLoading } = useImage({ src: courseImage })
const timeAgo = useTimeAgo(new Date(props.dateCreated))
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <NuxtLink :to="`/courses/${id}/${title.replaceAll(' ', '-')}`" v-if="!load" data-aos="fade-up">
            <Card style="overflow: hidden; width: 20rem;">
                <template #header>
                    <img :alt="title" v-if="!isLoading" :src="courseImage" style="height: 20rem; width: 100%;" />
                    <div v-if="isLoading">
                        <Progress />
                    </div>
                </template>
                <template #title>{{ title }}</template>
                <template #subtitle>
                    <div class="flex flex-col gap-2">
                        <div><span class="pi pi-clock me-1"></span> {{ courseTime }}</div>
                        <div><span class="pi pi-calendar"></span> {{ timeAgo }} ago</div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <Button :label="`Price: ${price}`" severity="contrast" class="w-full" />
                    </div>
                </template>
            </Card>
        </NuxtLink>
    </div>
</template>