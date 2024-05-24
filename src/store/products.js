import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProductsAsync = createAsyncThunk(
  'products/loadProductsAsync',
  async () => {
    const response = await axios.get('/api/products');
    return response.data;
  }
);

let productId = 0;

export const createProduct = (
  category,
  name,
  desc,
  image,
  price,
  countInStock,
) => ({
  id: productId++,
  category,
  name,
  description: desc,
  image,
  price,
  countInStock,
});


const initialState = {
  products: [
    createProduct(
      "Nike",
      "Penny Hardaway",
      "Nike Penny Air 2",
      "https://images.solecollector.com/complex/image/upload/f_auto,fl_lossy,q_auto,w_1200/blob_fw2qog.png",
      130.0,
      20,
    ),
    createProduct(
      "Nike",
      "Kobe Bryant",
      "Black Mamba 2",
      "https://th.bing.com/th/id/OIP.rRt49DZKDzuxqsQVkl9QJwHaHa?rs=1&pid=ImgDetMain",
      125.0,
      15,
    ),
    createProduct(
      "Nike",
      "Scottie Pippen (SF)",
      "Air Pippen 1",
      "https://image.goat.com/750/attachments/product_template_pictures/images/036/103/932/original/51699_00.png.png",
      135.0,
      25,
    ),
    createProduct(
      "Nike",
      "Giannas Antetokoumpo (PF)",
      "Giannas Immortality 2.",
      "https://th.bing.com/th/id/OIP.d4-gnI5N6uj_mjaHLr1AMQHaHa?rs=1&pid=ImgDetMain",
      135.0,
      30,
    ),
  ],
  filteredProducts: [
    createProduct(
      "Nike",
      "Karl Anthony Towns",
      "Nike Hyperdunk",
      "https://i5.walmartimages.com/asr/bb7afacd-0a38-442c-9a0a-85d52b418ddb_1.c2ffcd77384f0af74fc19f12a0b8d6c2.jpeg",
      135.0,
      18,
    ),
  
    createProduct(
      "Adidas",
      "Damian Lillard (PG)",
      "Dame 8",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/289d19cdeaa24ebeba4eadfa001fb497_9366/Dame_8_Shoes_Black_GZ4626_01_standard.jpg",
      125.0,
      20,
    ),
    createProduct(
      "Adidas",
      "Donovan Mitchell (SG)",
      "D.O.N. Issue #3",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e3f2672ab6ef4ff5891bae4a004a4279_9366/Tenis_D.O.N._Issue_3_Rojo_GY0322_01_standard.jpg",
      125.0,
      15,
    ),
    createProduct(
      "Adidas",
      "Brandon Ingram (SF)",
      "ZoneBoost.",
      "https://th.bing.com/th/id/R.4e269c2079bef7373e31b3dfb63ad842?rik=Qm2jzEKQ53gGvQ&pid=ImgRaw&r=0",
      130.0,
      25,
    ),
    createProduct(
      "Adidas",
      "Tim Duncan",
      "Total Air Foamposite Max",
      "https://www.sneakerfiles.com/wp-content/uploads/2012/09/Nike-Total-Air-Foamposite-Max-Current-Blue-New-Images-1.jpg",
      130.0,
      30,
    ),
    createProduct(
      "Adidas",
      "Dikembe Mutombo",
      "MUTOMBO",
      "https://sothebys-md.brightspotcdn.com/dims4/default/cb99dbc/2147483647/strip/true/crop/5000x5000+0+0/resize/800x800!/quality/90/?url=http:%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F0c%2Fd3%2Fc3db70424b33984d08cc292535cc%2Fmarketplace-ftwr-4566.jpg",
      130.0,
      18,
    ),
  ],
};

const FILTER = 'FILTER';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload ? { ...product, countInStock: product.countInStock + (action.type === ADD_TO_CART ? -1 : 1) } : product
        ),
      };

    default:
      return state;
  }
};

export const productsFilter = (category) => {
  return {
    type: "FILTER",
    payload: category,
  };
};

export const getFilteredProducts = (state) => {
  const filter = state.filter;
  if (!filter) {
    return state.products;
  }
  return state.products.filter(product => product.category === filter);
};


const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.countInStock--;
      }
    },
    removeFromCart: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.countInStock++;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProductsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { actions, reducer } = productsSlice;