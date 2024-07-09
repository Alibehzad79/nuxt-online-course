<script setup>
import { useTimeAgo } from '@vueuse/core'

const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const route = useRoute()

const { data: course, pending, error } = await useFetch(`https://freetestapi.com/api/v1/posts/${route.params.id}`)
console.log(course.timestamp)
const timeAgo = useTimeAgo(new Date(String(course.timestamp)))
console.log(timeAgo)

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div class="flex flex-col md:flex-row w-full gap-5 justify-start items-center" v-if="!load">
            <div class="md:w-2/3 p-5 flex flex-col gap-5">
                <Image src="/course.jpg" alt="" width="100%" />
                <h1 class="text-5xl font-bold">{{ course.title }}</h1>
                <div class="flex flex-wrap gap-5">
                    <span class="flex items-center gap-2"><i class="pi pi-calendar"></i>{{ timeAgo }}</span>
                </div>
                <div class="mt-5">
                    {{ course.content }}
                </div>
            </div>
            <div class="md:w-1/3 p-5 flex flex-col gap-5">
                <CourseFeatures courseLength="10" videoCount="30" studentsCount="1500" haveCertification="Yes"
                    price="45" />
                <RelatedCourses />
            </div>
        </div>
    </div>
</template>