import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};
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
