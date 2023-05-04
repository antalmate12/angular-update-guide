import {
  LocalizedSteps,
  registerLocalization,
  LocalizedLabels,
} from "../localization";

const uiLabels: LocalizedLabels = {};

const steps: LocalizedSteps = {
  // v10.0
};

// @TODO This console log is required or the locale won't be registered
console.log(`hu-HU registered`);
registerLocalization("hu-HU", steps, uiLabels);
