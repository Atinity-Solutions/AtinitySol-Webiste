"use client"; // Ensures this component is rendered on the client-side

import { useEffect } from "react";

const GTM_ID = "GTM-NNCQGRFJ"; // Replace with your GTM ID

const GTM: React.FC = () => {
  useEffect(() => {
    // Initialize GTM
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* GTM Noscript */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            </noscript>
          `,
        }}
      />
    </>
  );
};

export default GTM;
