"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/utils/myAxios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import {
  IUserContext,
  ILoggedUser,
  ISignUp,
  ILogin,
  IChangeUserProfile,
} from "../interface";
import { toast } from "react-toastify";

export const UserContext = createContext<IUserContext>({
  token: "",
  changeUserProfile: async () => {},
  logout: () => {},
  loggedUser: {} as ILoggedUser,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>("");
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>({
    name: "",
    email: "",
    _id: "",
  });
  const [refresh, setRefresh] = useState(false);

  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedUser({ name: "", email: "", _id: "" });
  };

  const changeUserProfile = async ({ changedUser }: IChangeUserProfile) => {
    try {
      const { data } = await myAxios.put(
        "/user",
        {
          changedUser,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      await Swal.fire({
        position: "center",
        title: "User profile successfully changed",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      setLoggedUser({ ...data.changedUser, password: "" });
    } catch (error) {
      console.log("Error in changeUserProfile in userprovider", error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const pToken = localStorage.getItem("token");
    setLoggedUser(user);
    setToken(pToken);
  }, []);

  return (
    <UserContext.Provider
      value={{
        logout,
        loggedUser,
        token,
        changeUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
