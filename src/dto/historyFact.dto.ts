export interface HistoryFactInterfaceDTO {
    randomPrompt: string;
    timePeriod: string;
}

export default class HistoryFactDTO implements HistoryFactInterfaceDTO {

    randomPrompt: string;
    timePeriod: string;

    constructor(randomPrompt: string, timePeriod: string) {
        this.randomPrompt = randomPrompt;
        this.timePeriod = timePeriod;
    }
}