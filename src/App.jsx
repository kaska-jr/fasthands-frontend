import { Provider } from "react-redux";
import AuthContextProvider from "./context/auth";
import { store } from "./redux/store.js";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-center" />
      <Provider store={store}>
        <AuthContextProvider>
          <Theme>
            <main>
              <AppRoutes />
            </main>
          </Theme>
        </AuthContextProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
