<template>
    <v-container >
        <ImgComponent
            class="mx-auto "
        />
        <v-row class="text-center mt-4">
            <v-col cols="12">
                <TitleComponent 
                    :header="header"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col 
                v-for="(item, index) in planList" 
                :key="index" 
                cols="12"
                sm="4"
                class=" mt-4"
            >
                <ListPlan 
                    :planList="item"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import ImgComponent from "@/components/Img/ImgComponent.vue"
import TitleComponent from "../../components/Title/TitleComponent.vue";
import ListPlan from "../../components/List/ListPlanComponent.vue";
import { usePlanListStore } from "@/stores/PlanListStore"
import { computed, ComputedRef, reactive } from "vue"
import { IPlainList } from "../../Interface/IPlainList";
import { ITtile } from "@/Interface/ITitle";

const planListStore = usePlanListStore()
const header: ITtile = reactive({
    title: 'hospedar seu site',
    desc: 'Você está muito próximo de mudar a forma de',
    choosePlan: 'Escolha seu plano'
})

const planList: ComputedRef<Array<IPlainList>> = computed(() => planListStore.planList)

</script>

<style scoped>

</style>