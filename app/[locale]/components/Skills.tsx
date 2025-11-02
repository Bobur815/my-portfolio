// imports (pick the ones you use)
import Code from '@mui/icons-material/Code';
import Storage from '@mui/icons-material/Storage';
import RocketLaunch from '@mui/icons-material/RocketLaunch'; // CI/CD
import Lan from '@mui/icons-material/Lan';                    // Microservices/Architecture
import Hub from '@mui/icons-material/Hub';                    // Messaging (RabbitMQ)
import ElectricBolt from '@mui/icons-material/ElectricBolt';  // Electron.js

type Skill = {
  icon: React.ReactElement;
  title: string;
  items: string[];
};

const skills: Skill[] = [
  { 
    icon: <Code sx={{ fontSize: 40 }} />, 
    title: 'Frontend', 
    items: ['React', 'Next.js', 'Tailwind CSS', 'Material-UI']
  },
  { 
    icon: <Storage sx={{ fontSize: 40 }} />, 
    title: 'Backend', 
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Nest.js'] // ← added
  },
  {
    icon: <RocketLaunch sx={{ fontSize: 40 }} />,
    title: 'DevOps',
    items: ['CI/CD', 'Docker'] // ← added
  },
  {
    icon: <Lan sx={{ fontSize: 40 }} />,
    title: 'Architecture',
    items: ['Microservices'] // ← added
  },
  {
    icon: <Hub sx={{ fontSize: 40 }} />,
    title: 'Messaging',
    items: ['RabbitMQ'] // ← added
  },
  {
    icon: <ElectricBolt sx={{ fontSize: 40 }} />,
    title: 'Desktop',
    items: ['Electron.js'] // ← added
  }
];

export default skills;
