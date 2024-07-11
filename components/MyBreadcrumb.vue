<script setup>

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const props = defineProps([
    'title',
    'items',
    'home'
])

</script>
<template>
    <div>
        <div v-if="laod">
            <Progress />
        </div>
        <div v-if="!load" style="min-height: 300px;
                    max-height: 300px"
            class="w-full rounded-3xl flex flex-col items-center justify-center gap-5 bg-gradient-to-l from-blue-200">
            <h5 class="text-3xl md:text-5xl font-bold">{{ title }}</h5>
            <div class="card flex justify-center">
                <Breadcrumb :home="home" :model="items" class="rounded-xl bg-transparent">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a :href="href" v-bind="props.action" @click="navigate">
                                <span :class="[item.icon, 'text-color']" />
                                <span class="text-primary font-semibold">{{ item.label }}</span>
                            </a>
                        </router-link>
                        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                        </a>
                    </template>
                </Breadcrumb>
            </div>
        </div>
    </div>
</template>
