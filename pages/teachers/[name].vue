<script setup>
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const route = useRoute()
const home = ref({
    icon: 'pi pi-home',
    route: '/',
});
const items = ref([
    { label: "Teacher", route: "#" }
])

const teacher = route.params.name.toUpperCase().replaceAll('-', ' ')

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load">
            <MyBreadcrumb :items="items" :home="home" :title="teacher" />
            <div class="shadow-2xl rounded-xl p-10 flex flex-col md:flex-row gap-5 mt-5">
                <Image src="/teacher.jpg" class="w-full md:w-1/2" preview :alt="teacher" :title="teacher" />
                <div class="flex flex-col gap-1 w-full md:w-1/2">
                    <div class="flex flex-col gap-1">
                        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">{{ teacher }}</h1>
                        <span class="font-mono text-blue-500">Python Developer</span>
                    </div>
                    <Divider />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores repellendus obcaecati!
                        Animi, rem libero adipisci ipsa minus ipsam cumque laudantium officiis consequatur. Vel
                        repellendus eligendi quia facilis doloribus ad!</p>
                    <div class="mt-5 flex flex-col gap-2">
                        <span><i class="pi pi-envelope me-2"></i>testmail@mail.com</span>
                        <span><i class="pi pi-phone me-2"></i>+98 9143333333</span>
                    </div>
                    <div class="flex flex-wrap mt-5 gap-2">
                        <NuxtLink to="#">
                            <Button icon="pi pi-instagram" severity="danger" size="large" text aria-label="Instagram" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <Button icon="pi pi-telegram" severity="info" size="large" text aria-label="Telegram" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <Button icon="pi pi-twitter" class="text-black" size="large" text aria-label="Twitter" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <Button icon="pi pi-facebook" severity="info" size="large" text aria-label="Facebooks" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>