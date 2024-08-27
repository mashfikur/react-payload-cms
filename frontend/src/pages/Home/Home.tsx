import Products from "@/components/Products/Products";
import ProductSidebar from "@/components/Products/ProductSidebar";

const Home = () => {
  return (
    <section className="container">
      <div className="flex items-start gap-6">
        <ProductSidebar />
        <Products />
      </div>
    </section>
  );
};

export default Home;
