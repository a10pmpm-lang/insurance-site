import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// React uses eval() in development mode for call-stack reconstruction.
// It never uses eval() in production, so 'unsafe-eval' is safe to omit there.
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

const securityHeaders = [
  // Prevent browsers from MIME-sniffing a response away from the declared content-type.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Deny rendering the site inside an iframe to prevent clickjacking attacks.
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Control how much referrer information is included in requests.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restrict browser feature access (microphone, camera, geolocation, etc.).
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Force HTTPS for 1 year (only activate once deployed behind HTTPS).
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Content Security Policy.
  // dev:  allows 'unsafe-eval' (required by React dev tools)
  // prod: no 'unsafe-eval' (React never needs it in production)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
