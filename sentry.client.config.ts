// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://294ec703e74fe4e2e4abb5ca4ff8b755@o4507273128574976.ingest.de.sentry.io/4507273132441680",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      lang: 'es-ES',
      triggerLabel: 'Reporta un error',
      formTitle: 'Reporta un error - Sentry',
      submitButtonLabel: 'Enviar reporte',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Confirmar',
      addScreenshotButtonLabel: 'Añadir captura de pantalla',
      removeScreenshotButtonLabel: 'Eliminar captura',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',	
      emailPlaceholder: 'Tu email',
      isRequiredLabel: '(obligatorio)',
      messageLabel: 'Descripción',	
      messagePlaceholder: '¿Cómo ha ocurrido el error? ¿Que debería haber pasado?',	
      successMessageText: '¡Gracias por tu reporte!',
    }),
  ],
});
