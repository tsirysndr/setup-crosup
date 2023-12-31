import { tmpdir } from "node:os";
import * as action from "@actions/core";
import setup from "./setup.js";

if (!process.env.RUNNER_TEMP) {
  process.env.RUNNER_TEMP = tmpdir();
}

setup({
  version: action.getInput("version"),
  packages: action
    .getInput("packages")
    .split("\n")
    .map((packageName) => packageName.trim()),
})
  .then(({ version, cacheHit }) => {
    action.setOutput("version", version);
    action.setOutput("cache-hit", cacheHit);
  })
  .catch((error) => {
    action.setFailed(error.message);
  });
