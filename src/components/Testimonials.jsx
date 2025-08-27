import Slider from "react-slick";

const testimonials = [
	{
		name: "John Doe",
		image: "/assets/testimonial1.jpg",
		feedback:
			"KelightElectrical transformed my workspace with their exceptional wiring service. Highly recommend!",
	},
	{
		name: "Jane Smith",
		image: "/assets/testimonial2.jpg",
		feedback:
			"Amazing service! The lighting installation was done perfectly and on time.",
	},
	{
		name: "Samuel Bright",
		image: "/assets/testimonial3.jpg",
		feedback:
			"Top-notch professionals! I couldn't be happier with the electrical maintenance they provided.",
	},
	{
		name: "Maria Green",
		image: "/assets/testimonial4.jpg",
		feedback:
			"Their attention to detail and customer service is unmatched. Great work!",
	},
	{
		name: "Chike Okoro",
		image: "/assets/testimonial5.jpg",
		feedback:
			"Fantastic job with the surge protection in my home. Highly skilled team!",
	},
	{
		name: "Fatima Ali",
		image: "/assets/testimonial6.jpg",
		feedback:
			"KelightElectrical's fan installation service was efficient and cost-effective. Highly recommend!",
	},
	{
		name: "Amarachi Eze",
		image: "/assets/testimonial7.jpg",
		feedback:
			"The socket repairs were done quickly and flawlessly. Great customer service!",
	},
	{
		name: "Tunde Adebayo",
		image: "/assets/testimonial8.jpg",
		feedback:
			"My experience with their electrical services has been fantastic every time.",
	},
	{
		name: "Lisa White",
		image: "/assets/testimonial9.jpg",
		feedback:
			"KelightElectrical is reliable and professional. They exceeded my expectations!",
	},
	{
		name: "Ahmed Musa",
		image: "/assets/testimonial10.jpg",
		feedback:
			"Great team! The wiring job was done to perfection. Highly recommended.",
	},
	{
		name: "Grace Johnson",
		image: "/assets/testimonial11.jpg",
		feedback:
			"Outstanding service! Their expertise is evident in the quality of their work.",
	},
	{
		name: "Mark Daniels",
		image: "/assets/testimonial12.jpg",
		feedback:
			"They provided excellent advice and delivered exactly what they promised.",
	},
	{
		name: "Sophia Williams",
		image: "/assets/testimonial13.jpg",
		feedback:
			"Extremely satisfied with their work. I will definitely hire them again.",
	},
];

export default function TestimonialsSection() {
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
		<div className="bg-gray-100 py-16 flex flex-col items-center justify-center">
			<h2 className="text-3xl font-bold text-center text-gray-800">
				Testimonials
			</h2>
			<div className="mt-8 max-w-7xl w-screen">
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="px-4">
							<div className="bg-white p-6 rounded-lg shadow-md text-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="mx-auto rounded-full w-24 h-24 mb-4"
								/>
								<h4 className="text-xl font-semibold">{testimonial.name}</h4>
								<p className="mt-4 text-gray-600 italic">
									"{testimonial.feedback}"
								</p>
							</div>
						</div>
					))}
				</Slider>
				<div className="mt-8 text-center">
					<a
						href="/testimonials"
						className="inline-block bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
						View All Testimonials
					</a>
				</div>
			</div>
		</div>
	);
}
