
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import { allProducts } from '../../data/productsData';
import { Product, ValveProduct, FittingProduct, PipeProduct, AccessoryProduct } from '../../types/product';
import { ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = allProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);

      // Find related products (same category, different ID)
      const related = allProducts
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 3); // Limit to 3 related products
      
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <PageLayout>
        <div className="container-custom py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
            <Link to={`/products/${category}`} className="btn-primary">
              Return to Products
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Helper function to format material names
  const formatMaterial = (material: string): string => {
    return material
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <PageLayout>
      <div className="bg-light-grey py-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to={`/products/${product.category}`} className="flex items-center text-navy hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-navy mb-2">{product.name}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-navy/10 text-navy text-sm px-3 py-1 rounded-full">
                      {product.type}
                    </span>
                    <span className="bg-gold/10 text-gold text-sm px-3 py-1 rounded-full">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Common specifications */}
                    <div className="text-sm">
                      <p className="text-gray-600 mb-1">Category:</p>
                      <p className="font-medium">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-600 mb-1">Type:</p>
                      <p className="font-medium">{product.type}</p>
                    </div>
                    
                    {/* Brand (if available) */}
                    {product.brand && (
                      <div className="text-sm">
                        <p className="text-gray-600 mb-1">Brand:</p>
                        <p className="font-medium">{product.brand}</p>
                      </div>
                    )}

                    {/* Category-specific specifications */}
                    {product.category === 'valves' && (
                      <>
                        <div className="text-sm">
                          <p className="text-gray-600 mb-1">Material:</p>
                          <p className="font-medium">{formatMaterial((product as ValveProduct).material)}</p>
                        </div>
                        <div className="text-sm">
                          <p className="text-gray-600 mb-1">Valve Type:</p>
                          <p className="font-medium">{formatMaterial((product as ValveProduct).valveType)}</p>
                        </div>
                      </>
                    )}

                    {product.category === 'fittings' && (
                      <>
                        <div className="text-sm">
                          <p className="text-gray-600 mb-1">Material:</p>
                          <p className="font-medium">{formatMaterial((product as FittingProduct).material)}</p>
                        </div>
                        <div className="text-sm">
                          <p className="text-gray-600 mb-1">Fitting Type:</p>
                          <p className="font-medium">{formatMaterial((product as FittingProduct).fittingType)}</p>
                        </div>
                      </>
                    )}

                    {product.category === 'pipes' && (
                      <div className="text-sm">
                        <p className="text-gray-600 mb-1">Material:</p>
                        <p className="font-medium">{formatMaterial((product as PipeProduct).material)}</p>
                      </div>
                    )}

                    {product.category === 'accessories' && (
                      <div className="text-sm">
                        <p className="text-gray-600 mb-1">Accessory Type:</p>
                        <p className="font-medium">{formatMaterial((product as AccessoryProduct).accessoryType)}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-navy mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div 
                    key={relatedProduct.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                      <Link 
                        to={`/products/${relatedProduct.category}/${relatedProduct.id}`}
                        className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
