<script setup>
import Message from 'primevue/message';


const load = ref(true)
tryOnMounted(() => {
    load.value = false
})


const route = useRoute()
const query = route.params.query

const { data: results, pending, error } = await useFetch(`https://freetestapi.com/api/v1/posts?search=${query}`, { lazy: true })

</script>


<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <div v-if="results" v-for="result in results" :key="result.id">
                <ResulteCard :title="result.title" :content="result.content" :id="result.id"/>
            </div>
            <div v-if="results == ''">
                <Message severity="error">Not Found Result for '{{ query }}'</Message>
            </div>
        </div>
    </div>
</template>