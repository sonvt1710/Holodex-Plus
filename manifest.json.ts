import type { ManifestV3Export } from "@crxjs/vite-plugin";

const manifest: Omit<ManifestV3Export, "version"> = {
  manifest_version: 3,
  name: "Holodex Plus",
  description: "Holodex companion extension",
  options_ui: {
    page: "src/pages/options/index.html",
    open_in_tab: false,
  },
  background: {
    service_worker: "src/pages/background/index.ts",
    type: "module",
  },
  action: {
    // default_popup: "src/pages/popup/index.html",
    default_icon: {
      "32": "icon-32.png",
    },
  },
  icons: {
    "128": "icon-128.png",
  },
  permissions: [
    "tabs",
    "storage",
    "contextMenus",
    "webRequest", // unknown if still need.
    "declarativeNetRequestWithHostAccess",
  ],
  host_permissions: ["*://*.youtube.com/*", "*://*.holodex.net/*"],
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.tsx"],
      css: ["contentStyle.css"],
    },
  ],
  web_accessible_resources: [
    {
      resources: ["contentStyle.css", "icon-128.png", "icon-32.png"],
      matches: [],
    },
  ],
  // "devtools_page": "src/pages/devtools/index.html",
  // "chrome_url_overrides": {
  //   "newtab": "src/pages/newtab/index.html"
  // },
};

export default manifest;