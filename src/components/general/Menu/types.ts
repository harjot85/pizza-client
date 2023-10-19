export type CategorizedMenu = {
  id: number;
  name: string;
  imageName: string;
  availabilityId: number;
  availabilityName: number;
  menuItems: MenuItemDetail[];
};

export type MenuItemDetail = {
  itemId: number;
  name: string;
  imageName?: string;
  categoryId: number;
  categoryName: string;
  availabilityId: number;
  availabilityStatus: string;
  ingredients: Ingredient[];
  itemPrices: ItemPriceAndSize[];
};

export type Ingredient = {
  id: number;
  name: string;
};

export type ItemPriceAndSize = {
  id: number;
  sizeId: number;
  size: string;
  price: number;
};
