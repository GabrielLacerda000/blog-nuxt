<script setup>
// definePageMeta({ layout: 'guest' })

</script>

<template>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center py-32">
        <div>
            <h2 class="text-2xl font-semibold mb-6">Welcome to the most <span class="text-sky-600 font-bold text-3xl block">AWSOME</span> posts of all time</h2>
            <div class="p-3 border border-gray-300 rounded-md h-auto shadow-md">
                <form @submit.prevent="login" class="flex flex-col justify-center items-center h-full">
                
                    <div class="block mb-3 p-4">
                        <Input typeInput="email" placeholder="Email" v-model="email"/>
                    </div>
                    <div class="block mb-3 p-4">
                        <Input typeInput="password" placeholder="Password" v-model="password"/>
                    </div>
                    <p>Don't have an account? </p><NuxtLink to="/createUser"class="text-sky-400 hover:underline"> Sign up now</NuxtLink>

                    <button type="submit" class="p-3 text-xl font-medium bg-sky-600 text-white hover:bg-sky-800 transition duration-300 rounded-full w-full mt-5 mb-3 border-none">Login</button>
                </form>
            </div>
        </div>

        <div>
            <img src="/assets/img/like_post.svg" alt="post like">
        </div>
    </div>
</template>