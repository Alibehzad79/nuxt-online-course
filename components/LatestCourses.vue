<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const { data: courses, pending, error } = await useFetch('https://freetestapi.com/api/v1/posts?limit=6', { lazy: true })

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="mt-5 p-5 border rounded-xl">
            <div class="flex flex-col md:flex-row justify-between items-end">
                <h4 class="text-2xl font-bold">We have <span class="text-blue-600">+80</span> Teachers and <span
                        class="text-orange-600">+68</span> Courses</h4>
                <NuxtLink to="/courses">
                    <Button type="button" severity="contrast" label="See All Courses" icon="pi pi-arrow-up-right"
                        size="medium" />
                </NuxtLink>
            </div>
            <div class="mt-20">
                <div v-if="pending">
                    <Progress />
                </div>
                <div v-if="courses" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                    <div v-for="course in courses" :key="course.id">
                        <CourseCard :id="course.id" :title="course.title"
                            image="https://picsum.photos/seed/picsum/200/300" rating="5"
                            course-time="2 hours and 5 minute" price="40000" :date-created="course.timestamp" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>