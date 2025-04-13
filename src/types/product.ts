
export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  type: string;
  brand?: string;
  image: string;
}

export type ProductCategory = 'valves' | 'fittings' | 'pipes' | 'accessories';

export interface ValveProduct extends Product {
  category: 'valves';
  material: ValveMaterial;
  valveType: string;
}

export interface FittingProduct extends Product {
  category: 'fittings';
  material: FittingMaterial;
  fittingType: string;
}

export interface PipeProduct extends Product {
  category: 'pipes';
  material: PipeMaterial;
}

export interface AccessoryProduct extends Product {
  category: 'accessories';
  accessoryType: string;
}

export type ValveMaterial = 'brass' | 'bronze' | 'carbon-steel' | 'cast-iron' | 'stainless-steel' | 'forged-steel';
export type FittingMaterial = 'black-steel' | 'bmi' | 'forged-steel' | 'stainless-steel' | 'cast-iron' | 'grooved';
export type PipeMaterial = 'black-steel-erw' | 'black-steel-smls' | 'gi-pipes' | 'ss-erw' | 'ss-smls' | 'cast-iron';
