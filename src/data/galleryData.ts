
export interface GalleryImage {
  id: string;
  title: string;
  category: 'products' | 'projects' | 'operations' | 'team';
  image: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Valve Assembly',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'High-quality industrial valves ready for installation.',
  },
  {
    id: 'g2',
    title: 'Pipe Fittings',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Various pipe fittings for different applications.',
  },
  {
    id: 'g3',
    title: 'Dubai Commercial Tower',
    category: 'projects',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Completed MEP installation at Dubai Commercial Tower.',
  },
  {
    id: 'g4',
    title: 'Hospital Gas System',
    category: 'projects',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Medical gas system installation at a leading hospital.',
  },
  {
    id: 'g5',
    title: 'Warehouse Operations',
    category: 'operations',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Our warehouse operations ensuring efficient logistics.',
  },
  {
    id: 'g6',
    title: 'Quality Control',
    category: 'operations',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Quality control process for industrial products.',
  },
  {
    id: 'g7',
    title: 'Technical Team',
    category: 'team',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Our technical team providing expert consultation.',
  },
  {
    id: 'g8',
    title: 'Management Team',
    category: 'team',
    image: 'https://images.unsplash.com/photo-1552845108-5c1b2c410cde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Al Shamry Trading management team.',
  },
  {
    id: 'g9',
    title: 'Industrial Valves',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1565557037143-85025ffd9a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Range of industrial valves for various applications.',
  },
  {
    id: 'g10',
    title: 'Project Installation',
    category: 'projects',
    image: 'https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'On-site installation of MEP systems.',
  },
  {
    id: 'g11',
    title: 'Logistics Operations',
    category: 'operations',
    image: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Efficient logistics operations ensuring timely delivery.',
  },
  {
    id: 'g12',
    title: 'Customer Support Team',
    category: 'team',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    description: 'Our dedicated customer support team.',
  },
];
