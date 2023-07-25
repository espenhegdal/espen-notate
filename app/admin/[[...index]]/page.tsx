'use client';

import config from '@/sanity.config'; // The correct path to the sanity.config file

import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
    return <NextStudio config={config} />;
}


 