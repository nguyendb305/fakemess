# Test info

- Name: local site test
- Location: /Users/nguyendang/Work/Code/fakegpt/tests/basic.spec.ts:3:5

# Error details

```
Error: browserContext._wrapApiCall: Test ended.
Browser logs:

<launching> /Users/nguyendang/Library/Caches/ms-playwright/chromium-1169/chrome-mac/Chromium.app/Contents/MacOS/Chromium --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AutoExpandDetailsElement,AvoidUnnecessaryBeforeUnloadCheckSync,CertificateTransparencyComponentUpdater,DeferRendererTasksAfterInput,DestroyProfileOnBrowserClose,DialMediaRouteProvider,ExtensionManifestV2Disabled,GlobalMediaControls,HttpsUpgrades,ImprovedCookieControls,LazyFrameLoading,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --enable-automation --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --enable-use-zoom-for-dsf=false --no-sandbox --user-data-dir=/var/folders/57/6kfb44xn1gd5_yt9vk64m3p00000gn/T/playwright_chromiumdev_profile-0elfSM --remote-debugging-pipe --no-startup-window
<launched> pid=15411
[pid=15411][err] [16274:62847356:0521/032513.227859:ERROR:services/on_device_model/ml/gpu_blocklist.cc:120] Unable to get gpu adapter
[pid=15411][err] [15411:62843261:0521/032513.228155:ERROR:services/on_device_model/public/cpp/service_client.cc:36] Unexpected on_device_model service disconnect: The device's GPU is not supported.
[pid=15411] <gracefully close start>
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
>  3 | test('local site test', async ({ page }) => {
     |     ^ Error: browserContext._wrapApiCall: Test ended.
   4 |   console.log('Starting local site test...');
   5 |   
   6 |   // Try to load the local site
   7 |   console.log('Navigating to local site...');
   8 |   const response = await page.goto('http://localhost:3000/en', {
   9 |     waitUntil: 'networkidle',
  10 |     timeout: 30000
  11 |   });
  12 |   
  13 |   console.log('Response status:', response?.status());
  14 |   console.log('Response URL:', response?.url());
  15 |   
  16 |   // Get the page title
  17 |   const title = await page.title();
  18 |   console.log('Page title:', title);
  19 |   
  20 |   // Get the current URL
  21 |   const currentUrl = page.url();
  22 |   console.log('Current URL:', currentUrl);
  23 |   
  24 |   // Basic check - make sure we're on the right page
  25 |   expect(currentUrl).toContain('localhost:3000');
  26 | }); 
```