//CreateApi//
//Send data 
export interface PostData{
    
    title:string,
    subtitle:string,
    content:string,

}
//Recieved Data
interface postPayload {
  title: string;
  subtitle: string;
  content: string;
  userId: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}
//Recieved api response
export interface ICreatePostResponse extends postPayload {
  status: boolean;
  message: string;
  data: postPayload;
}

//List//
export interface IPostResponse extends postPayload {
  status: boolean;
  message: string;
  data: postPayload;
}

//Delete//
export interface IDeletePostResponse extends postPayload {
  status: boolean;
  message: string;
  data: postPayload;
}

//Update//
export interface PostData {
  title: string;
  subtitle: string;
  content: string;
}

export interface updatePostArgs {
  id: string;
  formData: {
    title: string,
    subtitle: string,
    content: string
  }
}
export interface IUpdatePostResponse extends postPayload {
  status: boolean;
  message: string;
  data: postPayload;
}

//postDetails//
export interface PostDetailsArgs {
  id: string;
 
}
export interface IPostDetailsResponse extends postPayload {
  status: boolean;
  message: string;
  data: postPayload;
}