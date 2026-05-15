/**
 * EQUIPMENT MANIFEST
 * ─────────────────────────────────────────────────────────────
 * Logos di-bundle dari `react-icons/si` (Simple Icons).
 * Reliable offline, tree-shaken, no CDN dependency.
 * Daftar slug Simple Icons: https://simpleicons.org
 * ─────────────────────────────────────────────────────────────
 */
import {
  // Frontend
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  // Backend
  SiNodedotjs, SiPython, SiFastapi, SiPostgresql, SiSupabase,
  // AI
  SiOpenai, SiAnthropic, SiGoogle,
  // Automation
  SiN8N, SiZapier, SiWhatsapp,
  // Tools & Infra
  SiDocker, SiGit, SiGithub, SiVercel, SiFigma,
} from 'react-icons/si'

// VS Code (slug variant — fallback to lucide-style if missing)
import { VscVscode } from 'react-icons/vsc'

export const tech = [
  {
    dept: 'Cinematography',
    subtitle: 'Frontend',
    crew: [
      { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',     Icon: SiNextdotjs,   color: '#000000' },
      { name: 'TypeScript',  Icon: SiTypescript,  color: '#3178C6' },
      { name: 'Tailwind',    Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer',      Icon: SiFramer,      color: '#0055FF' },
    ],
  },
  {
    dept: 'Sound Engineering',
    subtitle: 'Backend',
    crew: [
      { name: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
      { name: 'Python',      Icon: SiPython,      color: '#3776AB' },
      { name: 'FastAPI',     Icon: SiFastapi,     color: '#009688' },
      { name: 'PostgreSQL',  Icon: SiPostgresql,  color: '#4169E1' },
      { name: 'Supabase',    Icon: SiSupabase,    color: '#3FCF8E' },
    ],
  },
  {
    dept: 'Special Effects',
    subtitle: 'AI / LLM',
    crew: [
      { name: 'OpenAI',      Icon: SiOpenai,      color: '#412991' },
      { name: 'Anthropic',   Icon: SiAnthropic,   color: '#CC785C' },
      { name: 'Gemini',      Icon: SiGoogle,      color: '#4285F4' },
    ],
  },
  {
    dept: 'Editing & Post',
    subtitle: 'Automation',
    crew: [
      { name: 'n8n',         Icon: SiN8N,         color: '#EA4B71' },
      { name: 'Zapier',      Icon: SiZapier,      color: '#FF4A00' },
      { name: 'WhatsApp',    Icon: SiWhatsapp,    color: '#25D366' },
    ],
  },
  {
    dept: 'Production',
    subtitle: 'Tools & Infra',
    crew: [
      { name: 'Docker',      Icon: SiDocker,      color: '#2496ED' },
      { name: 'Git',         Icon: SiGit,         color: '#F05032' },
      { name: 'GitHub',      Icon: SiGithub,      color: '#181717' },
      { name: 'Vercel',      Icon: SiVercel,      color: '#000000' },
      { name: 'Figma',       Icon: SiFigma,       color: '#F24E1E' },
      { name: 'VS Code',     Icon: VscVscode,     color: '#007ACC' },
    ],
  },
]
