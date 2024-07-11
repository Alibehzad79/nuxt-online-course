<script setup>

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const route = useRoute()

const home = ref({
    icon: 'pi pi-home',
    route: '/',
    label: "Home"
});

const { data: article, pending, error } = await useFetch(`https://freetestapi.com/api/v1/posts/${route.params.id}`)
const subEmail = ref('')
const search = ref('')
const btnLoading = ref(false)
const getSearch = () => {
    if (search.value) {
        btnLoading.value = true
        return navigateTo('/search/' + search.value.replaceAll(' ', '-'))
    }
}
const subLoading = ref(false)
const getSub = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (subEmail.value.match(mailformat)) {
        subLoading.value = true
        // do sub
        setTimeout(() => {
            subLoading.value = false
        }, 1000);
    }
}

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <MyBreadcrumb :title="article.title" :home="home" />
            <div class="flex flex-col lg:flex-row gap-5">
                <div v-if="pending">
                    <Progress />
                </div>
                <div v-if="error" class="mt-5 text-center flex flex-col items-center gap-5">
                    <Message severity="error">Error {{ error.statusCode }}</Message>
                    <Button type="button" severity="contrast" label="Refresh Data" icon="pi pi-refresh"
                        :loading="isRefresh" @click="refreshCourse" />
                </div>
                <div class="w-full lg:w-2/5 flex flex-col gap-5">
                    <div class="w-full flex p-5">
                        <InputText class="w-full rounded-none" type="text" v-model="search" placeholder="Search..."
                            size="large" />
                        <Button @click="getSearch" type="button" icon="pi pi-search" severity="info"
                            class="rounded-none" :loading="btnLoading" :disabled="search.value != null" size="large" />
                    </div>
                    <div class="bg-red-500 text-white p-5 flex flex-col gap-5 rounded-xl">
                        <h5 class="font-bold text-xl">Subscribe Notifications</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur eaque atque quos fugiat
                            ducimus facilis accusantium, temporibus dolorum officiis. Similique voluptatum est animi,
                            amet aut vel consequatur tempora odit!</p>
                        <InputText type="email" size="large" placeholder="Email" v-model="subEmail" class="" />
                        <Button @click="getSub" type="button" label="Subscribe" severity="info" class="rounded-full"
                            :loading="subLoading" :disabled="subEmail.value != null" size="large" />
                    </div>
                </div>
                <div class="w-full lg:w-4/5 p-5 flex flex-col gap-5">
                    <Image src="/course.jpg" width="100%" />
                    <div>
                        {{ article.content }}
                    </div>
                    <div class="flex flex-col gap-2">
                        <h5 class="font-bold text-2xl">Share in:</h5>
                        <div class="flex felx-wrap gap-2">
                            <NuxtLink to="#">
                                <Button label="Telegram" icon="pi pi-telegram" severity="secondary"
                                    class="bg-blue-500 text-white" />
                            </NuxtLink>
                            <NuxtLink to="#">
                                <Button label="Instagram" icon="pi pi-instagram" severity="secondary"
                                    class="bg-pink-500 text-white" />
                            </NuxtLink>
                            <NuxtLink to="#">
                                <Button label="Facebook" icon="pi pi-facebook" severity="secondary"
                                    class="bg-blue-500 text-white" />
                            </NuxtLink>
                            <NuxtLink to="#">
                                <Button label="Whatsapp" icon="pi pi-whatsapp" severity="secondary"
                                    class="bg-green-500 text-white" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>