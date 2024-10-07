export default defineNuxtRouteMiddleware( () => {

    const autheticated = false

    if (!autheticated) {
        return navigateTo('/', {replace: true})
    }

})