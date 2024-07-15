<script setup>
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const home = {
    icon: 'pi pi-home',
    route: '/',
    label: "Go Home"
}

const btnLoading = ref(false)
const showConfirm = ref(false)
const restPassword = () => {
    btnLoading.value = true
    setTimeout(() => {
        showConfirm.value = true
        btnLoading.value = false
    }, 1000);
}

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex flex-col gap-5">
            <MyBreadcrumb title="Rest Passwords" :home="home" />
            <div class="md:w-1/2 mx-auto flex flex-col gap-5">
                <form @submit.prevent="restPassword" class="flex flex-col justify-center gap-5">
                    <InputText type="email" placeholder="Email" required />
                    <Button label="Rest" type="submit" :loading="btnLoading" />
                </form>
                <Message v-if="showConfirm" severity="success">We Sent Change Password URL to your Email, Please Confirm
                </Message>
                <NuxtLink v-if="showConfirm" to="/accounts/confirm-password"><Button label="Go To Confirm Page"
                        severity="warn" outlined /></NuxtLink>
            </div>
        </div>
    </div>
</template>