import React from 'react';
import Link from 'next/link';

function ThemeLink({ className, href, title, icon }) {
  const IconComponent = icon;
  return (
    <Link href={href} legacyBehavior>
      <a className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center ${className}`}>
        {title}
        {IconComponent && (
          <span className="ml-2">
            <IconComponent />
          </span>
        )}
      </a>
    </Link>
  );
}

export default ThemeLink;
