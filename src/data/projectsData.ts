
export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  description: string;
  category: string;
  year: number;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Dubai Commercial Tower MEP Systems',
    client: 'Al Futtaim Group',
    location: 'Dubai, UAE',
    description: 'Complete MEP solution for a 40-story commercial tower, including HVAC, plumbing, and electrical systems.',
    category: 'Commercial',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p2',
    title: 'Abu Dhabi Hospital Gas System',
    client: 'SEHA Health',
    location: 'Abu Dhabi, UAE',
    description: 'Design and implementation of medical gas systems for a new 500-bed hospital, including oxygen, medical air, and vacuum systems.',
    category: 'Healthcare',
    year: 2021,
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p3',
    title: 'Residential Complex Plumbing Infrastructure',
    client: 'Emaar Properties',
    location: 'Dubai, UAE',
    description: 'Complete plumbing solution for a luxury residential complex with 200 apartments, including water supply, drainage, and fire protection systems.',
    category: 'Residential',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p4',
    title: 'Industrial Plant Steam System',
    client: 'ADNOC',
    location: 'Ruwais, UAE',
    description: 'Design and installation of high-pressure steam distribution system for an industrial manufacturing plant.',
    category: 'Industrial',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p5',
    title: 'Shopping Mall HVAC Upgrade',
    client: 'Majid Al Futtaim',
    location: 'Sharjah, UAE',
    description: 'Complete overhaul and upgrade of HVAC systems for a major shopping mall, improving energy efficiency and performance.',
    category: 'Commercial',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p6',
    title: 'Hotel Fire Protection System',
    client: 'Jumeirah Group',
    location: 'Dubai, UAE',
    description: 'Installation of comprehensive fire protection systems for a 5-star hotel, including sprinklers, alarms, and emergency response systems.',
    category: 'Hospitality',
    year: 2021,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
];
