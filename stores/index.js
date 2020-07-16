import { useStaticRendering } from 'mobx-react';

import UICategoriesStore from './UICategoriesStore';
import FetchCategoryStore from './FetchCategoryStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(
  initialData = { FetchCategoryStore: {} }
) {
  if (isServer) {
    return {
      FetchCategoryStore: new FetchCategoryStore(
        initialData.FetchCategoryStore
      ),
      UICategoriesStore: new UICategoriesStore(),
    };
  }
  if (store === null) {
    store = {
      FetchCategoryStore: new FetchCategoryStore(
        initialData.FetchCategoryStore
      ),
      UICategoriesStore: new UICategoriesStore(),
    };
  }
  return store;
}
