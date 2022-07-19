import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardLayout from "../Layouts/DashboardLayout";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, ...appProps }: AppProps) {

  if (
    [
      `/Dashboard`,
      `/Dashboard/Notes`,
      `/Dashboard/Notes/Notedetails/[noteID]`,
      `/Dashboard/Authors`,
      `/Dashboard/Authors/Authordetails/[authorID]`,
      `/Dashboard/Readers`,
      `/Dashboard/Readers/Readersdetails/[readerID]`,
      `/Dashboard/Transitions`,
      // AuthorDashboard 
      `/AuthorDashboard/CreateNote`,
      `/AuthorDashboard/MyAccount`,
      `/AuthorDashboard/MyNote`,
      `/AuthorDashboard/Transition`
    ].includes(appProps.router.pathname)
  ) {
    return (
      <QueryClientProvider client={queryClient}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
        <ToastContainer autoClose={1500} />
      </QueryClientProvider>
    );
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer autoClose={1500} />
      </QueryClientProvider>
    );
  }
}

export default MyApp;
