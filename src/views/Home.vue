<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import {getRandomFact} from '@/api/historyfacts.api';
const counter = useCounterStore();

// functions that mutate state and trigger updates

// lifecycle hooks
onMounted(() => {
    getRandomFact({randomPrompt: "Tell me someting about the ancient Romans", timePeriod: "ancient rome"});
    console.log(`The initial count is ${counter.count}.`)
    
})
</script>

<template>
    <div class="mt-10   ">
        {{ counter.count }}

        <button @click.prevent="counter.increment" type="button"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            increment
        </button>
    </div>
</template>