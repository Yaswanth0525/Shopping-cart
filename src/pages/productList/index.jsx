import { useContext } from "react";
import { ShoppingCartContext } from "../../context/indexs";
import ProductTile from "../../components/productTile";

function ProductListPage() {
    const { loading, listOfProducts,handleViewCart } = useContext(ShoppingCartContext);

    if (loading) {
        return <h1>Loading data...Please wait!!!</h1>;
    }

    return (
        <div>
            <section className="py-6 bg- sm:py-8 md:py-12 lg:py-16 xl:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between w-full">
                        <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl mx-auto">Our Featured Products</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-10 lg:gap-8 lg:grid-cols-4">
                        {
                            listOfProducts && listOfProducts.length > 0 ?
                                listOfProducts.map((singleProduct) => <ProductTile singleProduct={singleProduct} />) :
                                <h3>No data Found</h3>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductListPage;