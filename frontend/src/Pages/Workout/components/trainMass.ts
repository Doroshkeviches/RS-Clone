import backImg from '../../../Assets/back.jpg';
import deltoidImg from '../../../Assets/deltoid.jpg';
import bicepsImg from '../../../Assets/biceps.jpg';
import pectoralisImg from '../../../Assets/pectoralis.jpg';
import tricepsImg from '../../../Assets/triceps.jpg';
import abdominalImg from '../../../Assets/abdominal.jpg';
import { trainObj } from './interface';

export const WorkoutList: trainObj[] = [
  {
    img: backImg,
    name: 'trapezius',
  },
  {
    img: deltoidImg,
    name: 'deltoid',
  },
  {
    img: pectoralisImg,
    name: 'pectoralis major',
  },
  {
    img: bicepsImg,
    name: 'biceps',
  },
  {
    img: tricepsImg,
    name: 'triceps',
  },
  {
    img: abdominalImg,
    name: 'abdominal',
  },
];
