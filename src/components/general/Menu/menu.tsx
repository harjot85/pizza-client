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
    <div className='flex flex-col px-20 py-10'>
      <div className='flex justify-start text-4xl'>Menu</div>
      <hr className='border-1 border-amber-400' />
      <div className='py-6'>
        Filters
        <button className='ml-4 px-4 py-1 border-2 border-amber-400 rounded-full bg-amber-400'>
          Popular
        </button>
        <button className='ml-4 px-4 py-1 border-2 border-amber-400 rounded-full hover:bg-amber-400 '>
          Meatless
        </button>
      </div>

      <div>
        {pizzaMenu?.menuItems.map((item) => {
          return (
            <div
              key={item.itemId}
              className=' bg-amber-400 rounded my-2 py-2 px-4'
            >
              <div className='text-2xl'>{item.name}</div>
              <div className='text-lg py-2'>
                {joinArrayValues(
                  item.ingredients.map((ingredient) => ingredient.name)
                )}
              </div>

              <div className='flex flex-row mt-3'>
                {item.itemPrices.map((item) => (
                  <div className='basis-1/6'>
                    <span className='font-medium'>{item.size}:</span> <span>${item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
