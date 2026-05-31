import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMeApi, loginApi, registerApi } from "../api/auth-api";

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (
        payload: {
            email: string;
            password: string;
        },
        thunkAPI,
    ) => {
        try {
            const res = await loginApi(payload);
            return res.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.massage || 'Đăng nhập thất bại');
        }
    },
);

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (
        payload: {
            email: string;
            password: string;
        },
        thunkAPI,
    ) => {
        try {
            const res = await registerApi(payload);
            return res.data.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.massage || 'Đăng ký thất bại');
        }
    },
);