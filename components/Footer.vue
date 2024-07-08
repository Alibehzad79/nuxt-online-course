<script setup>

const load = ref(true)

tryOnMounted(() => {
    load.value = false
})

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <footer v-if="!load" class="mx-auto p-20 shadow mb-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-20">
                <div class="flex flex-col gap-5">
                    <a href="/">
                        <NuxtImg src="/logo.png" class="me-5 bg-white rounded p-5" />
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptate est ea, sit hic voluptates
                        cupiditate facilis. Doloremque, sequi est.</p>
                    <div class="flex flex-wrap gap-2 w-full">
                        <NuxtLink to="#">
                            <Button icon="pi pi-instagram" severity="danger" text raised aria-label="Filter" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <Button icon="pi pi-telegram" severity="danger" text raised aria-label="telegram" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <Button icon="pi pi-youtube" severity="danger" text raised aria-label="youtube" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <Button icon="pi pi-facebook" severity="danger" text raised aria-label="facebook" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <Button icon="pi pi-whatsapp" severity="danger" text raised aria-label="whatsapp" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <h6 class="font-bold text-2xl">Popular Courses</h6>
                    <div class="flex flex-col gap-3">
                        <NuxtLink to="#" class="p-2">Programming</NuxtLink>
                        <NuxtLink to="#" class="p-2">Photography</NuxtLink>
                        <NuxtLink to="#" class="p-2">Fron-End</NuxtLink>
                        <NuxtLink to="#" class="p-2">Back-end</NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <h6 class="font-bold text-2xl">Contact Us</h6>
                    <div class="flex flex-col gap-3">
                        <div class="flex gap-2 items-center"><span class="pi pi-map"></span>
                            <address>Azerbaijan - Ardabil</address>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="flex gap-2 items-center"><span class="pi pi-phone"></span>
                            <span>+98 9111111111</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="flex gap-2 items-center"><span class="pi pi-email"></span>
                            <span>alibehzad@duck.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>