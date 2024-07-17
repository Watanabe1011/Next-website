import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Head from 'next/head'
import hljs from "highlight.js";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function PostPage({
  frontmatter: { title, date, cover_image },
  rawName,
  content,
}) {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang === "") {
        lang = "plaintext";
      }
      return hljs.highlight(code, { language: lang }).value;
    },
  });

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <div className="max-w-mx">
        <Link href="/">
          <button aria-label='blog-back-btn' type="button" className="btn btn-primary btn-md"><IoMdArrowRoundBack />Go Back</button>
        </Link>
        <div className="card shadow-xl mt-2 dark:outline dark:outline-1">
          <div className="card-body bg-base-100 prose max-w-none">
            <h2 className="text-center">{title}</h2>
            <div className="bg-base-200 p-2 rounded-md">Posted on {date}</div>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      rawName: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { rawName } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", rawName + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      rawName,
      content,
    },
  };
}
