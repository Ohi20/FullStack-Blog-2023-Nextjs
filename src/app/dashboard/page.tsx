'use client';
import React, { useEffect, useState } from 'react';
// import useSWR from 'swr';
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import Loading from 'src/components/Loading/Loading.jsx';

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  //   const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  //   const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //   const { data, mutate, error, isLoading } = useSWR(
  //     `/api/posts?username=${session?.data?.user.name}`,
  //     fetcher
  //   );

  //   if (session.status === 'loading') {
  //     return <Loading />;
  //   }

  //   if (session.status === 'unauthenticated') {
  //     router?.push('/dashboard/login');
  //   }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const title = e.target[0].value;
  //     const desc = e.target[1].value;
  //     const img = e.target[2].value;
  //     const content = e.target[3].value;

  //     try {
  //       await fetch('/api/posts', {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           title,
  //           desc,
  //           img,
  //           content,
  //           username: session.data.user.name,
  //         }),
  //       });
  //       mutate();
  //       e.target.reset();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const handleDelete = async (id) => {
  //     try {
  //       alert('Delete');
  //       await fetch(`/api/posts/${id}`, {
  //         method: 'DELETE',
  //       });
  //       mutate();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const handleShow = () => {};

  //   if (session.status === 'authenticated') {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
      <form className="flex-1 flex flex-col gap-6">
        <h1 className="text-2xl text-center text-[#53c28b] font-semibold">
          Add New Post
        </h1>
        <input
          type="text"
          placeholder="Title"
          className="p-4 bg-transparent dark:text-[#bbb] light:text-black border border-[#bbb] dark:border-[#bbb] light:border-[#111] text-sm font-semibold"
        />
        <input
          type="text"
          placeholder="Desc"
          className="p-4 bg-transparent dark:text-[#bbb] light:text-black border border-[#bbb] dark:border-[#bbb] light:border-[#111] text-sm font-semibold"
        />
        <input
          type="text"
          placeholder="Image"
          className="p-4 bg-transparent dark:text-[#bbb] light:text-black border border-[#bbb] dark:border-[#bbb] light:border-[#111] text-sm font-semibold"
        />
        <textarea
          placeholder="Content"
          className="p-4 bg-transparent dark:text-[#bbb] light:text-black border border-[#bbb] dark:border-[#bbb] light:border-[#111] text-sm font-semibold"
          cols={30}
          rows={10}
        ></textarea>
        <button className="bg-[#52c28b] p-4 mx-auto rounded-md border-none text-[#eee]">
          Post
        </button>
      </form>

      <div className="flex-1">
        <h1 className="text-5xl text-[#53c28b] text-center">Your Posts</h1>
        {/* {isLoading
            ? 'loading'
            : data?.map((post) => (
                <div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 border border-[#bbb] p-10"
                  key={post._id}
                >
                  1st
                  <div>
                    <p className="text-center">{post.username}</p>
                  </div>

                  2nd
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      className="object-cover"
                      src={post.img}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  3rd 
                  <h2 className="text-center text-xl">{post.title}</h2>

                   4th
                  <span
                    className="text-center cursor-pointer text-red-600"
                    
                    
                  >
                    <abbr title="Delete This Post">Delete</abbr>
                  </span>
                </div>
              ))} */}
      </div>
    </div>
  );
};
export default Dashboard;
