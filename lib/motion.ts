'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionH4 = motion.h4;
export const MotionH5 = motion.h5;
export const MotionH6 = motion.h6;
export const MotionP = motion.p;
export const MotionButton = motion.create(Button);
export const MotionLink = motion.create(Link);
