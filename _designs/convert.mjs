import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import HTMLtoJSX from 'htmltojsx';

const screens = [
  { file: 'admin.html', out: 'src/app/admin/page.tsx', name: 'AdminDashboard' },
  { file: 'booking-status.html', out: 'src/app/booking-status/page.tsx', name: 'BookingStatus' },
  { file: 'find-doctor.html', out: 'src/app/find-doctor/page.tsx', name: 'FindDoctor' },
  { file: 'prescription.html', out: 'src/app/prescription/page.tsx', name: 'Prescription' }
];

const converter = new HTMLtoJSX({
  createClass: false,
});

screens.forEach(screen => {
  const html = fs.readFileSync(screen.file, 'utf8');
  const dom = new JSDOM(html);
  
  // Extract body inner HTML, but remove scripts
  const body = dom.window.document.body;
  const scripts = body.querySelectorAll('script');
  scripts.forEach(s => s.remove());
  
  const innerHtml = body.innerHTML;
  let jsx = converter.convert(innerHtml);
  
  // The converter might leave some things we need to fix
  // e.g. class= instead of className= if it failed somewhere? No, htmltojsx handles className and style.
  // We need to fix styles like `style={{backgroundImage: "url('...')"}}` 
  
  const componentStr = `"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ${screen.name}() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

  // Ensure output directory exists
  const outDir = path.dirname(screen.out);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(screen.out, componentStr);
  console.log(`Converted ${screen.file} to ${screen.out}`);
});
