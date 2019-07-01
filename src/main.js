import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HungryBear } from './hungrybear.js';

let bear = new Object;
bear.name = "Fuzzy Wuzzy";

bear.introduction = function() {
  console.log("Name in the outer function: " + this.name);
  let doThis = () => {
    console.log("Name in the inner function: " + this.name);
    return `My name is ${this.name}`
  }
  return doThis()
}
bear.introduction();
