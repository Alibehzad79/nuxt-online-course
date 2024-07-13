<script setup>

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

useSeoMeta({
    title: "About",
    description: "About of Online Course",
    keywords: "test, test2",
})


const home = ref({
    icon: 'pi pi-home',
    route: '/',
});
const items = ref([
    { label: "About", route: "/about" }
])



const { data: galleries, pending, error } = await useFetch('https://picsum.photos/v2/list?page=2&limit=30', { lazy: true })


</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <MyBreadcrumb title="About Us" :home="home" :items="items" />
            <div class="flex flex-col gap-5 items-center my-5">
                <div class="items-center flex flex-col gap-3 md:w-1/2">
                    <h1 class="font-bold text-3xl md:text-4xl">Learning with US</h1>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi
                        quibusdam deleniti alias id
                        consequatur voluptate eaque exercitationem quam, sint iste consectetur dignissimos laudantium
                        maiores atque voluptatum autem ratione neque?</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                        <MiniCard title="Expert Teacher" icon="pi pi-check"
                            subtitle="Lorem ipsum dolor sit amet asdasd" />
                        <MiniCard title="Quality Learning" icon="pi pi-check"
                            subtitle="Lorem ipsum dolor sit amet asdasd" />
                        <MiniCard title="Garanting" icon="pi pi-check" subtitle="Lorem ipsum dolor sit amet asdasd" />
                        <MiniCard title="Remot Learning" icon="pi pi-check"
                            subtitle="Lorem ipsum dolor sit amet asdasd" />
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolor sint ea eaque dolorum qui
                        ipsam, optio corporis beatae! Veritatis numquam placeat laudantium aliquam soluta fuga?
                        Consequuntur labore dolorem temporibus. Inventore hic eveniet veniam facere culpa officiis
                        voluptatibus vero explicabo pariatur? Maiores molestiae dolorum ea at eius, delectus quasi
                        tempore aperiam, voluptatibus, similique impedit molestias. Beatae vel vitae adipisci accusamus
                        odit quas odio tempora, officiis ducimus neque possimus iste qui laborum nobis provident
                        inventore eos minima quo saepe nihil velit mollitia! Aspernatur, quae, sequi repudiandae porro
                        corrupti, delectus explicabo debitis adipisci excepturi minima ullam? Id odit libero aut enim,
                        fuga sapiente necessitatibus assumenda molestiae rem repudiandae tempore numquam voluptatem
                        rerum esse ex harum impedit cupiditate dolore nostrum atque repellat tenetur? Ab tenetur, nisi
                        quae sed dolorum reiciendis? Qui</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                        <div v-if="pending">
                            <Progress />
                        </div>
                        <div v-if="error">
                            <Message severity="error" class="w-96">Error Message</Message>
                        </div>
                        <Image v-for="image in galleries" :key="image.id" :src="image.download_url"
                            :title="image.author" :alt="image.author" preview />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>