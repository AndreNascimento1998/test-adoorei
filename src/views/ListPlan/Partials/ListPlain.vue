<template>
    <v-badge 
        v-if="props.planList.moreUse" 
        content="MAIS USADO" 
        color="green"
        floating
    />
    <br v-else/>
    <v-card>
    <div class="text-center">
        <ListPlanHeader 
            :planList="props.planList"
        />
    </div>
    <v-btn 
        @click="(() => nextPageRegister(props.planList.id))" 
        block variant="outlined"
    >
        Escolher
    </v-btn>

    <ListComponent 
        :title="props.planList.titleServers"
        :list="props.planList.servers"
        :suport="props.planList.suport"
    />
    
    <ListComponent 
        :title="props.planList.titleApp"
        :list="props.planList.appAvaliable"
    />

    <ListComponent 
        v-show="props.planList.migration"
        :title="props.planList.migrationTitle"
        :list="props.planList.migration"
    />

    <ListComponent 
        :title="props.planList.titleMore"
        :list="props.planList.more"
    />
    </v-card>
</template>

<script setup lang="ts">
import ListComponent from "@/components/ListComponent.vue"
import { IPlainList } from "@/Interface/IPlainList";
import ListPlanHeader from "./PartialsListPlan.vue/ListPlanHeader.vue";
import router from "@/router";
import { defineProps } from 'vue';

const props = defineProps({
    planList: Object as IPlainList,
})

function nextPageRegister(id: number) {
    router.push(`/cadastro/${id}`)
}
</script>

<style scoped>

</style>