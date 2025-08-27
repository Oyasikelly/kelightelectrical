import Blogs from "@/lib/blogs";
export default function BlogPage() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="max-w-7xl ">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
					Latest Blog Posts
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-0">
					{Blogs.map((blog, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden h-full">
							<img
								src={blog.image}
								alt={blog.title}
								className="w-full h-48 object-cover"
							/>
							<div className="flex flex-col flex-1 p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
									{blog.title}
								</h3>
								<p className="text-gray-600 flex-1 line-clamp-3">
									{blog.description}
								</p>
								<a
									href={blog.link}
									className="mt-4 text-blue-600 hover:underline font-medium">
									Read More
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
