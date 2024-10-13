import * as Sentry from "@sentry/nextjs";

console.log("Initializing Sentry...");

const replayIntegration = Sentry.replayIntegration({
  maskAllText: true,
  blockAllMedia: true
});

const feedbackIntegration = Sentry.feedbackIntegration({
  colorScheme: "system",
});

Sentry.init({
  dsn: "https://5b7f637c0d6fe37a60161be7c6ef9c23@o4508074610393088.ingest.de.sentry.io/4508074801234000",

  integrations: [replayIntegration, feedbackIntegration],

  tracesSampleRate: 1,
  replaysSessionSampleRate: 1, // Changed to 1 for debugging
  replaysOnErrorSampleRate: 1.0,

  debug: true, // Enable debug mode

  beforeSend(event) {
    console.log("Sending event to Sentry:", event);
    return event;
  },

  beforeBreadcrumb(breadcrumb) {
    console.log("Adding breadcrumb:", breadcrumb);
    return breadcrumb;
  },
});

console.log("Sentry initialization complete.");