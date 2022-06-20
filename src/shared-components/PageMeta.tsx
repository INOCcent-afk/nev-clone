import React, { FC } from "react";
import Head from "next/head";

interface PageMetaTypes {
  title?: string;
  keywords?: string;
  description?: string;
}

export const PageMeta: FC<PageMetaTypes> = ({
  title = "Nev - Developer, Designer",
  keywords = "Nev",
  description = "Nev",
}: PageMetaTypes) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" sizes="48x67" href="/favicon.webp" />
      <title>{title}</title>
    </Head>
  );
};
