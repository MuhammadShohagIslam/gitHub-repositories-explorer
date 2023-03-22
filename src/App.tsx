import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store/store";
import router from "./Routes/Routes";
import Preloader from "./components/ui/Preloader/Preloader";

function App() {
  const [loader, setLoader] = useState<boolean>(true);
  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout> | number = null
    const timeOut = () => {
      timeoutId = window.setTimeout(() => setLoader(false), 1500);
    };
    timeOut();
    AOS.init();
    AOS.refresh();
    return () => window.clearTimeout(timeoutId!);
  }, []);

  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <>
          <Provider store={store}>
            <Toaster position="top-center" reverseOrder={false} />
            <RouterProvider router={router}></RouterProvider>
          </Provider>
        </>
      )}


    </>
  );
}

export default App;
