import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://platform.openai.com/docs/introduction",
  match: "https://platform.openai.com/docs/**",
  selector: '.docs-body',
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
