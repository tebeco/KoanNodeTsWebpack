declare var TOGGLE_FEATURE_A: boolean;
import { ducker } from './deadcode/not-so-dead';

const duckMe = ducker();
console.log(duckMe.please());

if (TOGGLE_FEATURE_A) {
  console.log("Coin !");
}
