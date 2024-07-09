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

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <div style="min-height: 300px; max-height: 300px"
                class="w-full rounded-3xl flex flex-col items-center justify-center gap-5 bg-gradient-to-l from-blue-200">
                <h5 class="text-5xl font-bold">All Courses</h5>
                <div class="card flex justify-center">
                    <Breadcrumb :home="home" :model="items" class="rounded-xl bg-transparent">
                        <template #item="{ item, props }">
                            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                                <a :href="href" v-bind="props.action" @click="navigate">
                                    <span :class="[item.icon, 'text-color']" />
                                    <span class="text-primary font-semibold">{{ item.label }}</span>
                                </a>
                            </router-link>
                            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                                <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                            </a>
                        </template>
                    </Breadcrumb>
                </div>
            </div>
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