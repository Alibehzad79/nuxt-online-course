<script setup>
const load = ref(true)

tryOnMounted(() => {
    load.value = false
})
const showPassword = ref(false)

const registerForm = {
    username: '',
    password: '',
    rePassword: ''
}

const registerLoading = ref(false)
const error = ref(false)
const doRegister = () => {
    if (registerForm.password !== registerForm.rePassword) {
        error.value = true
    } else {
        registerLoading.value = true
        setTimeout(() => {
            return navigateTo('/accounts/signin')
        }, 1000);
    }
}

</script>

<template>
    <div>
        <div v-if="load">
            <Progress />
        </div>
        <div v-if="!load" class="flex justify-center items-center mt-5 shadow-md rounded-xl">
            <div class="hidden md:flex md:w-1/2">
                <Image src="/sign-up-pana.png" title="Login Image" alt="Login Image" />
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-between gap-5">
                <h1 class="text-xl md:text-5xl font-bold">SignIn</h1>
                <form @submit.prevent="doRegister" class="flex flex-col gap-5 mt-5">
                    <div>
                        <InputText required id="username" type="text" v-model="registerForm.username" class="w-full"
                            placeholder="Username" />
                    </div>
                    <div>
                        <IconField class="w-full">
                            <InputIcon @click="showPassword = !showPassword"
                                :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'" />
                            <InputText :invalid="error" required :type="showPassword ? 'text' : 'password'"
                                v-model="registerForm.password" placeholder="Password" class="w-full" />
                        </IconField>
                    </div>
                    <div>
                        <IconField class="w-full">
                            <InputIcon @click="showPassword = !showPassword"
                                :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'" />
                            <InputText :invalid="error" required :type="showPassword ? 'text' : 'password'"
                                v-model="registerForm.rePassword" placeholder="Confirm Password" class="w-full" />
                        </IconField>
                    </div>
                    <Message severity="error" v-if="error">Passwords is not equal</Message>
                    <Button type="submit" class="mt-5" severity="contrast" :loading="registerLoading" outlined
                        label="SignIn" />
                </form>
                <div class="mt-5">
                    <span class="me-2">Do you have a account?</span>
                    <NuxtLink to="/accounts/signin"><Button label="SignIn" severity="info" text /></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>