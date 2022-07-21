import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Home from ".";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardLayout from "../Layouts/DashboardLayout";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const router = useRouter();
  let role = "admin";
  let allowed = true;
  if (router.pathname.startsWith("/admin") && role == "admin") {
    allowed = false;
  }
  const ComponentToRender = allowed ? Component : Home;
  if (
    [
      `/Dashboard`,
      `/Dashboard/Notes`,
      `/Dashboard/Notes/[noteID]`,
      `/ViewNotes`,
      `/Dashboard/Authors`,
      `/Dashboard/Authors/Authordetails/[authorID]`,
      `/Dashboard/Readers`,
      `/Dashboard/Readers/Readersdetails/[readerID]`,
      `/Dashboard/Transitions`,
      
      // AuthorDashboard
      `/AuthorDashboard/CreateNote`,
      `/AuthorDashboard/MyAccount`,
      `/AuthorDashboard/MyNote`,
      `/AuthorDashboard/Transition`,
    ].includes(appProps.router.pathname)
  ) {
    return (
      <QueryClientProvider client={queryClient}>
        <DashboardLayout>
          <ComponentToRender {...pageProps} />
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
