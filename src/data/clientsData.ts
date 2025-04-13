
export interface Client {
  id: string;
  name: string;
  industry: ClientIndustry;
  logo: string;
  description?: string;
}

export type ClientIndustry = 
  | 'Construction'
  | 'Oil & Gas'
  | 'Healthcare'
  | 'Hospitality'
  | 'Government'
  | 'Real Estate'
  | 'Manufacturing'
  | 'Retail';

export const clients: Client[] = [
  {
    id: 'c1',
    name: 'Al Futtaim Group',
    industry: 'Construction',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Leading construction and development company in the UAE.',
  },
  {
    id: 'c2',
    name: 'ADNOC',
    industry: 'Oil & Gas',
    logo: 'https://images.unsplash.com/photo-1465194426341-3c777c867dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Abu Dhabi National Oil Company, one of the world\'s leading energy producers.',
  },
  {
    id: 'c3',
    name: 'SEHA Health',
    industry: 'Healthcare',
    logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Abu Dhabi Health Services Company, the largest healthcare network in the UAE.',
  },
  {
    id: 'c4',
    name: 'Jumeirah Group',
    industry: 'Hospitality',
    logo: 'https://images.unsplash.com/photo-1492572350793-11345c61a2b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Global luxury hotel company and a member of Dubai Holding.',
  },
  {
    id: 'c5',
    name: 'Dubai Municipality',
    industry: 'Government',
    logo: 'https://images.unsplash.com/photo-1513557294991-93c606fabe0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Government entity responsible for Dubai\'s urban planning and infrastructure development.',
  },
  {
    id: 'c6',
    name: 'Emaar Properties',
    industry: 'Real Estate',
    logo: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'One of the largest real estate developers in the UAE and internationally.',
  },
  {
    id: 'c7',
    name: 'Emirates Steel',
    industry: 'Manufacturing',
    logo: 'https://images.unsplash.com/photo-1533219057257-4bb9ed5f2923?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'The largest steel producer in the UAE.',
  },
  {
    id: 'c8',
    name: 'Majid Al Futtaim',
    industry: 'Retail',
    logo: 'https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Leading shopping mall, retail, and leisure pioneer across the Middle East and North Africa.',
  },
  {
    id: 'c9',
    name: 'Dubai Holding',
    industry: 'Real Estate',
    logo: 'https://images.unsplash.com/photo-1552845108-5c1b2c410cde?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Global investment holding company with interests across 10 sectors.',
  },
  {
    id: 'c10',
    name: 'Cleveland Clinic Abu Dhabi',
    industry: 'Healthcare',
    logo: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Multispecialty hospital in Abu Dhabi, a part of Mubadala Health.',
  },
  {
    id: 'c11',
    name: 'Etihad Airways',
    industry: 'Hospitality',
    logo: 'https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'The national airline of the UAE, based in Abu Dhabi.',
  },
  {
    id: 'c12',
    name: 'Aldar Properties',
    industry: 'Real Estate',
    logo: 'https://images.unsplash.com/photo-1582004529199-66eccdf18f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=160&q=80',
    description: 'Leading real estate developer and manager in Abu Dhabi.',
  },
];
