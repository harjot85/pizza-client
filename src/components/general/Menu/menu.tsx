import { useEffect, useState } from "react";
import { useCategorizedMenuGet } from "./hooks";
import { CategorizedMenu } from "./types";

const Menu = () => {
  const { isLoading, error, data: categorizedMenu } = useCategorizedMenuGet();

  const [pizzaMenu, setPizzaMenu] = useState<CategorizedMenu | undefined>(
    undefined
  );

  useEffect(() => {
    const pizzaCategory = categorizedMenu?.find((c) => c.id === 1);
    setPizzaMenu(pizzaCategory);
  }, [categorizedMenu]);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <>
      <div>Menu</div>
      <div>
        {pizzaMenu?.menuItems.map((item) => {
          return <p key={item.itemId}>{item.name} </p>;
        })}
      </div>
    </>
  );
};

export default Menu;
