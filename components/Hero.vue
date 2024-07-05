<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const { data: categories, pending, error } = await useFetch('https://freetestapi.com/api/v1/countries?limit=7', { lazy: true })

</script>

<template>

    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="pending">
            <Progress />
        </div>
        <div class="hidden md:grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6" v-if="!load && categories">
            <NuxtLink v-for="category in categories" :to="`/categories/${category.name}`" style="">
                <Card style="overflow: hidden">
                    <template #header>
                        <img :alt="category.name" :src="category.flag" />
                    </template>
                    <template #title>{{category.name}}</template>
                    <template #subtitle>1300+</template>
                </Card>
            </NuxtLink>
        </div>
    </div>

</template>