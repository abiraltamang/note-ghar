import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import APIS from "../helpers/EndPoints";
import { getKey } from "../helpers/sessionKey";
import useGetHook from "../hooks/useGetHooks";
import Sidebar from "../components/backend/Sidebar";
import Search from "../components/backend/Search";

type Props = {
  children: any;
};

const DashboardLayout = (props: Props) => {
  const router = useRouter();
  const { children } = props;

  // PASS THIS TO CHILDREN PAGES AND USE USE_EFFECT TO SHOW/HIDE SEARCH BAR
  const [showSearch, setShowSearch] = useState(true);
  const [loadPage, setLoadPage] = useState(false);

  // Cloning childern attribute to pass props
  const childrenWithAdjustedProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { showSearch, setShowSearch })
  );

  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserData",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });

  useEffect(() => {
    if (!getKey("userAuth")) {
      router.push("/Signin");
    } else {
      setLoadPage(true);
    }
  }, []);

  return (
    <>
      {loadPage ? (
        <div className="bg-background z-100">
          <div className="grid xl:grid-cols-6 bg-[#EEF1F8] md:grid-cols-5 sm:grid-row-2 p-5 h-full ">
            <div className="p-5 bg-white rounded-xl h-full mr-4">
              <Sidebar />
            </div>

            <div className="col-span-5 ">
              {showSearch ? (
                <div className="mb-4">
                  <Search userData={currentUserData} />
                </div>
              ) : null}
              <div
                className={`rounded-md ${
                  showSearch ? "h-[300px]" : "h-[300px]"
                }  `}
              >
                <main>{childrenWithAdjustedProps}</main>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DashboardLayout;
