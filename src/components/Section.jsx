// components/Section.js
export default function Section({ title, children }) {
	return (
		<section className="py-10 bg-gray-100 scrollbar-hide">
			<div className="mx-auto text-center">
				<h2 className="text-3xl font-bold text-gray-800">{title}</h2>
				<div className="mt-4">{children}</div>
			</div>
		</section>
	);
}
