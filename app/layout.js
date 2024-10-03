import { ReactFlowProvider } from '@xyflow/react';


export const metadata = {
  title: "React Flow Testing",
  description: "testinggggg",
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vqj5avh.css"></link>
      </head>

      <body className="min-h-screen bg-charleston text-black Anth-Regular w-full antialiased overflow-x-hidden">

        <main className="flex flex-col">
          <section className="h-screen w-screen FFMeta-Regular" id="canvas">
            <ReactFlowProvider>
              {children}
            </ReactFlowProvider>

          </section>
        </main>

      </body>
    </html>
  );
}
