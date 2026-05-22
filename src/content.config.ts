import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const i18nString = z.object({
  es: z.string(),
  en: z.string(),
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.union([z.string(), i18nString]),
    shortDescription: i18nString,
    description: i18nString,
    features: z.array(i18nString),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z.enum(['in-development', 'completed', 'paused']).default('in-development'),
    aiAssisted: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      'orchestration',
      'cloud',
      'languages',
      'monitoring',
      'security',
      'methodologies',
    ]),
    level: z.number().min(0).max(100),
    levelLabel: i18nString,
    description: i18nString,
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const experiencia = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiencia' }),
  schema: z.object({
    role: i18nString,
    company: z.string(),
    location: z.string(),
    period: i18nString,
    bullets: z.array(i18nString),
    order: z.number().default(99),
  }),
});

const educacion = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/educacion' }),
  schema: z.object({
    title: i18nString,
    school: z.string(),
    period: z.string(),
    detail: i18nString.optional(),
    order: z.number().default(99),
  }),
});

const certificaciones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certificaciones' }),
  schema: z.object({
    name: i18nString,
    year: z.union([z.number(), z.string()]),
    completed: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

export const collections = {
  proyectos,
  skills,
  experiencia,
  educacion,
  certificaciones,
};
