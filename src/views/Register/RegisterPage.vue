<template>
    <v-container>
        <ImgComponent
            class="mx-auto"
        />

        <v-row class="text-center mt-4">
            <v-col cols="12">
                <TitleComponent 
                    :header="header"
                />
            </v-col>
        </v-row>


        <v-row :class="{'inverse-smScree': !smAndUp}">

            <v-col 
                cols="12" 
                sm="5"
                class="mt-6 "
                offset-sm="2"
            >
                <FormRegister />
            </v-col>


            <v-col 
                v-for="(item, index) in chosenList" 
                :key="index" 
                cols="12"
                sm="3"
            >
                <ListPlain 
                    :planList="item"
                    enableOverflow
                    :textHeight="512"
                    redirectButtonText="Trocar plano"
                    redirectButtonLink="/planos"
                />
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { usePlanListStore } from "@/stores/PlanListStore";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import ListPlain from "../../components/List/ListPlanComponent.vue";
import FormRegister from "./Partials/FormRegister.vue";
import ImgComponent from "@/components/Img/ImgComponent.vue";
import TitleComponent from "@/components/Title/TitleComponent.vue";
import { ITtile } from "@/Interface/ITitle";
import { useDisplay } from "vuetify/lib/framework.mjs";

const route = useRoute()
const chosenList = ref([])
const planListStore = usePlanListStore()

const header: ITtile = reactive({
    desc: 'Você está muito próximo de mudar a forma de',
    title: 'Hospedar seu site'
})

const {smAndUp} = useDisplay()

onMounted(async () => {
    const id = route.params.id
    const idString = Array.isArray(id) ? id[0] : id
    returnList(idString)
})

function returnList(id: string) {
    const list = planListStore.planList.find((list) => list.id == id)
    chosenList.value.push(list)
}
</script>

<style scoped>

.inverse-smScree {
    flex-direction: column-reverse;
}
</style>