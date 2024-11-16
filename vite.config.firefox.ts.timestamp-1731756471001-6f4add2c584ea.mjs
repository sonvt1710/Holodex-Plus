// vite.config.firefox.ts
import { resolve as resolve3 } from "path";
import { mergeConfig, defineConfig as defineConfig2 } from "file:///F:/Xrave/Code/HolodexNet/Holodex-Plus/node_modules/vite/dist/node/index.js";
import { crx } from "file:///F:/Xrave/Code/HolodexNet/Holodex-Plus/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// vite.config.base.ts
import react from "file:///F:/Xrave/Code/HolodexNet/Holodex-Plus/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve as resolve2 } from "path";
import { defineDynamicResource } from "file:///F:/Xrave/Code/HolodexNet/Holodex-Plus/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import { defineConfig } from "file:///F:/Xrave/Code/HolodexNet/Holodex-Plus/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///F:/Xrave/Code/HolodexNet/Holodex-Plus/node_modules/vite-tsconfig-paths/dist/index.js";

// custom-vite-plugins.ts
import fs from "fs";
import { resolve } from "path";
function stripDevIcons(isDev2) {
  if (isDev2) return null;
  return {
    name: "strip-dev-icons",
    resolveId(source) {
      return source === "virtual-module" ? source : null;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    renderStart(outputOptions, inputOptions) {
      const outDir2 = outputOptions.dir;
      fs.rm(resolve(outDir2, "dev-icon-32.png"), () => console.log(`Deleted dev-icon-32.png from prod build`));
      fs.rm(resolve(outDir2, "dev-icon-128.png"), () => console.log(`Deleted dev-icon-128.png from prod build`));
    }
  };
}

// manifest.json.ts
var manifest = {
  manifest_version: 3,
  version: "<placeholder>",
  name: "Holodex Plus",
  description: "Holodex companion extension",
  options_ui: {
    page: "src/pages/options/index.html",
    open_in_tab: false
  },
  background: {
    service_worker: "src/pages/background/index.ts",
    type: "module"
  },
  action: {
    // default_popup: "src/pages/popup/index.html",
    default_icon: {
      "32": "icon-32.png"
    }
  },
  icons: {
    "128": "icon-128.png"
  },
  permissions: [
    "tabs",
    "storage",
    "contextMenus",
    "webRequest",
    // unknown if still need.
    "declarativeNetRequestWithHostAccess"
  ],
  host_permissions: ["*://*.youtube.com/*", "*://*.holodex.net/*"],
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.tsx"],
      css: ["contentStyle.css"]
    },
    {
      matches: ["*://*.youtube.com/live_chat*"],
      js: ["src/pages/content/yt-chat/yt-chat.ts"],
      all_frames: true,
      run_at: "document_end"
    }
  ],
  web_accessible_resources: [
    {
      resources: ["contentStyle.css", "icon-128.png", "icon-32.png"],
      matches: ["*://*.youtube.com/*", "*://*.holodex.net/*"]
    }
  ]
  // "devtools_page": "src/pages/devtools/index.html",
  // "chrome_url_overrides": {
  //   "newtab": "src/pages/newtab/index.html"
  // },
};
var manifest_json_default = manifest;

// manifest.dev.json
var manifest_dev_default = {
  action: {
    default_icon: "public/dev-icon-32.png"
  },
  icons: {
    "128": "public/dev-icon-128.png"
  },
  web_accessible_resources: [
    {
      resources: [
        "contentStyle.css",
        "dev-icon-128.png",
        "dev-icon-32.png"
      ],
      matches: []
    }
  ]
};

// package.json
var package_default = {
  name: "vite-web-extension",
  version: "1.4.0",
  description: "A simple chrome & firefox extension template with Vite, React, TypeScript and Tailwind CSS.",
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/JohnBra/vite-web-extension.git"
  },
  scripts: {
    build: "vite build --config vite.config.chrome.ts",
    "build:chrome": "vite build --config vite.config.chrome.ts",
    "build:firefox": "vite build --config vite.config.firefox.ts",
    dev: "nodemon --config nodemon.chrome.json",
    "dev:chrome": "nodemon --config nodemon.chrome.json",
    "dev:firefox": "nodemon --config nodemon.firefox.json"
  },
  type: "module",
  dependencies: {
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    "webext-bridge": "^6.0.1",
    "webextension-polyfill": "^0.12.0"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "2.0.0-beta.26",
    "@types/chrome": "^0.0.278",
    "@types/node": "^20.12.11",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@types/webextension-polyfill": "^0.10.7",
    "@typescript-eslint/eslint-plugin": "^7.8.0",
    "@typescript-eslint/parser": "^7.8.0",
    "@vitejs/plugin-react": "^4.2.1",
    autoprefixer: "^10.4.19",
    "chrome-types": "^0.1.320",
    eslint: "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.2",
    "fs-extra": "^11.2.0",
    nodemon: "^3.1.0",
    postcss: "^8.4.38",
    tailwindcss: "^3.4.14",
    "ts-node": "^10.9.2",
    typescript: "^5.6.3",
    vite: "^5.4.10",
    "vite-tsconfig-paths": "^5.1.2"
  }
};

// vite.config.base.ts
var __vite_injected_original_dirname = "F:\\Xrave\\Code\\HolodexNet\\Holodex-Plus";
var isDev = process.env.__DEV__ === "true";
var baseManifest = {
  ...manifest_json_default,
  version: package_default.version,
  ...isDev ? manifest_dev_default : {},
  // ...(localize ? {
  //   name: '__MSG_extName__',
  //   description: '__MSG_extDescription__',
  //   default_locale : 'en'
  // } : {})
  web_accessible_resources: [
    ...manifest_json_default.web_accessible_resources,
    defineDynamicResource({
      matches: ["*://*.youtube.com/*", "*://*.holodex.net/*"]
    })
  ]
};
var baseBuildOptions = {
  sourcemap: isDev,
  emptyOutDir: !isDev
};
var vite_config_base_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    stripDevIcons(isDev)
    // crxI18n({ localize, src: './src/locales' })
  ],
  publicDir: resolve2(__vite_injected_original_dirname, "public")
});

// vite.config.firefox.ts
var __vite_injected_original_dirname2 = "F:\\Xrave\\Code\\HolodexNet\\Holodex-Plus";
var outDir = resolve3(__vite_injected_original_dirname2, "dist_firefox");
var vite_config_firefox_default = mergeConfig(
  vite_config_base_default,
  defineConfig2({
    plugins: [
      crx({
        manifest: {
          ...baseManifest,
          background: {
            scripts: ["src/pages/background/index.ts"]
          }
        },
        browser: "firefox",
        contentScripts: {
          injectCss: true
        }
      })
    ],
    build: {
      ...baseBuildOptions,
      outDir
    },
    publicDir: resolve3(__vite_injected_original_dirname2, "public")
  })
);
export {
  vite_config_firefox_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuZmlyZWZveC50cyIsICJ2aXRlLmNvbmZpZy5iYXNlLnRzIiwgImN1c3RvbS12aXRlLXBsdWdpbnMudHMiLCAibWFuaWZlc3QuanNvbi50cyIsICJtYW5pZmVzdC5kZXYuanNvbiIsICJwYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxYcmF2ZVxcXFxDb2RlXFxcXEhvbG9kZXhOZXRcXFxcSG9sb2RleC1QbHVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxYcmF2ZVxcXFxDb2RlXFxcXEhvbG9kZXhOZXRcXFxcSG9sb2RleC1QbHVzXFxcXHZpdGUuY29uZmlnLmZpcmVmb3gudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L1hyYXZlL0NvZGUvSG9sb2RleE5ldC9Ib2xvZGV4LVBsdXMvdml0ZS5jb25maWcuZmlyZWZveC50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnLCBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGNyeCwgTWFuaWZlc3RWM0V4cG9ydCB9IGZyb20gJ0Bjcnhqcy92aXRlLXBsdWdpbic7XG5pbXBvcnQgYmFzZUNvbmZpZywgeyBiYXNlTWFuaWZlc3QsIGJhc2VCdWlsZE9wdGlvbnMgfSBmcm9tICcuL3ZpdGUuY29uZmlnLmJhc2UnXG5cbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCAnZGlzdF9maXJlZm94Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuICBiYXNlQ29uZmlnLFxuICBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIGNyeCh7XG4gICAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgICAgLi4uYmFzZU1hbmlmZXN0LFxuICAgICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFsgJ3NyYy9wYWdlcy9iYWNrZ3JvdW5kL2luZGV4LnRzJyBdXG4gICAgICAgICAgfSxcbiAgICAgICAgfSBhcyBNYW5pZmVzdFYzRXhwb3J0LFxuICAgICAgICBicm93c2VyOiAnZmlyZWZveCcsXG4gICAgICAgIGNvbnRlbnRTY3JpcHRzOiB7XG4gICAgICAgICAgaW5qZWN0Q3NzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIC4uLmJhc2VCdWlsZE9wdGlvbnMsXG4gICAgICBvdXREaXJcbiAgICB9LFxuICAgIHB1YmxpY0RpcjogcmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKSxcbiAgfSlcbilcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcWHJhdmVcXFxcQ29kZVxcXFxIb2xvZGV4TmV0XFxcXEhvbG9kZXgtUGx1c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcWHJhdmVcXFxcQ29kZVxcXFxIb2xvZGV4TmV0XFxcXEhvbG9kZXgtUGx1c1xcXFx2aXRlLmNvbmZpZy5iYXNlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9YcmF2ZS9Db2RlL0hvbG9kZXhOZXQvSG9sb2RleC1QbHVzL3ZpdGUuY29uZmlnLmJhc2UudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lRHluYW1pY1Jlc291cmNlLCBNYW5pZmVzdFYzRXhwb3J0IH0gZnJvbSAnQGNyeGpzL3ZpdGUtcGx1Z2luJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgQnVpbGRPcHRpb25zIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuaW1wb3J0IHsgc3RyaXBEZXZJY29ucywgIH0gZnJvbSAnLi9jdXN0b20tdml0ZS1wbHVnaW5zJztcbmltcG9ydCBtYW5pZmVzdCBmcm9tICcuL21hbmlmZXN0Lmpzb24nO1xuaW1wb3J0IGRldk1hbmlmZXN0IGZyb20gJy4vbWFuaWZlc3QuZGV2Lmpzb24nO1xuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5cblxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5fX0RFVl9fID09PSAndHJ1ZSc7XG4vLyBzZXQgdGhpcyBmbGFnIHRvIHRydWUsIGlmIHlvdSB3YW50IGxvY2FsaXphdGlvbiBzdXBwb3J0XG4vLyBjb25zdCBsb2NhbGl6ZSA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgYmFzZU1hbmlmZXN0ID0ge1xuICAuLi5tYW5pZmVzdCxcbiAgdmVyc2lvbjogcGtnLnZlcnNpb24sXG4gIC4uLihpc0RldiA/IGRldk1hbmlmZXN0IDogKHt9IGFzIE1hbmlmZXN0VjNFeHBvcnQpKSxcbiAgLy8gLi4uKGxvY2FsaXplID8ge1xuICAvLyAgIG5hbWU6ICdfX01TR19leHROYW1lX18nLFxuICAvLyAgIGRlc2NyaXB0aW9uOiAnX19NU0dfZXh0RGVzY3JpcHRpb25fXycsXG4gIC8vICAgZGVmYXVsdF9sb2NhbGUgOiAnZW4nXG4gIC8vIH0gOiB7fSlcbiAgd2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzOiBbXG4gICAgLi4ubWFuaWZlc3Qud2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzLFxuICAgIGRlZmluZUR5bmFtaWNSZXNvdXJjZSh7XG4gICAgICBtYXRjaGVzOiBbXCIqOi8vKi55b3V0dWJlLmNvbS8qXCIsIFwiKjovLyouaG9sb2RleC5uZXQvKlwiXSxcbiAgICB9KSxcbiAgXSxcbn0gYXMgTWFuaWZlc3RWM0V4cG9ydDtcblxuZXhwb3J0IGNvbnN0IGJhc2VCdWlsZE9wdGlvbnM6IEJ1aWxkT3B0aW9ucyA9IHtcbiAgc291cmNlbWFwOiBpc0RldixcbiAgZW1wdHlPdXREaXI6ICFpc0RldlxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdHNjb25maWdQYXRocygpLFxuICAgIHJlYWN0KCksXG4gICAgc3RyaXBEZXZJY29ucyhpc0RldiksXG4gICAgLy8gY3J4STE4bih7IGxvY2FsaXplLCBzcmM6ICcuL3NyYy9sb2NhbGVzJyB9KVxuICBdLFxuICBwdWJsaWNEaXI6IHJlc29sdmUoX19kaXJuYW1lLCAncHVibGljJyksXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcWHJhdmVcXFxcQ29kZVxcXFxIb2xvZGV4TmV0XFxcXEhvbG9kZXgtUGx1c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcWHJhdmVcXFxcQ29kZVxcXFxIb2xvZGV4TmV0XFxcXEhvbG9kZXgtUGx1c1xcXFxjdXN0b20tdml0ZS1wbHVnaW5zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9YcmF2ZS9Db2RlL0hvbG9kZXhOZXQvSG9sb2RleC1QbHVzL2N1c3RvbS12aXRlLXBsdWdpbnMudHNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcblxuLy8gcGx1Z2luIHRvIHJlbW92ZSBkZXYgaWNvbnMgZnJvbSBwcm9kIGJ1aWxkXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBEZXZJY29ucyAoaXNEZXY6IGJvb2xlYW4pIHtcbiAgaWYgKGlzRGV2KSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3N0cmlwLWRldi1pY29ucycsXG4gICAgcmVzb2x2ZUlkIChzb3VyY2U6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHNvdXJjZSA9PT0gJ3ZpcnR1YWwtbW9kdWxlJyA/IHNvdXJjZSA6IG51bGxcbiAgICB9LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICByZW5kZXJTdGFydCAob3V0cHV0T3B0aW9uczogYW55LCBpbnB1dE9wdGlvbnM6IGFueSkge1xuICAgICAgY29uc3Qgb3V0RGlyID0gb3V0cHV0T3B0aW9ucy5kaXJcbiAgICAgIGZzLnJtKHJlc29sdmUob3V0RGlyLCAnZGV2LWljb24tMzIucG5nJyksICgpID0+IGNvbnNvbGUubG9nKGBEZWxldGVkIGRldi1pY29uLTMyLnBuZyBmcm9tIHByb2QgYnVpbGRgKSlcbiAgICAgIGZzLnJtKHJlc29sdmUob3V0RGlyLCAnZGV2LWljb24tMTI4LnBuZycpLCAoKSA9PiBjb25zb2xlLmxvZyhgRGVsZXRlZCBkZXYtaWNvbi0xMjgucG5nIGZyb20gcHJvZCBidWlsZGApKVxuICAgIH1cbiAgfVxufVxuXG4vLyBwbHVnaW4gdG8gc3VwcG9ydCBpMThuIFxuLypcbmV4cG9ydCBmdW5jdGlvbiBjcnhJMThuIChvcHRpb25zOiB7IGxvY2FsaXplOiBib29sZWFuLCBzcmM6IHN0cmluZyB9KTogUGx1Z2luT3B0aW9uIHtcbiAgaWYgKCFvcHRpb25zLmxvY2FsaXplKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGdldEpzb25GaWxlcyA9IChkaXI6IHN0cmluZyk6IEFycmF5PHN0cmluZz4gPT4ge1xuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoZGlyLCB7cmVjdXJzaXZlOiB0cnVlfSkgYXMgc3RyaW5nW11cbiAgICByZXR1cm4gZmlsZXMuZmlsdGVyKGZpbGUgPT4gISFmaWxlICYmIGZpbGUuZW5kc1dpdGgoJy5qc29uJykpXG4gIH1cbiAgY29uc3QgZW50cnkgPSByZXNvbHZlKF9fZGlybmFtZSwgb3B0aW9ucy5zcmMpXG4gIGNvbnN0IGxvY2FsZUZpbGVzID0gZ2V0SnNvbkZpbGVzKGVudHJ5KVxuICBjb25zdCBmaWxlcyA9IGxvY2FsZUZpbGVzLm1hcChmaWxlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgZmlsZU5hbWU6IGZpbGUsXG4gICAgICBzb3VyY2U6IGZzLnJlYWRGaWxlU3luYyhyZXNvbHZlKGVudHJ5LCBmaWxlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2NyeC1pMThuJyxcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICBidWlsZFN0YXJ0OiB7XG4gICAgICBvcmRlcjogJ3Bvc3QnLFxuICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmSWQgPSB0aGlzLmVtaXRGaWxlKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Fzc2V0JyxcbiAgICAgICAgICAgICAgc291cmNlOiBmaWxlLnNvdXJjZSxcbiAgICAgICAgICAgICAgZmlsZU5hbWU6ICdfbG9jYWxlcy8nK2ZpbGUuZmlsZU5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBmaWxlLmlkID0gcmVmSWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0qLyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcWHJhdmVcXFxcQ29kZVxcXFxIb2xvZGV4TmV0XFxcXEhvbG9kZXgtUGx1c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcWHJhdmVcXFxcQ29kZVxcXFxIb2xvZGV4TmV0XFxcXEhvbG9kZXgtUGx1c1xcXFxtYW5pZmVzdC5qc29uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9YcmF2ZS9Db2RlL0hvbG9kZXhOZXQvSG9sb2RleC1QbHVzL21hbmlmZXN0Lmpzb24udHNcIjtpbXBvcnQgdHlwZSB7IE1hbmlmZXN0VjNFeHBvcnQgfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5cbmNvbnN0IG1hbmlmZXN0ID0gKHtcbiAgbWFuaWZlc3RfdmVyc2lvbjogMyxcbiAgdmVyc2lvbjogXCI8cGxhY2Vob2xkZXI+XCIsXG4gIG5hbWU6IFwiSG9sb2RleCBQbHVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkhvbG9kZXggY29tcGFuaW9uIGV4dGVuc2lvblwiLFxuICBvcHRpb25zX3VpOiB7XG4gICAgcGFnZTogXCJzcmMvcGFnZXMvb3B0aW9ucy9pbmRleC5odG1sXCIsXG4gICAgb3Blbl9pbl90YWI6IGZhbHNlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgc2VydmljZV93b3JrZXI6IFwic3JjL3BhZ2VzL2JhY2tncm91bmQvaW5kZXgudHNcIixcbiAgICB0eXBlOiBcIm1vZHVsZVwiLFxuICB9LFxuICBhY3Rpb246IHtcbiAgICAvLyBkZWZhdWx0X3BvcHVwOiBcInNyYy9wYWdlcy9wb3B1cC9pbmRleC5odG1sXCIsXG4gICAgZGVmYXVsdF9pY29uOiB7XG4gICAgICBcIjMyXCI6IFwiaWNvbi0zMi5wbmdcIixcbiAgICB9LFxuICB9LFxuICBpY29uczoge1xuICAgIFwiMTI4XCI6IFwiaWNvbi0xMjgucG5nXCIsXG4gIH0sXG4gIHBlcm1pc3Npb25zOiBbXG4gICAgXCJ0YWJzXCIsXG4gICAgXCJzdG9yYWdlXCIsXG4gICAgXCJjb250ZXh0TWVudXNcIixcbiAgICBcIndlYlJlcXVlc3RcIiwgLy8gdW5rbm93biBpZiBzdGlsbCBuZWVkLlxuICAgIFwiZGVjbGFyYXRpdmVOZXRSZXF1ZXN0V2l0aEhvc3RBY2Nlc3NcIixcbiAgXSxcbiAgaG9zdF9wZXJtaXNzaW9uczogW1wiKjovLyoueW91dHViZS5jb20vKlwiLCBcIio6Ly8qLmhvbG9kZXgubmV0LypcIl0sXG4gIGNvbnRlbnRfc2NyaXB0czogW1xuICAgIHtcbiAgICAgIG1hdGNoZXM6IFtcImh0dHA6Ly8qLypcIiwgXCJodHRwczovLyovKlwiLCBcIjxhbGxfdXJscz5cIl0sXG4gICAgICBqczogW1wic3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXgudHN4XCJdLFxuICAgICAgY3NzOiBbXCJjb250ZW50U3R5bGUuY3NzXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgbWF0Y2hlczogW1wiKjovLyoueW91dHViZS5jb20vbGl2ZV9jaGF0KlwiXSwganM6IFtcInNyYy9wYWdlcy9jb250ZW50L3l0LWNoYXQveXQtY2hhdC50c1wiXSwgYWxsX2ZyYW1lczogdHJ1ZSwgcnVuX2F0OiBcImRvY3VtZW50X2VuZFwiLFxuICAgIH1cbiAgXSxcbiAgd2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzOiBbXG4gICAge1xuICAgICAgcmVzb3VyY2VzOiBbXCJjb250ZW50U3R5bGUuY3NzXCIsIFwiaWNvbi0xMjgucG5nXCIsIFwiaWNvbi0zMi5wbmdcIl0sXG4gICAgICBtYXRjaGVzOiBbXCIqOi8vKi55b3V0dWJlLmNvbS8qXCIsIFwiKjovLyouaG9sb2RleC5uZXQvKlwiXSxcbiAgICB9LFxuICBdLFxuICAvLyBcImRldnRvb2xzX3BhZ2VcIjogXCJzcmMvcGFnZXMvZGV2dG9vbHMvaW5kZXguaHRtbFwiLFxuICAvLyBcImNocm9tZV91cmxfb3ZlcnJpZGVzXCI6IHtcbiAgLy8gICBcIm5ld3RhYlwiOiBcInNyYy9wYWdlcy9uZXd0YWIvaW5kZXguaHRtbFwiXG4gIC8vIH0sXG59KSBhcyBjb25zdCBzYXRpc2ZpZXMgTWFuaWZlc3RWM0V4cG9ydDtcblxuZXhwb3J0IGRlZmF1bHQgbWFuaWZlc3Q7IiwgIntcbiAgXCJhY3Rpb25cIjoge1xuICAgIFwiZGVmYXVsdF9pY29uXCI6IFwicHVibGljL2Rldi1pY29uLTMyLnBuZ1wiXG4gIH0sXG4gIFwiaWNvbnNcIjoge1xuICAgIFwiMTI4XCI6IFwicHVibGljL2Rldi1pY29uLTEyOC5wbmdcIlxuICB9LFxuICBcIndlYl9hY2Nlc3NpYmxlX3Jlc291cmNlc1wiOiBbXG4gICAge1xuICAgICAgXCJyZXNvdXJjZXNcIjogW1xuICAgICAgICBcImNvbnRlbnRTdHlsZS5jc3NcIixcbiAgICAgICAgXCJkZXYtaWNvbi0xMjgucG5nXCIsXG4gICAgICAgIFwiZGV2LWljb24tMzIucG5nXCJcbiAgICAgIF0sXG4gICAgICBcIm1hdGNoZXNcIjogW11cbiAgICB9XG4gIF1cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcInZpdGUtd2ViLWV4dGVuc2lvblwiLFxuICBcInZlcnNpb25cIjogXCIxLjQuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBzaW1wbGUgY2hyb21lICYgZmlyZWZveCBleHRlbnNpb24gdGVtcGxhdGUgd2l0aCBWaXRlLCBSZWFjdCwgVHlwZVNjcmlwdCBhbmQgVGFpbHdpbmQgQ1NTLlwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQnJhL3ZpdGUtd2ViLWV4dGVuc2lvbi5naXRcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkIC0tY29uZmlnIHZpdGUuY29uZmlnLmNocm9tZS50c1wiLFxuICAgIFwiYnVpbGQ6Y2hyb21lXCI6IFwidml0ZSBidWlsZCAtLWNvbmZpZyB2aXRlLmNvbmZpZy5jaHJvbWUudHNcIixcbiAgICBcImJ1aWxkOmZpcmVmb3hcIjogXCJ2aXRlIGJ1aWxkIC0tY29uZmlnIHZpdGUuY29uZmlnLmZpcmVmb3gudHNcIixcbiAgICBcImRldlwiOiBcIm5vZGVtb24gLS1jb25maWcgbm9kZW1vbi5jaHJvbWUuanNvblwiLFxuICAgIFwiZGV2OmNocm9tZVwiOiBcIm5vZGVtb24gLS1jb25maWcgbm9kZW1vbi5jaHJvbWUuanNvblwiLFxuICAgIFwiZGV2OmZpcmVmb3hcIjogXCJub2RlbW9uIC0tY29uZmlnIG5vZGVtb24uZmlyZWZveC5qc29uXCJcbiAgfSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInJlYWN0XCI6IFwiXjE4LjMuMVwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiLFxuICAgIFwid2ViZXh0LWJyaWRnZVwiOiBcIl42LjAuMVwiLFxuICAgIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTIuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjcnhqcy92aXRlLXBsdWdpblwiOiBcIjIuMC4wLWJldGEuMjZcIixcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjI3OFwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTIuMTFcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4zLjFcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMy4wXCIsXG4gICAgXCJAdHlwZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTAuN1wiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNy44LjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy44LjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMi4xXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xOVwiLFxuICAgIFwiY2hyb21lLXR5cGVzXCI6IFwiXjAuMS4zMjBcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjkuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl42LjguMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjM0LjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjJcIixcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjIuMFwiLFxuICAgIFwibm9kZW1vblwiOiBcIl4zLjEuMFwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzhcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xNFwiLFxuICAgIFwidHMtbm9kZVwiOiBcIl4xMC45LjJcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS42LjNcIixcbiAgICBcInZpdGVcIjogXCJeNS40LjEwXCIsXG4gICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjUuMS4yXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVCxTQUFTLFdBQUFBLGdCQUFlO0FBQ25WLFNBQVMsYUFBYSxnQkFBQUMscUJBQW9CO0FBQzFDLFNBQVMsV0FBNkI7OztBQ0YrUSxPQUFPLFdBQVc7QUFDdlUsU0FBUyxXQUFBQyxnQkFBZTtBQUN4QixTQUFTLDZCQUErQztBQUN4RCxTQUFTLG9CQUFrQztBQUMzQyxPQUFPLG1CQUFtQjs7O0FDSmlTLE9BQU8sUUFBUTtBQUMxVSxTQUFTLGVBQWU7QUFJakIsU0FBUyxjQUFlQyxRQUFnQjtBQUM3QyxNQUFJQSxPQUFPLFFBQU87QUFFbEIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVyxRQUFnQjtBQUN6QixhQUFPLFdBQVcsbUJBQW1CLFNBQVM7QUFBQSxJQUNoRDtBQUFBO0FBQUEsSUFFQSxZQUFhLGVBQW9CLGNBQW1CO0FBQ2xELFlBQU1DLFVBQVMsY0FBYztBQUM3QixTQUFHLEdBQUcsUUFBUUEsU0FBUSxpQkFBaUIsR0FBRyxNQUFNLFFBQVEsSUFBSSx5Q0FB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QUEsSUFDdkIsNkJBQTZCO0FBQUEsSUFDN0IsWUFBWTtBQUFBLElBQ1osU0FBVztBQUFBLElBQ1gsU0FBVztBQUFBLElBQ1gsYUFBZTtBQUFBLElBQ2YsV0FBVztBQUFBLElBQ1gsWUFBYztBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsdUJBQXVCO0FBQUEsRUFDekI7QUFDRjs7O0FKbkRBLElBQU0sbUNBQW1DO0FBV3pDLElBQU0sUUFBUSxRQUFRLElBQUksWUFBWTtBQUkvQixJQUFNLGVBQWU7QUFBQSxFQUMxQixHQUFHO0FBQUEsRUFDSCxTQUFTLGdCQUFJO0FBQUEsRUFDYixHQUFJLFFBQVEsdUJBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU01QiwwQkFBMEI7QUFBQSxJQUN4QixHQUFHLHNCQUFTO0FBQUEsSUFDWixzQkFBc0I7QUFBQSxNQUNwQixTQUFTLENBQUMsdUJBQXVCLHFCQUFxQjtBQUFBLElBQ3hELENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFFTyxJQUFNLG1CQUFpQztBQUFBLEVBQzVDLFdBQVc7QUFBQSxFQUNYLGFBQWEsQ0FBQztBQUNoQjtBQUVBLElBQU8sMkJBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLGNBQWMsS0FBSztBQUFBO0FBQUEsRUFFckI7QUFBQSxFQUNBLFdBQVdDLFNBQVEsa0NBQVcsUUFBUTtBQUN4QyxDQUFDOzs7QUQ3Q0QsSUFBTUMsb0NBQW1DO0FBS3pDLElBQU0sU0FBU0MsU0FBUUMsbUNBQVcsY0FBYztBQUVoRCxJQUFPLDhCQUFRO0FBQUEsRUFDYjtBQUFBLEVBQ0FDLGNBQWE7QUFBQSxJQUNYLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxRQUNGLFVBQVU7QUFBQSxVQUNSLEdBQUc7QUFBQSxVQUNILFlBQVk7QUFBQSxZQUNWLFNBQVMsQ0FBRSwrQkFBZ0M7QUFBQSxVQUM3QztBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxRQUNULGdCQUFnQjtBQUFBLFVBQ2QsV0FBVztBQUFBLFFBQ2I7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVdGLFNBQVFDLG1DQUFXLFFBQVE7QUFBQSxFQUN4QyxDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAiZGVmaW5lQ29uZmlnIiwgInJlc29sdmUiLCAiaXNEZXYiLCAib3V0RGlyIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJkZWZpbmVDb25maWciXQp9Cg==
