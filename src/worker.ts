import {heavyCalculation} from "./utils";

onmessage = async (e) => {
    const result = await heavyCalculation(e.data);
    self.postMessage(result);
}