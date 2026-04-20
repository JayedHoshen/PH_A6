import { CiShoppingCart } from "react-icons/ci";
import Selected from "./Selected";
import { toast } from "react-toastify";

const Cart = ({ selectedProduct, setSelectedProduct }) => {
  const totalSum = selectedProduct.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  const handleDeleteSelectedProduct = (product) => {
    const filteredProducts = selectedProduct.filter(
      (sp) => sp.name !== product.name,
    );
    setSelectedProduct(filteredProducts);
    toast.error(`${product.name} is deleted`);
  };

  const handleDeleteAllProducts = () => {
    if (selectedProduct.length > 0) {
      toast.info("Your purchase is successful");
      setSelectedProduct([]);
    }
  };

  return (
    <div className="p-10 space-y-4 border border-gray-100 shadow-md rounded-xl">
      <h1 className="font-bold text-2xl">Your Cart</h1>
      <div className="space-y-4">
        {selectedProduct.length < 1 ? (
          <div className="min-h-40 flex gap-4 flex-col justify-center items-center">
            <CiShoppingCart className="text-5xl text-[#4F39F6]"></CiShoppingCart>
            <p className="text-xl font-semibold">Your cart is empty</p>
            <p>Please add product to your cart list</p>
          </div>
        ) : (
          <div className="space-y-4">
            {selectedProduct.map((product) => {
              return (
                <Selected
                  key={product.id}
                  product={product}
                  handleDeleteSelectedProduct={handleDeleteSelectedProduct}
                ></Selected>
              );
            })}
            <div className="flex justify-between items-center text-lg font-semibold bg-gray-50 p-2 rounded-2xl">
              <span>Total: </span>
              <span>${totalSum.toFixed(2)}</span>
            </div>
          </div>
        )}
        <button
          onClick={handleDeleteAllProducts}
          className="btn text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l text-base"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
