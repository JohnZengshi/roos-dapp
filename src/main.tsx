/*
 * @LastEditors: John
 * @Date: 2023-12-29 10:31:13
 * @LastEditTime: 2024-03-29 15:09:38
 * @Author: John
 */
/*
 * @LastEditors: John
 * @Date: 2023-12-29 10:31:13
 * @LastEditTime: 2023-12-29 11:46:05
 * @Author: John
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";
import "../app/globals.css";
import "./variable.scss";
import "./variable-m.scss";
import "./custom.scss";
import "./custom-m.scss";
// import "amfe-flexible";
import VConsole from "vconsole";
import { getUrlQueryParam } from "./utils";
import store from "@/store/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// 打开控制台
if (getUrlQueryParam("vconsole") === "1") {
  new VConsole();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
