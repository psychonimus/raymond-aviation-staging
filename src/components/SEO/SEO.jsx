import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.raymondaviation.com';
const DEFAULT_IMAGE = '/assets/images/favicon/apple-touch-icon.png';

const SEO = ({
  title,
  description,
  path = '',
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website'
}) => {
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : path ? `/${path}` : ''}`;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Raymond Aviation" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
