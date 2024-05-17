import { NinetailedProvider } from "@ninetailed/experience.js-react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      dd .
      <body>
        <NinetailedProvider
          clientId="3c00cace-cacb-4086-807b-c97b4453e197"
          environment="b2b-demo"
        >
          {children}
          <ScrollRestoration />
          <Scripts />
        </NinetailedProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
