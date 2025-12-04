// app/[locale]/data/projects.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  admin_dashboard?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'yettibuloq_shifo_title',
    description: 'yettibuloq_shifo_description',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker'],
    live: 'https://yettibuloq-shifo.uz',
    admin_dashboard: [
      'admin_dashboards/Screenshot from 2025-12-04 14-15-08.png',
      'admin_dashboards/Screenshot from 2025-12-04 14-15-20.png',
      'admin_dashboards/Screenshot from 2025-12-04 14-15-33.png',
      'admin_dashboards/Screenshot from 2025-12-04 14-15-44.png',
      'admin_dashboards/Screenshot from 2025-12-04 14-15-55.png',
      'admin_dashboards/Screenshot from 2025-12-04 14-16-34.png',
    ],
    featured: true
  },
  {
    title: 'tasbeh_bot_title',
    description: 'tasbeh_bot_description',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Telegram API', 'Tailwind CSS'],
    github: 'https://github.com/Bobur815/tasbeh-bot',
    live: 'https://t.me/TasbehCounterBot',
    featured: true
  },
  {
    title: 'savdochef_title',
    description: 'savdochef_description',
    tags: ['Electron', 'Node.js', 'Express', 'SQLite', 'Prisma'],
    github: 'https://github.com/Bobur815/restaurant-app',
    admin_dashboard: [
      'savdochef/photo_2025-12-04_15-14-08 (2).jpg',
      'savdochef/photo_2025-12-04_15-14-08.jpg',
      'savdochef/photo_2025-12-04_15-14-09.jpg',
      'savdochef/photo_2025-12-04_15-14-09 (2).jpg',
      'savdochef/photo_2025-12-04_15-14-09 (3).jpg'
    ],
    featured: false,
    live: '#'
  },
  {
    title: 'todo_app_title',
    description: 'todo_app_description',
    tags: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/Bobur815/todo_list-in-React',
    live: 'https://charming-pika-6daa39.netlify.app/',
    featured: false
  }
];