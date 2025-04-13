
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import PageBanner from '../../components/ui/PageBanner';
import ProductCard from '../../components/products/ProductCard';
import ProductFilterDropdown from '../../components/products/ProductFilterDropdown';
import { 
  valveProducts, 
  fittingProducts, 
  pipeProducts, 
  accessoryProducts 
} from '../../data/productsData';
import { 
  Product, 
  ValveProduct, 
  FittingProduct, 
  PipeProduct,
  AccessoryProduct
} from '../../types/product';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Filter states
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  
  // Options for filters
  const [materialOptions, setMaterialOptions] = useState<{ value: string; label: string }[]>([]);
  const [typeOptions, setTypeOptions] = useState<{ value: string; label: string }[]>([]);
  const [brandOptions, setBrandOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    if (!category) {
      navigate('/products/valves');
      return;
    }

    // Load products based on the category
    let categoryProducts: Product[] = [];
    switch (category) {
      case 'valves':
        categoryProducts = valveProducts;
        break;
      case 'fittings':
        categoryProducts = fittingProducts;
        break;
      case 'pipes':
        categoryProducts = pipeProducts;
        break;
      case 'accessories':
        categoryProducts = accessoryProducts;
        break;
      default:
        navigate('/products/valves');
        return;
    }

    // Check for material or type filter from URL query params
    const materialParam = searchParams.get('material');
    const typeParam = searchParams.get('type');
    const brandParam = searchParams.get('brand');

    // Set products and filter states
    setProducts(categoryProducts);
    setSelectedMaterial(materialParam || '');
    setSelectedType(typeParam || '');
    setSelectedBrand(brandParam || '');
    
    // Generate filter options based on the category
    generateFilterOptions(categoryProducts, category);
  }, [category, navigate, searchParams]);

  useEffect(() => {
    applyFilters();
  }, [selectedMaterial, selectedType, selectedBrand, products]);

  const generateFilterOptions = (categoryProducts: Product[], category: string) => {
    // Generate unique material options
    const materialSet = new Set<string>();
    const typeSet = new Set<string>();
    const brandSet = new Set<string>();

    categoryProducts.forEach((product) => {
      // Material options
      if (category === 'valves') {
        materialSet.add((product as ValveProduct).material);
      } else if (category === 'fittings') {
        materialSet.add((product as FittingProduct).material);
      } else if (category === 'pipes') {
        materialSet.add((product as PipeProduct).material);
      }

      // Type options
      typeSet.add(product.type);

      // Brand options
      if (product.brand) {
        brandSet.add(product.brand);
      }
    });

    // Convert to options format
    const materialOptionsArray = Array.from(materialSet).map(material => ({
      value: material,
      label: formatLabel(material),
    }));

    const typeOptionsArray = Array.from(typeSet).map(type => ({
      value: type,
      label: type,
    }));

    const brandOptionsArray = Array.from(brandSet).map(brand => ({
      value: brand,
      label: brand,
    }));

    setMaterialOptions(materialOptionsArray);
    setTypeOptions(typeOptionsArray);
    setBrandOptions(brandOptionsArray);
  };

  const formatLabel = (value: string): string => {
    // Convert kebab-case to Title Case with spaces
    return value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Apply material filter if selected
    if (selectedMaterial) {
      if (category === 'valves') {
        filtered = filtered.filter((product) => 
          (product as ValveProduct).material === selectedMaterial
        );
      } else if (category === 'fittings') {
        filtered = filtered.filter((product) => 
          (product as FittingProduct).material === selectedMaterial
        );
      } else if (category === 'pipes') {
        filtered = filtered.filter((product) => 
          (product as PipeProduct).material === selectedMaterial
        );
      }
    }

    // Apply type filter if selected
    if (selectedType) {
      filtered = filtered.filter((product) => product.type === selectedType);
    }

    // Apply brand filter if selected
    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    setFilteredProducts(filtered);
  };

  const getCategoryTitle = (): string => {
    switch (category) {
      case 'valves':
        return 'Valves';
      case 'fittings':
        return 'Fittings';
      case 'pipes':
        return 'Pipes';
      case 'accessories':
        return 'Accessories';
      default:
        return 'Products';
    }
  };

  const getCategoryDescription = (): string => {
    switch (category) {
      case 'valves':
        return 'High-quality valves including brass, bronze, carbon steel, cast iron, stainless steel, and forged steel options.';
      case 'fittings':
        return 'Comprehensive range of fittings for all your plumbing and industrial needs, available in various materials and configurations.';
      case 'pipes':
        return 'Premium quality pipes for a wide range of applications, from standard plumbing to specialized industrial systems.';
      case 'accessories':
        return 'Essential accessories to complete your installation, including test plugs, couplings, clamps, threaded rods, and fasteners.';
      default:
        return 'Explore our wide range of high-quality industrial products.';
    }
  };

  return (
    <PageLayout>
      <PageBanner 
        title={getCategoryTitle()} 
        subtitle={getCategoryDescription()}
        backgroundImage={
          category === 'valves' 
            ? "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            : category === 'fittings'
            ? "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            : category === 'pipes'
            ? "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            : "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        }
      />

      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <a 
              href="/products/valves" 
              className={`px-6 py-2 rounded-full font-medium ${
                category === 'valves' 
                  ? 'bg-navy text-white' 
                  : 'bg-white text-navy hover:bg-navy/10 border border-gray-200'
              }`}
            >
              Valves
            </a>
            <a 
              href="/products/fittings" 
              className={`px-6 py-2 rounded-full font-medium ${
                category === 'fittings' 
                  ? 'bg-navy text-white' 
                  : 'bg-white text-navy hover:bg-navy/10 border border-gray-200'
              }`}
            >
              Fittings
            </a>
            <a 
              href="/products/pipes" 
              className={`px-6 py-2 rounded-full font-medium ${
                category === 'pipes' 
                  ? 'bg-navy text-white' 
                  : 'bg-white text-navy hover:bg-navy/10 border border-gray-200'
              }`}
            >
              Pipes
            </a>
            <a 
              href="/products/accessories" 
              className={`px-6 py-2 rounded-full font-medium ${
                category === 'accessories' 
                  ? 'bg-navy text-white' 
                  : 'bg-white text-navy hover:bg-navy/10 border border-gray-200'
              }`}
            >
              Accessories
            </a>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-lg font-bold text-navy mb-4">Filter Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materialOptions.length > 0 && (
                <ProductFilterDropdown
                  label="Material"
                  options={materialOptions}
                  selectedValue={selectedMaterial}
                  onChange={setSelectedMaterial}
                />
              )}
              {typeOptions.length > 0 && (
                <ProductFilterDropdown
                  label="Type"
                  options={typeOptions}
                  selectedValue={selectedType}
                  onChange={setSelectedType}
                />
              )}
              {brandOptions.length > 0 && (
                <ProductFilterDropdown
                  label="Brand"
                  options={brandOptions}
                  selectedValue={selectedBrand}
                  onChange={setSelectedBrand}
                />
              )}
            </div>
          </div>

          {/* Filtered category title */}
          {selectedMaterial && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy">
                {formatLabel(selectedMaterial)} {getCategoryTitle()}
              </h2>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
