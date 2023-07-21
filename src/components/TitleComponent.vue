<template>
    <section class="desc">{{ props.header.desc }}</section>
        <p class="title">{{ props.header.title }}</p>
        <p class="mt-4 mb-4">{{ props.header.choosePlan }}</p>
</template>

<script setup lang="ts">
import { ITitle } from '@/Interface/ITitle';
import { defineProps } from 'vue';

const props: ITitle = defineProps({
    header: Object,
})

</script>

<style scoped>
.desc {
    font-weight: bold;
    font-size: 28px;
}

.title {
    font-size: 28px;
    color: #F11A40;
    font-weight: bold;
    text-decoration: underline;
}

</style>