import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";


interface Post {
  title: string;
  description: string;
  slug: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
}
export const revalidate = 60;
export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
    description, title, mainImage { asset->{url} },
    "slug": slug.current
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-blue-900 dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent Blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}
