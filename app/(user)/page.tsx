import Banner from "@/components/Banner";
import BlogList from "@/components/BlogList";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 150;

export default async function Home() {
  const posts = await client.fetch(query);
  // const posts = await fetch("https://api.datamuse.com/words?rel_jja=yellow");

  return (
    <>
      <Banner />
      <BlogList posts={posts} />
    </>
  );
}
