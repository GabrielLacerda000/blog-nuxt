export default defineNuxtRouteMiddleware( () => {

    const autheticated = false

    if (autheticated) {
        return navigateTo('/posts', {replace: true})
    }

})