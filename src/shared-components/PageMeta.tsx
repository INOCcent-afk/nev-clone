import React, { FC } from "react";
import Head from "next/head";

interface PageMetaTypes {
  title?: string;
  keywords?: string;
  description?: string;
}

export const PageMeta: FC<PageMetaTypes> = ({
  title = "Nev Flynn - Developer, Designer",
  keywords = "Nev Flynn",
  description = "Nev Flynn",
}: PageMetaTypes) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.webp" />
      <title>{title}</title>
    </Head>
  );
};
