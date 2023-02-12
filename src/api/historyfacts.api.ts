import type HistoryFactDTO from "@/dto/historyFact.dto";
import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:3000/"
});

export async function getRandomFact(historyFactRequest: HistoryFactDTO) {
    try{
        const {data} = await axiosClient.get(`open-ai/?randomPrompt=${historyFactRequest.randomPrompt}/timePeriod=${historyFactRequest.timePeriod}`);
        return data;
    }catch(error){
        console.log(error)
    }
}