'use client'
import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <Services/>
    <Work/>
    <Cta/>
{/* <Viewer fileUrl="/resume2.pdf" /> */}
  </main>
  );
}

