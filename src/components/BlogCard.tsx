import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  title: string;
  description: string;
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
}

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <section className="flex flex-col justify-between h-full sm:h-[480px] rounded-lg bg-blue-200 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px]">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4 p-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <p className="text-dark/70 dark:text-black line-clamp-3 text-sm sm:text-base">
          {post.description}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="block px-4 py-1 text-center bg-blue-600 rounded text-dark font-semibold mt-4 text-sm sm:text-base"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
