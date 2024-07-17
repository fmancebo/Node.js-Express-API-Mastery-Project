import * as Sentry from "@sentry/node";
import app from "./app";

Sentry.setupExpressErrorHandler(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
