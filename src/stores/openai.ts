import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getRandomFact} from '@/api/historyfacts.api';

export const useOpenAiStore = defineStore('openAi', {
  state: () => {
    return {
      prompt : "" as string,
      timePeriod: "" as string,
      result: "" as string,
      loading: false as boolean
    }
  },
  actions: {
    async getAiInfoFromApi() {
      this.loading = true;
      const response = await getRandomFact({randomPrompt: this.prompt, timePeriod: this.timePeriod});
      console.log(response);
      this.result = response.choices;
      this.loading = false;
    }
  }
})