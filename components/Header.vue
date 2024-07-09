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
        label: 'Courses',
        icon: 'pi pi-video',
        route: "/courses"
    },
    {
        label: 'Blog',
        icon: 'pi pi-book',
        route: "/blog/articles"
    },
    {
        label: 'About',
        icon: 'pi pi-th-large',
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
        <div v-if="!load" class="mt-2 fixed top-0 left-0 right-0 mx-auto container z-50 w-96">
            <Menubar :model="items">
                <template #start>
                    <a href="/">
                        <NuxtImg src="/logo.png" class="me-5 bg-white rounded p-5" />
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
                        <div class="flex gap-3">
                            <NuxtLink to="">
                                <Button label="SignIn" severity="info" text />
                            </NuxtLink>
                            <NuxtLink to="">
                                <Button label="SignUp" severity="info" />
                            </NuxtLink>
                        </div>
                        <div>
                            <Button icon="pi pi-sun" v-if="colorMode.value == 'dark'" @click="toggleColorScheme"
                                severity="secondary" rounded aria-label="light" />
                            <Button icon="pi pi-moon" v-if="colorMode.value == 'light'" @click="toggleColorScheme"
                                severity="secondary" rounded aria-label="dark" />
                        </div>
                    </div>
                </template>
            </Menubar>
        </div>
    </div>
</template>