<script setup>

const load = ref(true)

tryOnMounted(() => {
    load.value = false
})


const categories = [
    {
        id: 1,
        name: 'Programming',
        icon: "desktop"
    },
    {
        id: 2,
        name: 'Digital Marketing',
        icon: "shop"
    },
    {
        id: 3,
        name: 'Machin Learning',
        icon: "car"
    },
    {
        id: 4,
        name: 'DataBase',
        icon: "database"
    },
    {
        id: 5,
        name: 'UI-UX',
        icon: "palette"
    },
    {
        id: 6,
        name: 'Front-End',
        icon: "code"
    },
    {
        id: 7,
        name: 'Back-End',
        icon: "code"
    },
    {
        id: 8,
        name: 'Photograpy',
        icon: "camera"
    },
]

const categoryLoading = ref()

const goToCategory = (category) => {
    categoryLoading.value = category.id
    setTimeout(() => {
        return navigateTo('/categories/' + category.name.replaceAll(' ', '-'))
    }, 1000);
}

</script>

<template>
    <div>
        <div v-if="load || !categories">
            <Progress />
        </div>
        <div class="mt-5 p-5 flex flex-col items-center justify-center rounded-xl shadow" v-if="!load && categories">
            <div class="flex flex-col justify-center items-center w-full md:mx-auto md:w-1/2 md:text-center gap-3">
                <h4 class="text-2xl md:text-4xl font-bold">Find Courses with <span
                        class="text-pink-600">Categories</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nesciunt totam, voluptatibus delectus,
                    repudiandae distinctio officiis neque sunt maxime recusandae animi. Quibusdam consectetur</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 justify-center items-center">
                <Button v-for="category in categories" @click="goToCategory(category)" :key="category.id"
                    :label="category.name" :icon="`pi pi-${category.icon}`" :loading="category.id === categoryLoading"
                    severity="secondary" size="large" rounded />

            </div>
        </div>

    </div>
</template>