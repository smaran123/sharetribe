import { initialize as initializeI18n } from './i18n';

// This function is a single point where application initialization
// should happen. Initialization can be for example setting the app
// in correct state based on railsContext or node environment
function initializeEnvironment(railsContext, nodeEnv) {
  const { i18nLocale, i18nDefaultLocale } = railsContext;
  initializeI18n(i18nLocale, i18nDefaultLocale, nodeEnv);
}

export { initializeEnvironment };