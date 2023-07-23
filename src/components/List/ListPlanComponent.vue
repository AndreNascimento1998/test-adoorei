<template>
    <v-row v-if="props.planList.moreUse && !route.params.id" class="text-center">
        <v-col cols="10">
            <v-badge  
                content="MAIS USADO" 
                color="green"
                floating
            />        
        </v-col>
    </v-row>
    <br  v-else />

    <v-row v-show="route.params.id" class="text-center">
        <v-col cols="8">
            <v-badge 
                content="PLANO ESCOLHIDO" 
                color="black"
                floating
            />
            
        </v-col>
    </v-row>

    <v-card 
        :height="props.height ? props.height : ''"
        elevation="0"
        
    >
        <div class="text-center ">
            <ListPlanHeader 
                :planList="props.planList"
            />
        </div>
        <v-col>
            <v-btn
                v-show="!route.params.id"
                @click="(() => nextPageRegister(props.planList.id))" 
                block 
                variant="outlined"
            >
                Escolher esse plano
            </v-btn>
        </v-col>

        <v-card-text 
            class="content-height pa-0" 
            :class="{'width-gradient': enableOverflow }" 
            :style="{ maxHeight: textHeight + 'px'}"
        >

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
        </v-card-text >            

        <v-card-actions v-if="redirectButtonLink">
                <v-btn 
                    @click="router.push(`${redirectButtonLink}`)"
                    block
                    class="mt-2 mb-2"
                    variant="outlined"
                >
                    {{redirectButtonText}}
                </v-btn>
            
        </v-card-actions>
    </v-card>
        
</template>

<script setup lang="ts">
import ListComponent from "@/components/List/Partials/ListComponent.vue"
import { IPlainList } from "@/Interface/IPlainList";
import ListPlanHeader from "./Partials/ListPlanHeader.vue";
import router from "@/router";
import { defineProps } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute()

const props = defineProps({
    planList: Object<IPlainList>,
    textHeight: Number,
    enableOverflow: Boolean,
    redirectButtonText: String,
    redirectButtonLink: String
})

function nextPageRegister(id: number) {
    router.push(`/cadastro/${id}`)
}
</script>

<style scoped>

.width-gradient{
    -webkit-mask-image: linear-gradient(
        #fff, #fff,
        rgba(255, 255, 255, 0)
    );
}

.content-height {
    overflow: hidden;
    position: relative;
    width: 100%;
}
</style>