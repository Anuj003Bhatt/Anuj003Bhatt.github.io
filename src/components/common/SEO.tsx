import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

const SITE_URL = 'https://anuj003bhatt.github.io';
const PERSON_SCHEMA_ID = 'person-schema';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[data-seo-canonical]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.dataset.seoCanonical = 'true';
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertPersonSchema(enabled: boolean) {
  const existing = document.getElementById(PERSON_SCHEMA_ID);
  if (!enabled) {
    existing?.remove();
    return;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anuj Bhatt',
    jobTitle: 'Technical Lead & Systems Architect',
    url: `${SITE_URL}/`,
    sameAs: [
      'https://www.linkedin.com/in/anuj-30bhatt/',
      'https://github.com/Anuj003Bhatt/Anuj003Bhatt.github.io',
    ],
  };

  const script = existing ?? document.createElement('script');
  script.id = PERSON_SCHEMA_ID;
  script.textContent = JSON.stringify(schema);
  if (!existing) document.head.appendChild(script);
}

export function SEO({ title, description, path = '' }: SEOProps) {
  useEffect(() => {
    const pageTitle = `${title} — Anuj Bhatt`;
    const url = `${SITE_URL}${path}`;

    document.title = pageTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertCanonical(url);
    upsertPersonSchema(path === '');

    return () => {
      document.getElementById(PERSON_SCHEMA_ID)?.remove();
    };
  }, [title, description, path]);

  return null;
}
