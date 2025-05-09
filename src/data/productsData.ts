
import { 
  ValveProduct, 
  FittingProduct, 
  PipeProduct, 
  AccessoryProduct 
} from '../types/product';

// Sample Valve Products
export const valveProducts: ValveProduct[] = [
  {
    id: 'v1',
    name: 'Brass Gate Valve',
    description: 'High-quality brass gate valve suitable for various applications.',
    category: 'valves',
    type: 'Gate',
    brand: 'Peglar',
    material: 'brass',
    valveType: 'gate',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'v2',
    name: 'Brass Ball Valve',
    description: 'Durable brass ball valve for controlling liquid flow.',
    category: 'valves',
    type: 'Ball',
    brand: 'Onda',
    material: 'brass',
    valveType: 'ball',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'v3',
    name: 'Bronze Check Valve',
    description: 'Premium bronze check valve to prevent backflow in piping systems.',
    category: 'valves',
    type: 'Check',
    brand: 'Crane',
    material: 'bronze',
    valveType: 'check',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'v4',
    name: 'Carbon Steel Gate Valve',
    description: 'Heavy-duty carbon steel gate valve for industrial applications.',
    category: 'valves',
    type: 'Gate',
    brand: 'Kitz',
    material: 'carbon-steel',
    valveType: 'gate',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'v5',
    name: 'Cast Iron Check Valve',
    description: 'Reliable cast iron check valve for water and waste systems.',
    category: 'valves',
    type: 'Check',
    brand: 'Mullar',
    material: 'cast-iron',
    valveType: 'check',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'v6',
    name: 'Stainless Steel Globe Valve',
    description: 'Premium stainless steel globe valve for precise flow control.',
    category: 'valves',
    type: 'Globe',
    brand: 'Kitz',
    material: 'stainless-steel',
    valveType: 'globe',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'v7',
    name: 'Forged Steel Gate Valve',
    description: 'High-pressure forged steel gate valve for oil and gas applications.',
    category: 'valves',
    type: 'Gate',
    brand: 'OMB',
    material: 'forged-steel',
    valveType: 'gate',
    image: 'https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'v8',
    name: 'Brass Foot Valve',
    description: 'Specialized brass foot valve for water pumping applications.',
    category: 'valves',
    type: 'Foot',
    brand: 'Peglar',
    material: 'brass',
    valveType: 'foot',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
];

// Sample Fitting Products
export const fittingProducts: FittingProduct[] = [
  {
    id: 'f1',
    name: 'Black Steel Elbow SCH-40',
    description: 'Welded black steel elbow fitting for 90° pipe connections.',
    category: 'fittings',
    type: 'Elbow',
    brand: 'Benken',
    material: 'black-steel',
    fittingType: 'elbow',
    image: 'https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'f2',
    name: 'Black Steel Tee SCH-40',
    description: 'Welded black steel tee fitting for three-way pipe connections.',
    category: 'fittings',
    type: 'Tee',
    brand: 'Benken',
    material: 'black-steel',
    fittingType: 'tee',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'f3',
    name: 'BMI Elbow Fitting',
    description: 'High-quality BMI elbow fitting for plumbing applications.',
    category: 'fittings',
    type: 'Elbow',
    brand: 'Hitachi',
    material: 'bmi',
    fittingType: 'elbow',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'f4',
    name: 'Forged Steel Thread Elbow',
    description: 'Durable forged steel threaded elbow for high-pressure applications.',
    category: 'fittings',
    type: 'Elbow',
    brand: 'Mega',
    material: 'forged-steel',
    fittingType: 'elbow',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'f5',
    name: 'SS 316 Threaded Tee',
    description: 'Corrosion-resistant stainless steel 316 threaded tee fitting.',
    category: 'fittings',
    type: 'Tee',
    brand: 'Taiwan',
    material: 'stainless-steel',
    fittingType: 'tee',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'f6',
    name: 'Cast Iron P Trap',
    description: 'Heavy-duty cast iron P trap for drainage systems.',
    category: 'fittings',
    type: 'P Trap',
    material: 'cast-iron',
    fittingType: 'p-trap',
    image: 'https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'f7',
    name: 'Grooved Coupling',
    description: 'Heavy-duty grooved coupling for pipe connections.',
    category: 'fittings',
    type: 'Coupling',
    material: 'grooved',
    fittingType: 'coupling',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'f8',
    name: 'Grooved Tee',
    description: 'Reliable grooved tee fitting for three-way pipe connections.',
    category: 'fittings',
    type: 'Tee',
    material: 'grooved',
    fittingType: 'tee',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
];

// Sample Pipe Products
export const pipeProducts: PipeProduct[] = [
  {
    id: 'p1',
    name: 'Black Steel ERW Pipe SCH-40',
    description: 'Electric Resistance Welded black steel pipe for general applications.',
    category: 'pipes',
    type: 'Black Steel ERW',
    brand: 'Jasco',
    material: 'black-steel-erw',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p2',
    name: 'Black Steel SMLS Pipe SCH-40',
    description: 'Seamless black steel pipe for high-pressure applications.',
    category: 'pipes',
    type: 'Black Steel SMLS',
    brand: 'NKK',
    material: 'black-steel-smls',
    image: 'https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p3',
    name: 'GI Pipe Medium',
    description: 'Galvanized iron pipe for water distribution systems.',
    category: 'pipes',
    type: 'GI Pipes',
    brand: 'Jazeera',
    material: 'gi-pipes',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p4',
    name: 'SS 316 ERW Pipe SCH-10',
    description: 'Stainless steel 316 electric resistance welded pipe for corrosive environments.',
    category: 'pipes',
    type: 'SS ERW',
    brand: 'Froch',
    material: 'ss-erw',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p5',
    name: 'SS 316 SMLS Pipe SCH-10',
    description: 'Seamless stainless steel 316 pipe for high-pressure corrosive applications.',
    category: 'pipes',
    type: 'SS SMLS',
    material: 'ss-smls',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'p6',
    name: 'Cast Iron Pipe',
    description: 'Heavy-duty cast iron pipe for drainage and waste systems.',
    category: 'pipes',
    type: 'Cast Iron',
    brand: 'Charlotte',
    material: 'cast-iron',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
];

// Sample Accessory Products
export const accessoryProducts: AccessoryProduct[] = [
  {
    id: 'a1',
    name: 'Test Plug',
    description: 'Test plug for pressure testing in plumbing systems.',
    category: 'accessories',
    type: 'Test Plug',
    accessoryType: 'test-plug',
    image: 'https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'a2',
    name: 'No Hub Coupling',
    description: 'No hub coupling for connecting cast iron pipes.',
    category: 'accessories',
    type: 'No Hub Coupling',
    accessoryType: 'coupling',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'a3',
    name: 'Pipe Clamp',
    description: 'Adjustable pipe clamp for securing pipes to structures.',
    category: 'accessories',
    type: 'Clamp',
    accessoryType: 'clamp',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'a4',
    name: 'Threaded Rod',
    description: 'Galvanized threaded rod for hanging and supporting systems.',
    category: 'accessories',
    type: 'Threaded Rod',
    accessoryType: 'threaded-rod',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 'a5',
    name: 'Hexagonal Bolts and Washers Set',
    description: 'Complete set of hexagonal bolts and washers for industrial applications.',
    category: 'accessories',
    type: 'Bolts and Washers',
    accessoryType: 'bolts-washers',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  },
];

// Export all products in one array
export const allProducts = [
  ...valveProducts,
  ...fittingProducts,
  ...pipeProducts,
  ...accessoryProducts,
];
