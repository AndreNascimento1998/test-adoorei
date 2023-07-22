<template>
    <v-row>
        <v-col cols="12">
            <span class="sm">{{ props.planList.title }}</span>
        </v-col>

        <v-col cols="12" class="py-0">
            <p v-if="props.planList.tip !== 0" class="mt-2 md-h1"><span class="mounth">R$</span>{{ props.planList.tip }}/<span class="mounth">Mês</span> </p>
    
            <h1 v-else class="mt-2 md-h1">Grátis</h1>
        </v-col>

        <v-col cols="12">
            <span style="font-size: 14px;" v-html="props.planList.desc" />
        </v-col>

        <v-divider class="mt-2 mb-2" />

        <v-col cols="12">
            <section style="font-size: 19px;" v-html="props.planList.desc2"></section>
        </v-col>

        <v-divider class="mt-2 mb-2" />
    </v-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    planList: Object
})
</script>

<style scoped>
.sm{
    font-size: 28px;
    color: rgb(71, 67, 67);
}

.md-h1{
    font-size: 32px;
    font-weight: bold;
    color: #F11A40;
}

.md-mounth {
    font-size: 11px;
}

.desc {
    font-size: 16px;
}
</style>