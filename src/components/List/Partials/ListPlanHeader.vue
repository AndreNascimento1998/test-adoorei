<template>
    <h2>{{ props.planList.title }}</h2>
    <h1 v-if="props.planList.tip !== 0" class="mt-2"><span class="mounth">R$</span>{{ props.planList.tip }}/<span class="mounth">Mês</span> </h1>
    <h1 v-else class="mt-2">Grátis</h1>
    <span>{{ props.planList.desc }}</span>
    <v-divider class="mt-2 mb-2" />
    <section>{{ props.planList.desc2 }}</section>
    <v-divider class="mt-2 mb-2" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    planList: Object
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