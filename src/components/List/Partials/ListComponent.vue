<template>
    <v-list 
        lines="one" 
        density="comfortable" 
        class="pa-0" 
        rounded
    >
        <h4 style="font-style: italic;" class="px-4 py-1" v-html="title"></h4>
        <v-list-item 
            v-for="(item, index) in props.list" 
            :key="index"
            prepend-icon="mdi-check"
        >
            {{ item }}
        </v-list-item>
        <h4 
            v-show="props.suport?.length" 
            class="mt-4 px-5"
        >
            {{ props.suport }}
        </h4>
    </v-list>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    list: Array,
    suport: String
})

</script>
