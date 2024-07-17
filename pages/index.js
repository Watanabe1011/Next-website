import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import Searchbar from "../components/Searchbar";
import { useContext, useState, useEffect } from "react";
import { Lang_Mode } from "../context/context";

//import Script from "next/script";

export default function Home({ posts }) {
  const [matches, setMatches] = useState(null);
  const { lang } = useContext(Lang_Mode);
  const [ postsbylang, setPosts ] = useState(posts);

  useEffect(() => {
      switch (lang) {
        case 'Es':
          setPosts(posts.filter((post, index) => {
            return index > 4 && index < 7;
          }));
          break;
        case 'He':
          setPosts(posts.filter((post, index) => {
            return index > 6 && index < 9;
          }));
          break;
        case 'Ru':
          setPosts(posts.filter((post, index) => {
            return index > 8 && index < 11;
          }));
          break;
        default:
          setPosts(posts.filter((post, index) => {
            return index < 5;
          }));
          break;
      }
    }, [lang]);
  return (
    <div>
      <Head>
        <title>Daniel Gologorsky</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="/js/script.js" async defer />
        {/* <script src="/js/jquery-3.4.1.min.js" async defer /> */}
        {/* <script src="https://www.googletagmanager.com/gtag/js?id=G-3M4H31MEGT" async />
        <script src="https://www.googletagmanager.com/gtag/js?id=AW-618975445" async />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="use-credentials"/>*/}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous"/>
        {/* <link rel="dns-prefetch" href="https://www.googletagmanager.com" />  */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"/> */}
      </Head>
      <header>
	        <h2 className="h2 article-title">Blog</h2>
      </header>
      
      <Searchbar posts={postsbylang} setMatches={setMatches} />
      <div className="blog-posts-list grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {matches
          ? matches.map((post, index) => <Post key={index} post={post} />)
          : postsbylang.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const rawName = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      rawName: rawName,
      frontmatter,
    };
  });

  return {
    props: {
      // posts: posts.sort(sortByDate),
      posts: posts
    },
  };
}
