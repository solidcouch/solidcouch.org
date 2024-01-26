import { FaviconOptions, favicons } from "favicons";
import fs from "fs-extra";

const source = "src/assets/logo.png"; // Source image(s). `string`, `buffer` or array of `string`

const configuration: FaviconOptions = {
  path: "/", // Path for overriding default icons path. `string`
  appName: process.env.APP_NAME, // Your application's name. `string`
  appDescription: process.env.APP_DESCRIPTION, // Your application's description. `string`
  cacheBustingQueryParam: null, // Query parameter added to all URLs that acts as a cache busting system. `string | null`
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: true,
  },
};

const run = async () => {
  const response = await favicons(source, configuration);

  const { contents } = response.images.find((a) => a.name === "favicon.ico")!; // Array of { name: string, contents: <buffer> }
  await fs.writeFile("src/app/favicon.ico", contents);
};

run();
