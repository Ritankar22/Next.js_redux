import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  try {
    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );

    return {
      props: {
        posts: res.data,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {posts.map((item, index) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </>
  );
}