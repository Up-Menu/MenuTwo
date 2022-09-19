import { createContext, useState } from 'react';

type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

const ProgressContext = createContext({
  createRestaurant: false,
  themeSelection: false,
  addMenu: false,
  selectOrder: false,
  tableManager: false,
  deliveryZone: false,
  testOrders: false,
  mobileApp: false,
  finishInstallation: false,
  onRestaurant: (validation: boolean) => {},
  onTheme: (validation: boolean) => {},
  onMenu: (validation: boolean) => {},
  onOrder: (validation: boolean) => {},
  onTable: (validation: boolean) => {},
  onDelivery: (validation: boolean) => {},
  onTestOrders: (validation: boolean) => {},
  onMobileApp: (validation: boolean) => {},
  onFinished: (validation: boolean) => {}
});

export const ProgressContextProvider = (props: BoxProps) => {
  const [createRestaurant, setCreateRestaurant] = useState(false);
  const [themeSelection, setThemeSelection] = useState(false);
  const [addMenu, setAddMenu] = useState(false);
  const [selectOrder, setSelectOrder] = useState(false);
  const [tableManager, setTableManager] = useState(false);
  const [deliveryZone, setDeliveryZone] = useState(false);
  const [testOrders, setTestOrders] = useState(false);
  const [mobileApp, setMobileApp] = useState(false);
  const [finishInstallation, setFinishInstallation] = useState(false);

  const restaurantHandler = () => {
    setCreateRestaurant(true);
    localStorage.setItem('createRestaurant', String(createRestaurant));
  };
  const themeHandler = () => {
    setThemeSelection(true);
    localStorage.setItem('selectTheme', String(themeSelection));
  };

  const menuHandler = () => {
    setAddMenu(true);
    localStorage.setItem('createMenu', String(addMenu));
  };
  const orderHandler = () => {
    setSelectOrder(true);
    localStorage.setItem('order', String(selectOrder));
  };

  const tableHandler = () => {
    setTableManager(true);
    localStorage.setItem('tableManager', String(tableManager));
  };
  const deliveryHandler = () => {
    setDeliveryZone(true);
    localStorage.setItem('delivery', String(deliveryZone));
  };
  const testOrdersHandler = () => {
    setTestOrders(true);
    localStorage.setItem('testOrders', String(testOrders));
  };

  const mobileHandler = () => {
    setMobileApp(true);
    localStorage.setItem('mobileApp', String(mobileApp));
  };
  const finishHandler = () => {
    setFinishInstallation(true);
    localStorage.setItem('finished', String(finishInstallation));
  };

  return (
    <ProgressContext.Provider
      value={{
        createRestaurant: createRestaurant,
        themeSelection: themeSelection,
        addMenu: addMenu,
        selectOrder: selectOrder,
        tableManager: tableManager,
        deliveryZone: deliveryZone,
        testOrders: testOrders,
        mobileApp: mobileApp,
        finishInstallation: finishInstallation,

        onRestaurant: restaurantHandler,
        onTheme: themeHandler,
        onMenu: menuHandler,
        onOrder: orderHandler,
        onTable: tableHandler,
        onDelivery: deliveryHandler,
        onTestOrders: testOrdersHandler,
        onMobileApp: mobileHandler,
        onFinished: finishHandler
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
