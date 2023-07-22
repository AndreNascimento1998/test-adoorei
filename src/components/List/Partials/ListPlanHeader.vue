<template>
    <span class="sm">{{ props.planList.title }}</span>
    <p v-if="props.planList.tip !== 0" class="mt-2 mb-2 md-h1"><span class="mounth">R$</span>{{ props.planList.tip }}/<span class="mounth">Mês</span> </p>
    <h1 v-else class="mt-2 mb-2 md-h1">Grátis</h1>
    <span class="desc">{{ props.planList.desc }}</span>
    <v-divider class="mt-2 mb-2" />
    <section class="desc">{{ props.planList.desc2 }}</section>
    <v-divider class="mt-2 mb-2" />
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