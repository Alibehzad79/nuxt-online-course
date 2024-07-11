<script setup>
useSeoMeta({
    title: "Blog"
})

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const home = ref({
    icon: 'pi pi-home',
    route: '/',
});
const items = ref([
    { label: "Articles", route: "/articles" }
])
const { data: articles, pending, refresh, error } = await useFetch(`https://freetestapi.com/api/v1/posts`, { lazy: true })

const isRefresh = ref(false)
const refreshArticles = () => {
    isRefresh.value = true
    setTimeout(() => {
        refresh()
        isRefresh.value = false
    }, 10000);
}


</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <MyBreadcrumb :items="items" :home="home" title="All Articless" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-5">
                <div v-if="pending">
                    <Progress />
                </div>
                <div v-if="error" class="mt-5 text-center flex flex-col items-center gap-5">
                    <Message severity="error">Error {{ error.statusCode }}</Message>
                    <Button type="button" severity="contrast" label="Refresh Data" icon="pi pi-refresh"
                        :loading="isRefresh" @click="refreshArticles" />
                </div>
                <div v-for="article in articles" :key="article.id">
                    <BlogCard :key="article.id" :id="article.id" :title="article.title"
                        image="https://picsum.photos/id/500/500" :date-created="article.timestamp"
                        :category="article.author" />
                </div>
            </div>
        </div>
    </div>
</template>