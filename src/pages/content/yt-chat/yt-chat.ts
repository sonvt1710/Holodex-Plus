import { inject, validOrigin } from "@src/utils";

inject("content/yt-chat-overrides.inject.js");

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
