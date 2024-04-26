import Products from "./Products";
import CartItem from "./cartItem";
import Categories from "./home-categories";

export default function Page() {
  return (
    <div>
      <CartItem />
      <Products />
    </div>
  );
}
