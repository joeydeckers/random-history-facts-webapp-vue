<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useOpenAiStore } from '@/stores/openai'
import { getRandomFact } from '@/api/historyfacts.api';
const openAi = useOpenAiStore();

const prompt = ref("");
const timePeriod = ref("");

// lifecycle hooks
onMounted(() => {
    //getRandomFact({randomPrompt: "Tell me someting about the ancient Romans", timePeriod: "ancient rome"});
})

</script>

<template>
    <div class="mt-10   ">
        {{ openAi.result }}



        <form @submit.prevent="openAi.getAiInfoFromApi">
            <div>
                <input class="border-black border-2 mr-5" v-model="openAi.prompt" />
                <input class="border-black border-2" v-model="openAi.timePeriod" />
            </div>

            <button type="submit"
                class="mt-5 inline-flex openAi-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{ openAi.loading ? 'Loading....' : 'Search' }}
            </button>
        </form>
    </div>
</template>