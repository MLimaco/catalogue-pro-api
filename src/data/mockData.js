export const generateMockData = () => {
    const products = new Map();
    const categories = new Map();
  
    // Create categories
    const computerCategory = {
      id: Date.now(),
      name: "Computers",
      description: "Desktop and laptop computers",
      slug: "computers",
      active: true
    };
    
    const peripheralsCategory = {
      id: Date.now() + 1,
      name: "Peripherals",
      description: "Computer peripherals",
      slug: "peripherals",
      active: true
    };
  
    const componentsCategory = {
      id: Date.now() + 2,
      name: "Components",
      description: "Computer components",
      slug: "components",
      active: true
    };
  
    categories.set(computerCategory.id, computerCategory);
    categories.set(peripheralsCategory.id, peripheralsCategory);
    categories.set(componentsCategory.id, componentsCategory);
  
    // Create sample products
    const sampleProducts = [
      { name: "Gaming Laptop", price: 1200, categoryId: computerCategory.id },
      { name: "Desktop PC", price: 800, categoryId: computerCategory.id },
      { name: "Gaming Mouse", price: 50, categoryId: peripheralsCategory.id },
      { name: "Mechanical Keyboard", price: 100, categoryId: peripheralsCategory.id },
      { name: "RAM 16GB", price: 80, categoryId: componentsCategory.id }
    ];
  
    sampleProducts.forEach(product => {
      const id = Date.now() + Math.random();
      products.set(id, {
        id,
        ...product,
        stock: Math.floor(Math.random() * 100),
        status: true,
        images: [`https://picsum.photos/200?random=${id}`]
      });
    });
  
    return { products, categories };
  };