<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const { data: courses, pending, error, refresh } = await useFetch('https://freetestapi.com/api/v1/posts?limit=6', { lazy: true })
const isRefresh = ref(false)
const refreshCourses = () => {
    isRefresh.value = true
    refresh()
    setTimeout(() => {
        isRefresh.value = false
    }, 5000);
}
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="mt-5 p-5 rounded-xl">
            <div class="flex flex-col md:flex-row justify-between items-between gap-5">
                <h4 class="text-2xl font-bold">We have <span class="text-blue-600">80+</span> Teachers and <span
                        class="text-orange-600">108+</span> Courses</h4>
                <NuxtLink to="/courses">
                    <Button type="button" severity="contrast" label="See All Courses" icon="pi pi-arrow-up-right"
                        size="medium" />
                </NuxtLink>
            </div>
            <div v-if="error" class="mt-5 text-center flex flex-col items-center gap-5">
                <Message severity="error">Error {{ error.statusCode }}</Message>
                <Button type="button" severity="contrast" label="Refresh Data" icon="pi pi-refresh" :loading="isRefresh"
                    @click="refreshCourses" />
            </div>
            <div class="mt-5">
                <div v-if="pending">
                    <Progress />
                </div>
                <div v-if="courses" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                    <div v-for="course in courses" :key="course.id">
                        <CourseCard :id="course.id" :title="course.title"
                            image="https://picsum.photos/seed/picsum/500/500" rating="5"
                            course-time="2 hours and 5 minute" price="40000" :date-created="course.timestamp" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>