<script setup>

const route = useRoute()

</script>

<template>
    <div>
        <div class="flex flex-col md:flex-row w-full gap-5">
            <div class="w-2/3 p-5"></div>
            <div class="w-1/3 p-5">
                <CourseFeatures courseLength="10" />
            </div>
        </div>
    </div>
</template>