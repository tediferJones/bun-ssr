import {
Layout
} from "../chunk-c52e9b6c4ba6bb89.js";
import {
__toESM,
require_jsx_dev_runtime
} from "../chunk-63abc4cc02303101.js";

// pagesmodules/scheduler/cjs
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Greeter({ username }) {
  return jsx_dev_runtime.jsxDEV("div", {
    className: "flex justify-center p-8 m-2 bg-purple-400 text-2xl text-white font-bold",
    children: jsx_dev_runtime.jsxDEV("h1", {
      children: [
        "Hello, ",
        username
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}

// pagesmodules/schedu
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function index() {
  return jsx_dev_runtime2.jsxDEV(Layout, {
    title: "Welcome",
    children: [
      jsx_dev_runtime2.jsxDEV("h1", {
        children: "THE REAL HOME PAGE"
      }, undefined, false, undefined, this),
      jsx_dev_runtime2.jsxDEV(Greeter, {
        username: "TIMMY"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
export {
  index as default
};