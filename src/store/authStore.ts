import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/auth";

interface User {
  userName: string;
  userEmail: string;
  userRole: string;
  phoneNumber?: string;
  profileImage?: string;
}

interface AuthStore {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  register: (formData: any) => Promise<any>;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  accessToken: null,
  loading: false,
  error: null,


  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${BASE_URL}/login-user`, { userEmail: email, userPassword: password }, { withCredentials: true });

      const { user, tokens } = response.data.data;
      console.log("response data:", response.data);
      set({ user, accessToken: tokens.accessToken, loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || err.message, loading: false });
    }
  },

  
register: async (formData: any) => {
  set({ loading: true, error: null });

  try {
    const response = await axios.post(
      `${BASE_URL}/register-user`,
      formData,
      { withCredentials: true }
    );

    console.log("Register response:", response.data);

    set({ loading: false });
    return response.data; // return result to UI
  } catch (err: any) {
    set({
      error: err.response?.data?.message || err.message,
      loading: false,
    });
    throw err;
  }
}


}));

export default useAuthStore;
