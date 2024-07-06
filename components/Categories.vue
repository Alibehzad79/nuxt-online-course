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


const goToCategory = (category) => {
    return navigateTo('/categories/' + category.name.replaceAll(' ', '-'))
}

</script>

<template>
    <div>
        <div v-if="load || !categories">
            <Progress />
        </div>
        <div class="mt-5 p-5 flex flex-col items-center justify-center rounded-xl border" v-if="!load && categories">
            <div class="flex flex-col justify-center items-center mx-auto w-1/2 text-center gap-3">
                <h4 class="text-4xl font-bold">Find Courses with Categories</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nesciunt totam, voluptatibus delectus,
                    repudiandae distinctio officiis neque sunt maxime recusandae animi. Quibusdam consectetur</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 justify-center items-center">
                <Button v-for="category in categories" @click="goToCategory(category)" :key="category.id"
                    :label="category.name" :icon="`pi pi-${category.icon}`" severity="secondary" size="large" rounded />

            </div>
        </div>

    </div>
</template>