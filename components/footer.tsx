import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Elliot Trapp, All rights reserved.
      </small>
      <p className="text-xs">
        <span className="semi-bold">About this websites:</span> Built with
        React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Vercel hosting.
      </p>
    </footer>
  );
}
