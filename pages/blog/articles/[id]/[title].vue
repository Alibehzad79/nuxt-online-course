<script setup>

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const route = useRoute()
const toast = useToast();

const { data: article, pending, error } = await useFetch(`https://freetestapi.com/api/v1/posts/${route.params.id}`)
const { data: comments, pending: cPending, refresh: cRefresh, error: cError } = await useFetch(`https://jsonplaceholder.typicode.com//posts/${route.params.id}/comments`, { lazy: true })

const home = ref({
    icon: 'pi pi-home',
    route: '/',
    label: "Home"
});
const subEmail = ref('')
const search = ref('')
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btnLoading = ref(false)
const subLoading = ref(false)
const formData = ref({
    fName: "",
    lName: "",
    email: "",
    comment: "",
})
const commentLoading = ref(false)


const getSearch = () => {
    if (search.value) {
        btnLoading.value = true
        return navigateTo('/search/' + search.value.replaceAll(' ', '-'))
    }
}

const getSub = () => {
    if (subEmail.value.match(mailformat)) {
        subLoading.value = true
        // do sub
        setTimeout(() => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'Subscribed', life: 3000 })
            subLoading.value = false
        }, 1000);
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Somthing Wrang! please try again.', life: 3000 })
    }
}

const getAuthor = (author) => {
    return navigateTo('/teachers/' + author)
}


const sendComment = async () => {
    if (formData) {
        if (!formData.value.email.match(mailformat)) {
            toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please enter a valid email', life: 3000 })
        } else {
            commentLoading.value = true
            const { status } = await useFetch('https://jsonplaceholder.typicode.com/comments', {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            if (status.value === 'success') {
                toast.add({ severity: 'success', summary: 'Success', detail: 'Comment Send Successfuly', life: 3000 })
                formData.value = {
                    fName: "",
                    lName: "",
                    email: "",
                    comment: "",
                }
                cRefresh()
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to sending comment', life: 3000 })
            }
            commentLoading.value = false
        }
    }
}

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <Toast sticky />
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
                <div class="w-full lg:w-4/5 p-5 flex flex-col gap-5">
                    <Image src="/course.jpg" width="100%" />
                    <div>
                        {{ article.content }}
                    </div>
                    <div class="flex flex-col gap-2">
                        <h5 class="font-bold text-xl">Share in:</h5>
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
                    <div class="flex flex-col gap-5 bg[#fdfcff] mt-5">
                        <div>
                            <span class="font-bold text-xl">About Author</span>
                            <Divider />
                        </div>
                        <div class="flex gap-5 cursor-pointer" @click="getAuthor(article.author.replaceAll(' ', '-'))">
                            <Avatar image="/image.jpg" class="mr-2 min-w-20 min-h-20" size="xlarge" shape="circle" />
                            <div>
                                <strong>{{ article.author }} <i class="pi pi-link"></i></strong>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi libero, quisquam
                                    officia accusamus porro. Commodi minus cumque saepe ea quidem sequi ab eius
                                    repellendus! Tempore dignissimos voluptate cumque magni?</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5 mt-5">
                        <h6 class="font-bold text-xl">Write a Comment <i class="pi pi-comment"></i></h6>
                        <form class="flex flex-col gap-5" @submit.prevent="sendComment">
                            <div class="flex flex-col md:flex-row justify-between gap-5">
                                <InputText v-model="formData.fName" type="text" placeholder="Name" class="w-full"
                                    size="large" required />
                                <InputText v-model="formData.lName" type="text" placeholder="Name" class="w-full"
                                    size="large" required />
                            </div>
                            <InputText v-model="formData.email" type="email" size="large" placeholder="E-mail"
                                class="w-full" required />
                            <Textarea v-model="formData.comment" placeholder="Your Comment" rows="5" cols="30"
                                required />
                            <Button type="submit" label="Send" :loading="commentLoading" severity="info" />
                        </form>

                    </div>
                    <div class="flex flex-col gap-5 bg[#fdfcff] mt-5">
                        <div>
                            <span class="font-bold text-xl">Comments <i class="pi pi-comments"></i></span>
                            <Divider />
                        </div>
                        <div v-if="cPending">
                            <Progress />
                        </div>
                        <div v-if="cError" class="mt-5 text-center flex flex-col items-center gap-5">
                            <Message severity="error">Error {{ cError.statusCode }}</Message>
                            <Button type="button" severity="contrast" label="Refresh Data" @click="cRefresh" />
                        </div>
                        <div class="flex gap-5 cursor-pointer border p-5 rounded-xl" v-for="comment in comments"
                            :key="comment.id">
                            <Avatar :label="comment.name[0]" class="mr-2 min-w-20 min-h-20" size="xlarge"
                                shape="circle" />
                            <div>
                                <strong>{{ comment.name }}</strong>
                                <p>{{ comment.body }}</p>
                            </div>
                        </div>
                    </div>
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
                        <form method="post" @submit.prevent="getSub" class="flex flex-col gap-5">
                            <InputText type="email" required="true" size="large" placeholder="Email" v-model="subEmail"
                                class="" />
                            <Button type="submit" label="Subscribe" severity="info" class="rounded-full"
                                :loading="subLoading" :disabled="subEmail.value != null" size="large" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>