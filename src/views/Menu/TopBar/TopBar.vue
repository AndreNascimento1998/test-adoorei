
<template>
        <v-app-bar elevation="1" class="pt-4 pa-2" height="62">
            <v-col cols="8">
            <ImgComponent
            />
            </v-col>
            <v-col>
                <v-menu bottom >
                    <template #activator="{ props }">
                        <v-btn icon v-bind="props">
                            <v-icon size="45px">mdi-account-circle</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item 
                            v-for="(option, i) in options" 
                            :key="i"
                            @click="option.action"
                        >
                        <v-list-item-title 
                        >
                        <v-icon >
                            {{ option.icon }}
                        </v-icon> 
                        {{ option.text }}
                    </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
        </v-app-bar>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import router from "@/router";
import HttpToken from "@/services/factory/Http/HttpToken";
import ImgComponent from "@/components/Img/ImgComponent.vue"
import { useDisplay } from "vuetify/lib/framework.mjs";

const { smAndUp } = useDisplay()

const options = reactive([
    {
        text: 'Sair', 
        icon: 'mdi mdi-logout',
        action: loggout
    }
])


function loggout() {
    debugger
    HttpToken.clearToken()

    router.push('/')
}

</script>

<style scoped>
.margim-left{
    margin-left: ;
}
</style>