import { useEffect, useState } from 'react';
import { useCategorizedMenuGet } from './hooks';
import { CategorizedMenu, Category } from './types';

const Menu = () => {
  const { isLoading, error, data: categorizedMenu } = useCategorizedMenuGet();

  const [pizzaMenu, setPizzaMenu] = useState<CategorizedMenu | undefined>(
    undefined
  );

  useEffect(() => {
    const pizzaCategory = categorizedMenu?.find((c) => c.id === Category.Pizza);
    setPizzaMenu(pizzaCategory);
  }, [categorizedMenu]);

  const joinArrayValues = (values: string[]) => {
    return values.join(', ');
  };

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>Menu</div>
      <hr />
      <div>Filters</div>
      <hr />
      <div>
        {pizzaMenu?.menuItems.map((item) => {
          return (
            <div key={item.itemId}>
              <p>
                <span>{item.name} - </span>
                {joinArrayValues(
                  item.ingredients.map((ingredient) => ingredient.name)
                )}
              </p>
              <p>
                {item.itemPrices.map((item) => (
                  <span>
                    {item.size}: ${item.price}
                  </span>
                ))}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
