<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const { data: categories, pending, error } = await useFetch('https://freetestapi.com/api/v1/countries?limit=7', { lazy: true })

const search = ref(null)
const btnLoading = ref(false)
const goSearch = () => {
    if (search.value) {
        btnLoading.value = true
        return navigateTo('/search/' + search.value.replaceAll(' ', '-'))
    }
}

const heroImage = "/image.jpg"
const { loadingHeroImage } = useImage({ src: heroImage })
</script>

<template>

    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="pending">
            <Progress />
        </div>
        <div class="flex flex-col gap-5" v-if="!load">
            <div class="p-5 flex gap-5 justify-between rounded-md items-center">
                <div class="flex flex-col rounded gap-3 items-between justify-around h-96">
                    <div class="flex flex-col gap-3">
                        <h1 class="text-3xl md:text-5xl font-bold">Smart reading where knowledge meets her</h1>
                        <p class="text-gray-500 overflow-scroll max-h-28">Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Nulla cum
                            adipisci
                            pariatur itaque maxime
                            non dicta consequatur magnam vel aut fuga at esse aperiam laborum beatae excepturi eligendi,
                            odio
                            dolore quisquam laudantium quas, optio minima? Nostrum ea consequatur velit fugiat corporis
                            odio,
                            minima optio est ratione, aut molestiae modi suscipit?</p>
                    </div>
                    <div>
                        <InputGroup>
                            <InputText v-model="search" placeholder="Saerch..." class="xl:h-16" />
                            <Button label="Search" :loading="btnLoading" @click="goSearch" severity="info"
                                class="xl:w-60 xl:text-lg" />
                        </InputGroup>
                    </div>
                </div>
                <NuxtImg :src="heroImage" v-if="!loadingHeroImage" class="rounded-3xl hidden lg:flex" />
                <div v-if="loadingHeroImage" class="hidden lg:flex">
                    <Progress />
                </div>
            </div>
            <div class="p-5 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center w-full">
                <MiniCard title="1300" subtitle="Students" icon="users" />
                <MiniCard title="200" subtitle="Skilled Students" icon="id-card" />
                <MiniCard title="150" subtitle="Programs" icon="receipt" />
                <MiniCard title="68" subtitle="Courses" icon="folder" />
            </div>
        </div>
    </div>

</template>