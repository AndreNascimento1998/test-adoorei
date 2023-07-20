<template>
    <v-container >
        <ImgComponent
            class="mx-auto"
        />
        <v-row>
            <v-col cols="12">
                <section>Você está muito próximo de mudar  a forma de</section>
                <p>hospedar seu site</p>
                <span>Escolha seu plano</span>
            </v-col>
            <v-col cols="2" offset="5">
                <v-btn >
                    Mais usado
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="(item, index) in lists" :key="index" cols="4" class="text-center">
                <ListPlain 
                    :item="item"
                />
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import ImgComponent from "@/components/ImgComponent.vue"
import ListPlain from "./Partials/ListPlain.vue";
import { usePlanListStore } from "@/stores/PlanListStore"
import { computed, ComputedRef } from "vue"
import { IPlainList } from "../../Interface/IPlainList";


const planListStore = usePlanListStore()

const lists: ComputedRef<Array<IPlainList>> = computed(() => planListStore.planList)

</script>

<style scoped>
h3 {
    font-style: italic;
}

h2 {
    color: #F11A40;
}

span {
    font-size: 12px;
}
</style>