import type HistoryFactDTO from "@/dto/historyFact.dto";
import axios from "axios";

const axiosClient = axios.create({
    baseURL: "url"
});

export async function getRandomFact(historyFactRequest: HistoryFactDTO) {
    try{
        const {data} = await axiosClient.get("/randomHistoryFact");
        return data;
    }catch(error){
        console.log(error)
    }
}