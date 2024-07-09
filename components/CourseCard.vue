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

const courseId = ref()

const goToCourse = (id) => {
    courseId.value = id
    setTimeout(() => {
        return navigateTo('/courses/' + props.id + '/' + props.title.replaceAll(' ', '-'))
    }, 100);
}

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <Card style="overflow: hidden; width: 100%;" data-aos="fade-up" v-if="!load">
            <template #header>
                <img class="cursor-pointer" :alt="title" v-if="!isLoading" @click="goToCourse(id)" :src="courseImage"
                    style="width: 100%;" />
                <div v-if="isLoading">
                    <Progress />
                </div>
            </template>
            <template #title>
                <div class="cursor-pointer" @click="goToCourse(id)">{{ title }}</div>
            </template>
            <template #subtitle>
                <div class="flex flex-col gap-2">
                    <div><span class="pi pi-clock me-1"></span> {{ courseTime }}</div>
                    <div><span class="pi pi-calendar"></span> {{ timeAgo }} ago</div>
                </div>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button :label="`Price: ${price}`" @click="goToCourse(id)" :loading="id === courseId"
                        severity="contrast" class="w-full" />
                </div>
            </template>
        </Card>
    </div>
</template>