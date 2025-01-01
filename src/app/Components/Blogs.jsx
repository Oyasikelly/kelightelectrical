import Slider from "react-slick";

const blogs = [
  {
    title: "5 Signs Your Home Needs Electrical Maintenance",
    description:
      "Electrical maintenance is crucial to prevent potential hazards and ensure efficiency. Learn the signs that your home may need attention.",
    image: "/assets/blog1.jpg",
    link: "/blogs/electrical-maintenance",
  },
  {
    title: "Top 10 Tips for Safe Wiring Installation",
    description:
      "Wiring can be tricky, but safety is key. Here are the top 10 tips for safe wiring in your home or office.",
    image: "/assets/blog2.jpg",
    link: "/blogs/safe-wiring",
  },
  {
    title: "How to Save Energy with Smart Lighting Solutions",
    description:
      "Discover how smart lighting can help you save energy and reduce electricity bills while enhancing your space.",
    image: "/assets/blog3.jpg",
    link: "/blogs/smart-lighting",
  },
  {
    title: "The Importance of Surge Protection in Modern Homes",
    description:
      "Surge protection is a necessity in today’s tech-driven homes. Learn why it’s important and how it works.",
    image: "/assets/blog4.jpg",
    link: "/blogs/surge-protection",
  },
  {
    title: "5 Reasons to Upgrade Your Electrical Panel",
    description:
      "An outdated electrical panel can cause problems. Find out why upgrading it is a smart investment.",
    image: "/assets/blog5.jpg",
    link: "/blogs/electrical-panel-upgrade",
  },
  {
    title: "Choosing the Right Electrician for Your Project",
    description:
      "Not all electricians are the same. Learn how to choose the right one for your electrical needs.",
    image: "/assets/blog6.jpg",
    link: "/blogs/choosing-electrician",
  },
  {
    title: "A Beginner’s Guide to Home Automation",
    description:
      "Home automation can seem overwhelming, but this beginner’s guide simplifies the process for you.",
    image: "/assets/blog7.jpg",
    link: "/blogs/home-automation-guide",
  },
  {
    title: "Why Regular Electrical Inspections Are Essential",
    description:
      "Regular electrical inspections can prevent disasters. Learn why they’re essential for every property.",
    image: "/assets/blog8.jpg",
    link: "/blogs/electrical-inspections",
  },
  {
    title: "How to Design Energy-Efficient Electrical Systems",
    description:
      "Energy efficiency starts with smart electrical design. Explore tips for creating an efficient system.",
    image: "/assets/blog9.jpg",
    link: "/blogs/energy-efficient-design",
  },
  {
    title: "The Role of Electricians in Renewable Energy Projects",
    description:
      "Electricians play a critical role in the transition to renewable energy. Learn how they contribute.",
    image: "/assets/blog10.jpg",
    link: "/blogs/renewable-energy-projects",
  },
];

export default function BlogPostsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Latest Blog Posts
      </h2>
      <div className="mt-8">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600">{blog.description}</p>
                <a
                  href={blog.link}
                  className="block mt-4 text-blue-600 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
