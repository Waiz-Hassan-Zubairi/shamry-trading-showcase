
export interface SubCategory {
  name: string;
  path: string;
}

export interface ProductCategory {
  name: string;
  path: string;
  subCategories: SubCategory[];
}
