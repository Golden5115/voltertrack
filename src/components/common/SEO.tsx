import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'VolterTrack | Smart Fleet Management & Vehicle Intelligence Platform',
  description = 'Know every vehicle. Control every journey. VolterTrack gives businesses real-time visibility, security, telematics, and intelligent fleet control.',
  keywords = 'vehicle tracking, GPS vehicle tracking, fleet management software, vehicle tracking Nigeria, car tracker, telematics, VolterTrack',
}) => {
  useEffect(() => {
    document.title = title.includes('VolterTrack') ? title : `${title} | VolterTrack`;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Scroll to top on page mount
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, keywords]);

  return null;
};
