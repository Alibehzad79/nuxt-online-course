<script setup>

const load = ref(true)

tryOnMounted(() => {
    load.value = false
})
const showPassword = ref(false)

const loginForm = {
    username: '',
    password: '',
}

const loginLoading = ref(false)

const doLogin = () => {
    loginLoading.value = true
    setTimeout(() => {
        return navigateTo('/')
    }, 1000);
}

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex justify-center items-center mt-5 shadow-md rounded-xl">
            <div class="hidden md:flex md:w-1/2">
                <Image src="/Login-pana.png" title="Login Image" alt="Login Image" />
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-between gap-5">
                <h1 class="text-xl md:text-5xl font-bold">SignIn</h1>
                <form @submit.prevent="doLogin" class="flex flex-col gap-5 mt-5">
                    <div>
                        <InputText required id="username" type="text" v-model="loginForm.username" class="w-full"
                            placeholder="Username" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <IconField class="w-full">
                            <InputIcon @click="showPassword = !showPassword"
                                :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'" />
                            <InputText required :type="showPassword ? 'text' : 'password'" v-model="loginForm.password"
                                placeholder="Password" class="w-full" />
                        </IconField>
                        <NuxtLink to="/accounts/reset-password" class="text-blue-500">Forget Password?</NuxtLink>
                    </div>
                    <Button type="submit" class="mt-5" severity="contrast" :loading="loginLoading" outlined
                        label="SignIn" />
                </form>
                <div class="mt-5">
                    <span class="me-2">Don't have a account?</span>
                    <NuxtLink to="/accounts/signup"><Button label="SignUp" severity="info"  /></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>