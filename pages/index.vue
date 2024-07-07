<script setup>
useSeoMeta({
    title: "Home | Free Online Courses"
})
</script>

<template>
    <div class="flex flex-col gap-5">
        <Hero data-aos="fade-up" />
        <Categories data-aos="fade-up" />
        <LatestCourses />
        <LatestBlog />
    </div>

</template>