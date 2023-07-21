<template>
    <v-badge 
        v-if="props.item.moreUse" 
        content="MAIS USADO" 
        color="green"
        floating
    />
    <br v-else/>
    <v-card>
    <div class="text-center">
        <h2>{{ props.item.title }}</h2>
        <h1 v-if="props.item.tip !== 0" class="mt-2"><span class="mounth">R$</span>{{ props.item.tip }}/<span class="mounth">Mês</span> </h1>
        <h1 v-else class="mt-2">Grátis</h1>
        <span>{{ props.item.desc }}</span>
        <v-divider class="mt-2 mb-2" />
        <section>{{ props.item.desc2 }}</section>
        <v-divider class="mt-2 mb-2" />
    </div>
    <v-btn @click="(() => console.log(props.item))" block variant="outlined">Escolher</v-btn>

    <ListComponent 
        :title="props.item.titleServers"
        :list="props.item.servers"
        :suport="props.item.suport"
    />
    
    <ListComponent 
        :title="props.item.titleApp"
        :list="props.item.appAvaliable"
    />

    <ListComponent 
        v-show="props.item.migration"
        :title="props.item.migrationTitle"
        :list="props.item.migration"
    />

    <ListComponent 
        :title="props.item.titleMore"
        :list="props.item.more"
    />
    </v-card>
</template>

<script setup lang="ts">
import ListComponent from "@/components/ListComponent.vue"
import { IPlainList } from "@/Interface/IPlainList";
import { defineProps } from 'vue';

const props = defineProps({
    item: Object as IPlainList,
})
</script>

<style scoped>
h2{
    color: rgb(71, 67, 67);
}

h1{
    color: #F11A40;
}

.mounth {
    font-size: 20px;
}
</style>