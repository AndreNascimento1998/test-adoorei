import { defineStore } from "pinia";
import { ref } from "vue";


export const useGlobalStore = defineStore('global', () => {
    const theme = ref('light')

    const loadingPage = ref(false)

    function swapTheme() {
        if(theme.value === 'light') {
            theme.value = 'dark'
        }else {
            theme.value = 'light'
        }
    }

    return {
        swapTheme,
        theme,
        loadingPage
    }
})