import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { useMyContext } from "pkg-b";

function MyComponent() {
  useMyContext();
  return "Hi from component";
}

console.log(renderToString(createElement(MyComponent, {}, null)));
