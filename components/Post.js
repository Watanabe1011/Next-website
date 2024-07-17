import Link from "next/link";
import Image from 'next/image'
export default function Post({ post }) {
  return (
    <div className="w-100 sm:w-96 bg-base-100 shadow-xl dark:outline dark:outline-1 rounded d-flex">
      <div className="card-body">
        <figure className="card-thumbnail">
          <Image width={900} height={640} src={post.frontmatter.cover_image} alt="Blog cover image" loading="lazy" />
        </figure>
        <div className="p-2 rounded-md mb-2 text-end">
          Posted on {post.frontmatter.date}
        </div>
        <h3 className="card-title">{post.frontmatter.title}</h3>

        <figcaption className="flex items-center space-x-4">
          <Image
            width={300} height={300}
            src={post.frontmatter.profile_photo || "/assets/img/sample/daniel-gologorsky.webp"}
            alt="Author profile photo"
            className="w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          <h4>
            Written by{" "}
            <span className="font-bold">{post.frontmatter.author}</span>
          </h4>
        </figcaption>

        <p>{post.frontmatter.excerpt}</p>
        <div className="post-more-link">
          <Link href={`/posts/${post.rawName}`} passHref>
            <button aria-label="post-read-more" className="post-more-btn text-light">Read More<span className="hidden">{post.rawName}</span></button>
          </Link>
        </div>
      </div>
    </div>
  );
}
