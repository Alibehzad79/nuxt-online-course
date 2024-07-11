<script setup>
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})
const value = 4

const goToCourse = (id, title) => {
    setTimeout(() => {
        return navigateTo('/courses/' + id + '/' + title.replaceAll(' ', '-'))
    }, 100);
}

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5 shadow-2xl p-5 rounded-xl">
            <h1 class="font-bold text-xl">Related Courses</h1>
            <div class="flex flex-col gap-5">
                <div class="flex gap-2 border-b p-5 items-center cursor-pointer" @click="goToCourse(2, 'ui-design')">
                    <Image src="/course.jpg" alt="Image" width="150" />
                    <div class="flex flex-col gap-2">
                        <Rating v-model="value" :stars="5" readonly />
                        <h4 class="font-bold text-xl overflow-hidden max-w-40">UI Design</h4>
                        <span class="font-bold text-[#525fe1] text-xl ">$42</span>
                    </div>
                </div>
                <div class="flex gap-2 border-b p-5 items-center cursor-pointer" @click="goToCourse(3, 'front-end')">
                    <Image src="/course.jpg" alt="Image" width="150" />
                    <div class="flex flex-col gap-2">
                        <Rating v-model="value" :stars="5" readonly />
                        <h4 class="font-bold text-xl overflow-hidden max-w-40">Fron-end</h4>
                        <span class="font-bold text-[#525fe1] text-xl ">$42</span>
                    </div>
                </div>
                <div class="flex gap-2 border-b p-5 items-center cursor-pointer" @click="goToCourse(4, 'back-end')">
                    <Image src="/course.jpg" alt="Image" width="150" />
                    <div class="flex flex-col gap-2">
                        <Rating v-model="value" :stars="5" readonly />
                        <h4 class="font-bold text-xl overflow-hidden max-w-40">Back-end</h4>
                        <span class="font-bold text-[#525fe1] text-xl ">$42</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>