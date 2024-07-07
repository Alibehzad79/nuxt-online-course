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

const link = '/blog/articles/' + props.title.replaceAll(" ", "-")
const timeAgo = useTimeAgo(new Date(props.dateCreated))
const blogImage = props.image
const { isLoading } = useImage({ src: blogImage })


const articleId = ref()

const goToArticle = (id) => {
    articleId.value = id
    setTimeout(() => {
        return navigateTo('/blog/articles/' + props.id + '/' + props.title.replaceAll(' ', '-'))
    }, 1000);
}


</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <Card style="width: 100%; overflow: hidden" class="w-full" data-aos="fade-up" v-if="!load">
            <template #header>
                <img :alt="title" @click="goToArticle(id)" class="cursor-pointer" :src="image" v-if="!isLoading"
                    style="height: 20rem; width: 100%;" />
                <div v-if="isLoading">
                    <Progress />
                </div>
            </template>
            <template #title>
                <div @click="goToArticle(id)" class="cursor-pointer">{{ title }}</div>
            </template>
            <template #subtitle>
                <div class="flex flex-col gap-3">
                    <div><span class="pi pi-tag me-1"></span> {{ category }}</div>
                    <div><span class="pi pi-calendar"></span> {{ timeAgo }} ago</div>
                </div>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button label="More..." @click="goToArticle(id)" :loading="id === articleId" severity="contrast"
                        outlined class="w-full" />
                </div>
            </template>
        </Card>
    </div>
</template>