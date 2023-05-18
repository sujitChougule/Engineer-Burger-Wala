import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
const Menu = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });

        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });

        toast.success("Added To Cart");
        break;
      default:
        break;
    }
  };
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title={"Cheezzy burger"}
          handler={addToCartHandler}
          delay={0.2}
        />

        <MenuCard
          itemNum={2}
          burgerSrc={burger3}
          price={500}
          title={"veg Cheez burger"}
          handler={addToCartHandler}
          delay={0.4}
        />

        <MenuCard
          itemNum={3}
          burgerSrc={burger2}
          price={1800}
          title={"Burger with Fries"}
          handler={addToCartHandler}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default Menu;
