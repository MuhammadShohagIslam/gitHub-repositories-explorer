import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store/store";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router}></RouterProvider>
      </Provider>

    </>
  );
}

export default App;
