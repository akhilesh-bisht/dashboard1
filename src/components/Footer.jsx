import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <div className="flex justify-center gap-6 py-4 text-sm text-gray-500">
        <a href="/terms" className="hover:underline">
          Terms of Service
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/help-center" className="hover:underline">
          Help Center
        </a>
      </div>
    </div>
  );
}

export default Footer;
