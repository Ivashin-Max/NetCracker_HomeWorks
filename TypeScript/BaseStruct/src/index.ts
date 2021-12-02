import { Duck } from "./duck.js";
import { Fish } from "./fish.js";

const fish: Fish = new Fish();
const duck: Duck = new Duck();

function doSwim(fishArg: Fish): void {
    fishArg.swim();
}

doSwim(fish);
doSwim(duck);
doSwim({
    swim(): void {
        console.log("ololo");
    }
});
