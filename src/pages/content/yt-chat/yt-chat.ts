import { inject, validOrigin } from "@src/utils";
import injectPath from "./yt-chat-inject?script&module";

inject(injectPath);

// chrome.scripting.executeScript({
//   target: { tabId: currentTabId },
//   files: ["content/yt-chat-overrides.inject.js"],
// });

// Re-emit events from wrong origins
window.addEventListener("message", (event) => {
  if (validOrigin(event.origin)) {
    window.postMessage(event.data, "*");
  }
});
