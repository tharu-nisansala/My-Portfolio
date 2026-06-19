import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";
import blogs  from "../data/BlogData";

function Blog() {
  return (
    <section id="blogs" className="bg-[#2C2C2C] -mt-16 rounded-tl-[80px] md:rounded-tl-[120px] rounded-tr-[80px] md:rounded-tr-[120px] relative z-10 py-20">
      <Container>
        <SectionTitle title="Blog" variant="light" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="opacity-0 animate-fadeUp"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <BlogCard blog={blog} />
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Blog;