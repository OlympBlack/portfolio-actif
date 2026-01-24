export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    tech: string[];
    stats: { label: string; value: string }[];
    features: string[];
    images: string[];
    links: {
        demo?: string;
        code?: string;
        design?: string;
    };
}

export const projects: Project[] = [
    {
        id: 'karicv',
        title: 'KariCV',
        description: 'Générateur de CV professionnel avec export PDF optimisé.',
        fullDescription: 'Un générateur de CV moderne et intuitif conçu pour le marché africain francophone, permettant aux utilisateurs de créer, personnaliser et exporter des CV optimisés ATS en quelques minutes.',
        tags: ['React', 'Tailwind', 'PDF'],
        tech: ['React', 'TailwindCSS', 'PDF Generation'],
        stats: [
            { value: '6+', label: 'Modèles de CV' },
            { value: '100%', label: 'Client-Side' },
            { value: 'Fast', label: 'Export PDF' },
        ],
        features: [
            'Éditeur en temps réel avec prévisualisation',
            'Système de modèles interchangeables',
            'Export PDF pixel-perfect compatible A4',
            'Fonctionnement local (Privacy first)',
            'Mode sombre et thèmes personnalisables'
        ],
        images: ['/images/karicv/Capture d\'écran 2026-01-20 171049.png', '/images/karicv/Capture d\'écran 2026-01-20 170450.png'],
        links: {
            demo: 'https://karicv.vercel.app/',
            
        }
    },
    {
        id: 'web-scraper',
        title: 'Web Scraper',
        description: 'Extraction automatisée de données avec suivi temps réel.',
        fullDescription: 'Une application web puissante combinant un backend Python pour le scraping et une interface Nuxt.js réactive. Suivi de progression via Server-Sent Events.',
        tags: ['Nuxt', 'Python', 'Supabase'],
        tech: ['Nuxt 3', 'Python', 'Supabase', 'SSE'],
        stats: [
            { value: 'Real-time', label: 'Suivi SSE' },
            { value: 'Auto', label: 'Scraping' },
            { value: 'Cloud', label: 'Storage   ' },
        ],
        features: [
            'Backend Python partagé',
            'Communication temps réel (SSE)',
            'Stockage Supabase Storage',
            'Gestion des erreurs et retries'
        ],
        images: ['/images/scraper/interface.png'],
        links: {
            code: 'https://github.com/OlympBlack/Web-Scraper'
        }
    },
    {
        id: 'cheazimo',
        title: 'Cheazimo',
        description: 'Plateforme immobilière innovante pour le marché béninois.',
        fullDescription: 'La solution immobilière de nouvelle génération pour le Bénin. Connecte propriétaires, agents et chercheurs de biens.',
        tags: ['React', 'Laravel', 'PWA'],
        tech: ['React', 'Laravel', 'TailwindCSS', 'PWA'],
        stats: [
            { value: 'Fluid', label: 'UX' },
            { value: 'API', label: 'Laravel' },
            { value: 'Mobile', label: 'PWA' },
        ],
        features: [
            'Moteur de recherche multicritères',
            'Système de favoris',
            'Carte interactive',
            'Notifications push'
        ],
        images: ['/images/cheazimo/hero_imo.png'],
        links: {
            demo: 'http://cheazimo.com/'
        }
    },
    {
        id: 'electrojardin',
        title: 'ElectroJardin',
        description: "E-commerce complet avec gestion de stock et paiements.",
        fullDescription: "Une plateforme e-commerce complète dédiée à la vente d'équipements de jardinage électroniques avec tunnel de vente sécurisé.",
        tags: ['Laravel', 'Stripe'],
        tech: ['Laravel', 'Stripe', 'Bootstrap', 'MySQL'],
        stats: [
            { value: 'Secure', label: 'Paiement' },
            { value: 'Admin', label: 'Dashboard' },
            { value: 'Stock', label: 'Gestion' }
        ],
        features: [
            'Catalogue produits filtrable',
            'Paiement Stripe',
            'Dashboard Admin',
            'Factures PDF auto'
        ],
        images: ['/images/electrojardin/Capture d\'écran 2025-09-17 190416.png'],
        links: {
            demo: 'https://electrojardin.com/',
        }
    },
    {
        id: 'dms',
        title: 'DMS Plateforme',
        description: 'Gestion multiservices et relations clients centralisée.',
        fullDescription: 'Une Progressive Web App (PWA) développée pour Delco Multi Services, centralisant la gestion de services et la relation client.',
        tags: ['PWA', 'Web'],
        tech: ['PWA', 'Javascript', 'HTML/CSS'],
        stats: [
            { value: 'Central', label: 'Services' },
            { value: 'PWA', label: 'Installable' },
            { value: 'Fast', label: 'Perf' }
        ],
        features: [
            'Présentation centralisée',
            'Prise de contact / Devis',
            'Expérience App Native',
            'Offline partial support'
        ],
        images: ['/images/dms/Capture d\'écran 2025-09-18 150438.png', '/images/dms/Capture d\'écran 2025-09-18 150533.png'],
        links: {
            demo: 'http://delcomultiservices.com/'
        }
    },
    {
        id: 'artisan-circuit',
        title: 'Artisan Circuit',
        description: "Maquette UI/UX pour une marketplace d'artisans.",
        fullDescription: "Conception complète de l'interface utilisateur (UI) et UX pour une marketplace dédiée aux artisans locaux.",
        tags: ['Figma', 'UI Design'],
        tech: ['Figma', 'Prototyping', 'Design System'],
        stats: [
            { value: 'Design', label: 'System' },
            { value: 'UX', label: 'Parcours' },
            { value: 'Mobile', label: 'Responsive' }
        ],
        features: [
            'Charte graphique moderne',
            'Parcours d\'achat intuitif',
            'Design System complet',
            'Prototypage interactif'
        ],
        images: ['/images/figma-maketplace/Capture d\'écran 2025-09-19 144642.png', '/images/figma-maketplace/Capture d\'écran 2025-09-19 144102.png'],
        links: {
            design: 'https://www.figma.com/proto/f98DfEgdCLP0VQmHCNr046/Module-8?page-id=0%3A1&node-id=161-254&p=f&viewport=4063%2C1828%2C0.03&t=hs3KHSV3GUTf3CXQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2'
        }
    }
];

export const skills = {
    frontend: ['React', 'Nuxt.js', 'TailwindCSS', 'bootstrap', 'TypeScript', 'HTML5/CSS3'],
    backend: ['Laravel', 'PHP', 'Python', 'Django'],
    db: ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
    tools: ['Git', 'Docker', 'Figma', 'Vercel', 'render', 'Linux']
};

export const toolsList = [
    
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
    { name: 'CapCut', icon: 'data:image/png;base64,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' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'SupaBase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
   
];
