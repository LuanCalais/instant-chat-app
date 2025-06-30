import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js'
import toast from 'react-hot-toast';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSignedUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('auth/check')
            set({ authUser: res.data })
        } catch (error) {
            set({ authUser: null })
            console.error("Error checking authentication:", error);
        } finally {
            set({ isCheckingAuth: false })
        }
    },
    signup: async (data) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({ authUser: res.data })
            toast.success("Signup successful!");
        } catch (error) {
            console.error("Error during signup:", error.response.data.message);
            toast.error("Signup fail!" + error.response.data.message);
        } finally {
            set({ isSigningUp: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/authh/logout');
            set({ authUser: null });
            toast.success("Logout successful!");
        } catch (error) {
            console.error("Error during logout:", error.response.data.message);
            toast.error("logout fail!" + error.response.data.message);
        } finally {
            set({ authUser: null })
        }
    }
}))