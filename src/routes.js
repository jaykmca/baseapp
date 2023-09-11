import {createRouter, createWebHistory} from 'vue-router'
const routes =[
    {
        path:'/appone',
        redirect:'/appone/index.html'
        // redirect: () => {
        //     // Programmatically determine the base URL based on the current URL
        //     const baseUrl = window.location.origin;
        //     // Redirect to the absolute URL outside of the Base App directory
        //     window.location.href = `${baseUrl}/appone/index.html`;
        //   },
    },
    {
         path: '/apptwo',
         redirect:'/apptwo/index.html'
    }

]

const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router