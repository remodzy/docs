import React from 'react';
import {Helmet} from 'react-helmet';
import Icon from "../../assets/favicon.ico";

export default function SEO({title, description, siteName}) {
  return (
    <Helmet>
      <link rel="icon" href={Icon} />
      {/* other SEO tags (OpenGraph, Twitter, etc.) */}
    </Helmet>
  );
}
