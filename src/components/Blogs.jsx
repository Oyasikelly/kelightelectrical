"use client";
import Blogs from "@/lib/blogs";
import Slider from "react-slick";

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
					{Blogs.map((blog, index) => (
						<div
							key={index}
							className="px-4">
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
									className="block mt-4 text-blue-600 hover:underline font-medium">
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
