<script setup>

const load = ref(true)

tryOnMounted(() => {
    load.value = false
})


useSeoMeta({
    title: "Home | Movie On"
})

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: "/"
    },
    {
        label: 'Filmes',
        icon: 'pi pi-video',
        route: "/filmes"
    },
    {
        label: 'Series',
        icon: 'pi pi-desktop',
        route: "/series"
    },
    {
        label: 'About',
        icon: 'pi pi-book',
        route: "/about"
    }
]);
const colorMode = useColorMode()
const toggleColorScheme = () => {
    colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light')
}
</script>

<template>
    <div>
        <div v-if="load" class="items-center flex justify-center mt-5">
            <Progress />
        </div>
        <div v-if="!load" class="mt-2 fixed top-0 left-0 right-0 mx-auto container">
            <Menubar :model="items">
                <template #start>
                    <a href="/">
                        <Avatar image="image.jpg" size="large" class="me-3" shape="circle" />
                    </a>
                </template>
                <template #item="{ item, props, hasSubmenu }">
                    <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                        <NuxtLink v-ripple :href="href" v-bind="props.action" @click="navigate">
                            <span :class="item.icon" />
                            <span class="ml-2">{{ item.label }}</span>
                        </NuxtLink>
                    </RouterLink>
                    <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                    </a>
                </template>
                <template #end>
                    <div class="flex items-center gap-2">
                        <div>
                            <InputText placeholder="Search" type="text" class="w-32 sm:w-auto rounded-e-none" />
                            <Button icon="pi pi-search" severity="success" class="rounded-none rounded-e"
                                aria-label="Search" />
                        </div>
                        <div>
                            <Button icon="pi pi-sun" v-if="colorMode.value=='dark'" @click="toggleColorScheme" severity="secondary"
                                rounded aria-label="light" />
                            <Button icon="pi pi-moon" v-if="colorMode.value=='light'" @click="toggleColorScheme" severity="secondary"
                                rounded aria-label="dark" />
                        </div>
                    </div>
                </template>
            </Menubar>
        </div>
    </div>
</template>