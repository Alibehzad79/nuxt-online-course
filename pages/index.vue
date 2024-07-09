<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})
useSeoMeta({
    title: "Home | Free Online Courses",
})
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div class="flex flex-col gap-5" v-if="!load">
            <Hero data-aos="fade-up" />
            <Categories data-aos="fade-up" />
            <LatestCourses />
            <LatestBlog />
        </div>
    </div>

</template>