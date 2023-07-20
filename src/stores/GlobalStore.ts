import { defineStore } from "pinia";
import { ref } from "vue";


export const useGlobalStore = defineStore('global', () => {
    const theme = ref('dark')

    function swapTheme() {
        if(theme.value === 'light') {
            theme.value = 'dark'
        }else {
            theme.value = 'light'
        }
    }

    return {
        swapTheme,
        theme
    }
})