import axiosInstance from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { forgotPasswordData, IForgotPasswordResonse, ILoginResponse, IOtpResponse, IRegisterResponse, IResetPasswordResonse, IUpdatePasswordResponse, LoginData, OtpData, ProfilePayload, RegisterData, ResetPasswordArgs, UpdatePasswordData } from "@/typeScript/auth.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";
const initialState = {
  profileDetailsData: {},
  isLogin: false
};
const cookie = new Cookies()



export const registerForm = createAsyncThunk<
  IRegisterResponse, RegisterData, { rejectValue: { status: false; message: string } }>
  (
    "register",
    async (formData: RegisterData) => {
      let res = await axiosInstance.post<IRegisterResponse>(endPoints.auth.register, formData);
      let resData = res?.data;
      return resData;
    }
  );
// .................................Register..........................//
export const login = createAsyncThunk<
  ILoginResponse, LoginData, { rejectValue: { status: false; message: string } }>
  (
    "login",
    async (formData: LoginData) => {
      let res = await axiosInstance.post<ILoginResponse>(endPoints.auth.login, formData);
      let resData = res?.data;
      return resData;
    }
  );
// .................................Login..........................//
export const otp = createAsyncThunk<
  IOtpResponse, OtpData, { rejectValue: { status: false; message: string } }>
  (
    "otp",
    async (formData: OtpData) => {
      let res = await axiosInstance.post<IOtpResponse>(endPoints.auth.otp, formData);
      let resData = res?.data;
      return resData;
    }
  );
//....................OTP END.......................//
//................................................
export const UpdatePassword = createAsyncThunk<
  IUpdatePasswordResponse, UpdatePasswordData, { rejectValue: { status: false; message: string } }>
  (
    "UpdatePassword",
    async (formData: UpdatePasswordData) => {
      let res = await axiosInstance.put<IUpdatePasswordResponse>(endPoints.auth.updatePassword, formData);
      let resData = res?.data;
      return resData;
    }
  );
//............................................
export const forgotPassword = createAsyncThunk<
  IForgotPasswordResonse,
  forgotPasswordData,
  { rejectValue: { status: false; message: string } }
>("forgotPassword", async (formData: forgotPasswordData) => {
  const res = await axiosInstance.post(
    endPoints.auth.reset,
    formData
  );
  const resData = res?.data;
  return resData;
});
//..........................................
export const resetPassword = createAsyncThunk<
  IResetPasswordResonse,
  ResetPasswordArgs,
  { rejectValue: { status: false; message: string } }
>("resetPassword", async ({ id, token, payload }) => {
  const res = await axiosInstance.post(
    `${endPoints.auth.resetPassword}/${id}/${token}`,
    payload
  );
  const resData = res?.data;
  return resData;
});
//...............................................
export const ProfileDetails = createAsyncThunk<
  ProfilePayload, void,
  { rejectValue: { status: false; message: string } }
>("ProfileDetails", async () => {
  const res = await axiosInstance.get<ProfilePayload>(
    endPoints.auth.profile
  );
  const resData = res?.data;
  return resData;
});
//..................................................
export const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    handleLoggedout: (state, { payload }) => {
      cookie.remove("token");
      cookie.remove("useId");
      state.isLogin = false;
    },
    check_token: (state, { payload }) => {
      let token = cookie.get("token");
      if (token !== null && token !== undefined) {
        state.isLogin = true;
      }
    },
  },
  extraReducers: (dev) => {
    dev
      .addCase(registerForm.pending, (state, { payload }) => { })
      .addCase(registerForm.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .addCase(registerForm.rejected, (state, { payload }) => { })

      .addCase(login.pending, (state, { payload }) => { })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
          console.log(payload.token);
          state.isLogin = true
          cookie.set("token", payload.token, {
            path: "/",
            secure: true,
          })
          cookie.set("userId", payload.user.id, {
            path: "/",
            secure: true,
          }
          )

        } else {
          toast.error(payload.message);
        }
      })
      .addCase(login.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);

      })

      .addCase(otp.pending, (state, { payload }) => { })
      .addCase(otp.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .addCase(otp.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);

      })

      //...........................UpdatePassword................//
      .addCase(UpdatePassword.pending, (state, { payload }) => { })
      .addCase(UpdatePassword.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .addCase(UpdatePassword.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);

      })
      //...................................//


      .addCase(ProfileDetails.pending, (state, { payload }) => { })
      .addCase(ProfileDetails.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          state.profileDetailsData = payload.data
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .addCase(ProfileDetails.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })



    //..........................
  },
});

export const { handleLoggedout, check_token } = authSlice.actions;

export default authSlice;






