import React from 'react'
import blog1 from '../assets/Blog1.png';
import blog2 from '../assets/Blog2.png';
import blog3 from '../assets/Blog3.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Blogs() {
  const blogs = [
    {
      id: 1,
      img: blog1,
      title: "React for Beginners: Everything You Need to Know",
      date: "2025-09-18",
      excerpt: "In today’s digital world, websites and web applications are expected to be fast....",
      link: "https://nisansalajayarathna.blogspot.com/2025/09/react-for-beginners-everything-you-need.html"
    },
    {
      id: 2,
      img: blog2,
      title: "Mastering MongoDB Basics",
      date: "2025-08-20",
      excerpt: "MongoDB is a popular open-source NoSQL database designed to store....",
      link: "https://nisansalajayarathna.blogspot.com/2025/08/mongodb-basics-introduction-what-is.html"
    },
     {
      id: 3,
      img: blog3,
      title: "Mastering Object-Oriented Programming (OOP) Concepts in Java",
      date: "2025-10-08",
      excerpt: " Object-Oriented Programming, or OOP, is a way of writing programs that models real-world things as “objects.” ....",
      link: "https://nisansalajayarathna.blogspot.com/2025/10/mastering-object-oriented-programming.html"
    },
  ];

  return (
    <section id="blogs" className="bg-black py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-3">
        <h1 className="text-amber-500 text-center text-3xl md:text-4xl font-bold mb-10">Blogs</h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-[#0a0a10] border border-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
                <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 font-semibold hover:text-amber-600"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex justify-center items-center space-x-2">
  <a
    href="https://nisansalajayarathna.blogspot.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-500 font-semibold hover:text-amber-600 text-lg underline flex items-center gap-1"
  >
    Read my blogs on Blogger <FaRegArrowAltCircleRight className="ml-2 text-amber-500 hover:text-amber-600 transition text-3xl"/>
  </a>
</div>

      </div>
    </section>
  )
}

export default Blogs;
