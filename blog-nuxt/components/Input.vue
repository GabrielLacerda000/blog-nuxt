<script setup>
defineProps({
    typeInput: {
        type: String,
        required: true
    },
})
</script>

<template>
    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg block w-full p-3 h-full" :type="typeInput">
</template>