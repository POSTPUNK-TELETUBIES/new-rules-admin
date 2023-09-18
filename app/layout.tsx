"use client";

import { Header } from "@components/header";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router/app";
import { mockDataProvider } from "src/providers/data/mock";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Refine
          dataProvider={mockDataProvider}
          routerProvider={routerProvider}
          resources={[
            {
              name: "posts",
              list: "/posts",
              show: "/posts/show/:id",
            },
            {
              name: "categories",
              list: "/categories",
              show: "/categories/show/:id",
            },
          ]}
        >
          <Header></Header>
          {children}
        </Refine>
      </body>
    </html>
  );
}
