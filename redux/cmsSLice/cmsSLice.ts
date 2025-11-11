
import axiosInstance from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import {
  ICreatePostResponse,
  IDeletePostResponse,
  IPostResponse,
  IUpdatePostResponse,
  PostData,
  PostDetailsArgs,
  updatePostArgs,
} from "@/typeScript/cms.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";

const initialState = {
  allPost: {}
};

export const createPost = createAsyncThunk<
  ICreatePostResponse,
  PostData,
  { rejectValue: { status: false; message: string } }
>("createPost", async (formData: PostData) => {
  let res = await axiosInstance.post<ICreatePostResponse>(
    endPoints.crud.create,
    formData
  );

  let resData = res?.data;

  return resData;
});

//......................
export const PostList = createAsyncThunk<
  IPostResponse,
  void,
  { rejectValue: { status: false; message: string } }
>("PostList", async () => {
  let res = await axiosInstance.get<IPostResponse>(endPoints.crud.list);

  let resData = res?.data;

  return resData;
});

//Delete//
export const DeletePost = createAsyncThunk<
  IDeletePostResponse,
  void,
  { rejectValue: { status: false; message: string } }
>("DeletePost", async (id) => {
  let res = await axiosInstance.delete<IDeletePostResponse>(
    `${endPoints.crud.delete}/${id}`
  );

  let resData = res?.data;

  return resData;
});

//UpdatePost//
export const UpdatePost = createAsyncThunk<
  IUpdatePostResponse, updatePostArgs,
  { rejectValue: { status: false; message: string } }>("UpdatePost", async ({ id, formData }) => {
  let res = await axiosInstance.put(`${endPoints.crud.update}/${id}`, formData);

  let resData = res?.data;

  return resData;
})
//PostDetails//
export const PostDetails = createAsyncThunk<
  IUpdatePostResponse,
  PostDetailsArgs,
  { rejectValue: { status: false; message: string } }
>("PostDetails", async (id ) => {
  let res = await axiosInstance.get(`${endPoints.crud.detail}/${id}`);

  let resData = res?.data;

  return resData;
});

export const cmsSlice = createSlice({
  name: "Cms",
  initialState,
  reducers: {},
  extraReducers: (dev) => {
    dev
      .addCase(createPost.pending, (state, { payload }) => { })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          // cookie.set("token", payload.)
          toast.success(payload.message);
        }
      })
      .addCase(createPost.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })


      .addCase(PostList.pending, (state, { payload }) => { })
      .addCase(PostList.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          state.allPost = payload.data;
          // toast.success(payload.message);
        }
      })
      .addCase(PostList.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })
      //......DElete.....
      .addCase(DeletePost.pending, (state, { payload }) => { })
      .addCase(DeletePost.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        }
      })
      .addCase(DeletePost.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })
      //UpdatePost//
      .addCase(UpdatePost.pending, (state, { payload }) => {})
      .addCase(UpdatePost.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
         
          toast.success(payload.message);
        }
    }  )
      .addCase(UpdatePost.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })
      //postDetails//
      .addCase(PostDetails.pending, (state, { payload }) => {})
      .addCase(PostDetails.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
         
          toast.success(payload.message);
        }
    }  )
      .addCase(PostDetails.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })
  },
});

export const { } = cmsSlice.actions;
export default cmsSlice;