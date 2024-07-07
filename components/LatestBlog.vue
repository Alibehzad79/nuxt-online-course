<script setup>

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const { data: articles, pending, refresh, error } = await useFetch('https://freetestapi.com/api/v1/posts?limit=3')
const isRefresh = ref(false)
const refreshArticles = () => {
    isRefresh.value = true
    refresh()
    setTimeout(() => {
        isRefresh.value = false
    }, 5000);
}
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div class="p-5 items-center flex flex-col gap-5 mt-5 rounded-xl border" v-if="!load">
            <div class="flex flex-col items-center text-center w-full md:w-1/2 gap-3">
                <h5 class="text-4xl font-bold">Latest Blog</h5>
                <p class="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eum error sunt.
                    Veniam nostrum quaerat
                    voluptatum reprehenderit tempora odio et consectetur quasi mollitia alias ex amet dolores molestiae,
                    nemo corrupti?</p>
            </div>
            <div class="mt-5">
                <div v-if="pending">
                    <Progress />
                </div>
                <div v-if="error" class="flex flex-col gap-5">
                    <Message severity="error">Error{{ error.statusCode }}</Message>
                    <Button type="button" severity="contrast" label="Refresh Data" icon="pi pi-refresh"
                        :loading="isRefresh" @click="refreshArticles" />
                </div>
                <div v-if="articles" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 jsutify-items-center">
                    <div v-for="article in articles">
                        <BlogCard :key="article.id" :id="article.id" :title="article.title"
                            image="https://picsum.photos/id/237/200" :date-created="article.timestamp"
                            :category="article.author" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>