<template>
    <h3>{{ props.item.title }}</h3>
    <h2 v-if="props.item.tip !== 0" class="mt-2">R${{ props.item.tip }}/<span>Mês</span> </h2>
    <h2 v-else class="mt-2">Grátis</h2>
    <span>{{ props.item.desc }}</span>
    <v-divider class="mt-2 mb-2" />
    <section>{{ props.item.desc2 }}</section>
    <v-divider class="mt-2 mb-2" />
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
</template>

<script setup lang="ts">
import ListComponent from "@/components/ListComponent.vue"
import { IPlainList } from "@/Interface/IPlainList";
import { defineProps } from 'vue';

const props = defineProps({
    item: Object as IPlainList,
})
</script>