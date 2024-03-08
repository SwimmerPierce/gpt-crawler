import { Config } from "./src/config";

/*
export const defaultConfig: Config = {
  url: "https://platform.openai.com/docs/introduction",
  match: "https://platform.openai.com/docs/**",
  selector: '.docs-body',
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
*/
/*
export const defaultConfig: Config = {
  url: "https://www.bondconnect.ca/blog/",
  match: "https://www.bondconnect.ca/blog/**",
  selector: '.docs-body',
  maxPagesToCrawl: 200,
  outputFileName: "output.json",
};
*/

export const defaultConfig: Config = {
  url: "https://doc-api-mtl.ubity.com/",
  match: "https://doc-api-mtl.ubity.com/**",
  selector: '.docs-body',
  maxPagesToCrawl: 200,
  outputFileName: "output.json",
};
