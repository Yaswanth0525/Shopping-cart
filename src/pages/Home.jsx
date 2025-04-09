function Home() {
    return (
        <div
            className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/mockup-small-online-shopping-cart-ecommerce-product-ordering-receiving-concept-ecommerce-online-shopping-mockup-design-product-ordering-user-interface_918839-121304.jpg')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0"></div>

            {/* Content */}
            <div
                className="relative text-center text-white p-8 rounded-xl shadow-lg max-w-screen-md w-full mx-4  bg-opacity-50 backdrop-blur-sm"
            >
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    Welcome to Your Online Shopping Platform
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed">
                    Explore a seamless shopping experience. Browse products, add to your cart, and place orders effortlessly.
                </p>
            </div>

        </div>
    );
}

export default Home;
