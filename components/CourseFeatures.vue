<script setup>
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const props = defineProps([
    'courseLength',
    'videoCount',
    'studentsCount',
    'haveCertification',
    'price'
])

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <div class="text-center p-5 bg-[#525fe1] rounded-t-xl">
                <h5 class="text-white font-bold text-2xl">Course Features</h5>
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex justify-between items-center">
                    <div class="flex gap-2 items-center">
                        <span class="pi pi-calendar"></span>
                        <span>Course Length</span>
                    </div>
                    <span class="p-2 bg-[#525fe1] text-white rounded-lg">{{ courseLength }} Day's</span>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-2 items-center">
                        <span class="pi pi-video"></span>
                        <span>Video Count</span>
                    </div>
                    <span class="p-2 bg-[#525fe1] text-white rounded-lg">{{ videoCount }} Video</span>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-2 items-center">
                        <span class="pi pi-user"></span>
                        <span>Student Count</span>
                    </div>
                    <span class="p-2 bg-[#525fe1] text-white rounded-lg">{{ studentsCount }} Student</span>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-2 items-center">
                        <span class="pi pi-trophy"></span>
                        <span>Have Certification</span>
                    </div>
                    <span class="p-2 bg-[#525fe1] text-white rounded-lg">{{ haveCertification }}</span>
                </div>
            </div>
            <Button :label="`Price: $${price}`" text class="bg-[#525fe1] text-white" size="large" />
            <Button label="Buy Now" text class="bg-[#525fe1] text-white rounded-none" size="large" />
        </div>
    </div>
</template>