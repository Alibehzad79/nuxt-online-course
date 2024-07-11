<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

useSeoMeta({
    title: "Courses"
})
const home = ref({
    icon: 'pi pi-home',
    route: '/',
});
const items = ref([
    { label: "Courses", route: "/courses" }
])

const { data: courses, pending, refresh, error } = await useFetch(`https://freetestapi.com/api/v1/posts`, { lazy: true })

const isRefresh = ref(false)
const refreshCourses = () => {
    isRefresh.value = true
    setTimeout(() => {
        refresh()
        isRefresh.value = false
    }, 10000);
}
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <MyBreadcrumb :items="items" :home="home" title="All Courses" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-5">
                <div v-if="pending">
                    <Progress />
                </div>
                <div v-if="error" class="mt-5 text-center flex flex-col items-center gap-5">
                    <Message severity="error">Error {{ error.statusCode }}</Message>
                    <Button type="button" severity="contrast" label="Refresh Data" icon="pi pi-refresh"
                        :loading="isRefresh" @click="refreshCourses" />
                </div>
                <div v-for="course in courses" :key="course.id">
                    <CourseCard :id="course.id" :title="course.title" image="https://picsum.photos/seed/picsum/500/500"
                        rating="5" course-time="2 hours and 5 minute" price="40000" :date-created="course.timestamp" />
                </div>
            </div>
        </div>
    </div>
</template>