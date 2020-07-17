import { useStaticRendering } from 'mobx-react';

import UICategoriesStore from './UICategoriesStore';
import FetchCategoryStore from './FetchCategoryStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

const initializeStore = () => {
  if (isServer) {
    return {
      FetchCategoryStore: new FetchCategoryStore(),
      UICategoriesStore: new UICategoriesStore(),
    };
  }
  if (store === null) {
    store = {
      FetchCategoryStore: new FetchCategoryStore(),
      UICategoriesStore: new UICategoriesStore(),
    };
  }
  return store;
};

export default initializeStore;
