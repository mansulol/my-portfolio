import reactIcon from '@/assets/icons/react.svg';
import flutterIcon from '@/assets/icons/flutter.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';
import nodejsIcon from '@/assets/icons/nodejs.svg';
import mongodbIcon from '@/assets/icons/mongodb.svg';
import pythonIcon from '@/assets/icons/python.svg';
import vuejsIcon from '@/assets/icons/vuejs.svg';

//  Types
import type { programmingLanguages } from '@/types/project.type';

const programingLanguages: programmingLanguages[] = [
   {
      name: 'React',
      icon: reactIcon,
   },
   {
      name: 'Flutter',
      icon: flutterIcon,
   },
   {
      name: 'TypeScript',
      icon: typescriptIcon,
   },
   {
      name: 'Node JS',
      icon: nodejsIcon,
   },
   {
      name: 'MongoDB',
      icon: mongodbIcon,
   },
   {
      name: 'Python',
      icon: pythonIcon,
   },
   {
      name: 'Vue JS',
      icon: vuejsIcon,
   },
]
export default programingLanguages;