<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})


const route = useRoute()
const query = route.params.query
const { data: searchData, pending, error } = await useFetch('https://freetestapi.com/api/v1/posts?search=' + query)
console.log(searchData)
</script>

<template>
    <div>
        <div v-if="load || pending">
            <Progress />
        </div>
        <div v-if="searchData == '' && !load">
            <Message severity="error">Not Found for '{{ query }}'</Message>
        </div>
        <div v-if="!load && searchData != ''">
            <Button :label="`I fount ${searchData.length} resulte for ${query}`" class="mb-5" />
            <h1 v-for="data in searchData">{{ data.title }}</h1>
        </div>
    </div>
</template>