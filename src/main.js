import { test } from "@util";
import { App } from "./App";

console.log(test());

const app = new App();
document.getElementById("root").innerHTML = app.draw();
