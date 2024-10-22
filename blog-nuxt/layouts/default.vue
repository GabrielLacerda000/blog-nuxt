<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
    <div>
      <header>
        <Navbar />
      </header>

        <slot /> 
    </div>
  </template>