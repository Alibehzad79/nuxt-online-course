<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

const props = defineProps([
    'url',
    'title',
    'link',
    'icon'
])

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const { data: movies, pending, error } = await useFetch(`${props.url}`, { lazy: true })
</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div class="card my-5 shadow p-5 rounded gap-5 flex flex-col" v-if="!load">
            <div class="flex justify-between">
                <span class="text-xl border px-5 py-2 rounded-full"><span :class="`pi ${icon} me-2`"></span>{{ title }}</span>
                <NuxtLink :to="link">
                    <Button label="See All" severity="success" outlined />
                </NuxtLink>
            </div>
            <div v-if="pending">
                <Progress />
            </div>
            <Carousel v-if="movies && !pending" :value="movies" :numVisible="3" :numScroll="3"
                :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <NuxtLink :to="`${link}/${slotProps.data.title.replaceAll(' ', '-')}`">
                        <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                            <div class="mb-4">
                                <div class="relative mx-auto">
                                    <img :src="slotProps.data.poster" :alt="slotProps.data.title"
                                        class="w-full rounded" />
                                    <Tag :value="slotProps.data.country" class="absolute" style="left:5px; top: 5px" />
                                </div>
                            </div>
                            <div class="mb-4 font-medium font-bold">{{ slotProps.data.title }}</div>
                            <div class="flex justify-between items-center">
                                <div class="mt-0 font-semibold text-xl">⭐{{ slotProps.data.rating }}</div>
                                <span>
                                    <NuxtLink :to="`${link}/${slotProps.data.title.replaceAll(' ', '-')}`"><Button
                                            label="Watch Now" severity="success" raised /></NuxtLink>
                                </span>
                            </div>
                        </div>
                    </NuxtLink>
                </template>
            </Carousel>
        </div>
    </div>
</template>