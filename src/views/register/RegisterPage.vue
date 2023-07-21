<template>
    <v-container >
        <ImgComponent
            class="mx-auto "
        />
        <v-row class="text-center mt-4">
            <v-col cols="12">
                <HeaderPlain 
                    :header="header"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col 
            v-for="(item, index) in listsHeaderPlain" 
                :key="index" 
                cols="12"
                sm="4"
                class=" mt-4"
            >
                <ListPlain 
                    :item="item"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import ImgComponent from "@/components/ImgComponent.vue"
import HeaderPlain from "./Partials/HeaderPlain.vue";
import ListPlain from "./Partials/ListPlain.vue";
import { usePlanListStore } from "@/stores/PlanListStore"
import { computed, ComputedRef } from "vue"
import { IPlainList } from "../../Interface/IPlainList";

const planListStore = usePlanListStore()

const header = computed(() => planListStore.header)
const listsHeaderPlain: ComputedRef<Array<IPlainList>> = computed(() => planListStore.planList)

</script>

<style scoped>

</style>