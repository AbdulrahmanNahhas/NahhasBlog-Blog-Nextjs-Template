import urlFor from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div
        className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
        id="Posts"
      >
        {/* Posts */}
        {posts.map((post) => {
          return (
            <Link
              key={post._id}
              href={`post/${post.slug.current}`}
              className="bg-white border rounded-lg shadow-sm overflow-hidden article duration-300"
            >
              <Image
                alt="image"
                width={250}
                height={250}
                src={urlFor(post.mainImage).url()}
                className="h-auto object-cover !w-full rounded-lg border-none hover:scale-105 duration-200"
              />
              <div className="px-8 pt-4 pb-8">
                <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  {post.categories.map((category, index) => {
                    return index === 0 ? (
                      <span
                        key={category._id}
                        className="transition-colors duration-200 hover:bg-blue-600 inline-flex items-center justify-center gap-1 rounded bg-blue-500 px-1.5 text-xs text-white"
                        aria-label="Category"
                      >
                        {category.title}
                      </span>
                    ) : (
                      <span className="hidden" key={category._id}></span>
                    );
                  })}{" "}
                  <span className="text-gray-600">— 1 Feb 2020</span>
                </div>
                <span
                  aria-label="Article"
                  title="Jingle Bells"
                  className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  {post.title}
                </span>

                {post.description ? (
                  <p className="mb-5 text-gray-700">{post.description}</p>
                ) : (
                  ""
                )}

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={25}
                    src={urlFor(post.author.image).url()}
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm mr-3"
                  />
                  <div>
                    <span
                      aria-label="Author"
                      title="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      {post.author.name}
                    </span>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
