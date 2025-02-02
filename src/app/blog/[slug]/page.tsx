import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import CustomComponents from "@/components/CustomComponents";
export const revalidate = 60;

export async function generateStaticParams() {
  const query = `*[_type == 'post'] {
    "slug": slug.current
  }`;
  const slugs = await client.fetch(query);
  return slugs.map((slug: { slug: string }) => ({ slug: slug.slug }));
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == 'post' && slug.current == $slug][0] {
    _id,
    title,
    summary,
    mainImage {
      asset->{
        url
      }
    },
    "slug": slug.current,
    author->{
      name,
      bio,
      image {
        asset->{
          url
        }
      }
    },
    _createdAt,
    content
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-black">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlFor(post.mainImage).url()}
        width={500}
        height={500}
        alt="Featured image"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Description
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-black">
          {post.summary}
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlFor(post.author.image).url()}
          width={200}
          height={200}
          alt="Author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">
            {post.author.name}
          </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={post.content} components={CustomComponents} /> {/* Use CustomComponents here */}
      </section>
    </div>
  );
};