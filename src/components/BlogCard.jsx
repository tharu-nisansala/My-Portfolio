import Card from "./Card";

function BlogCard({ blog }) {
  return (
    <Card className="h-full flex flex-col justify-between">

      {/* IMAGE */}
      <img
        src={blog.img}
        alt={blog.title}
        className="rounded-xl h-40 w-full object-cover mb-4"
      />

      <div>
        <h3 className="text-xl font-bold text-emerald-400 mb-2">
          {blog.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          {blog.excerpt}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-500">{blog.date}</span>

        <a
          href={blog.link}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 text-sm hover:underline"
        >
          Read More →
        </a>
      </div>

    </Card>
  );
}

export default BlogCard;