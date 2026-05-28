import { useContext, createContext } from "react";
export const TestimonialContext = createContext();
export const TestimonialProvider = ({ children }) => {
	const [testimonialInfo, setTestimonialInfo] = useState({
		img: "",
		name: "",
		testimonial: "",
	});

	return (
		<TestimonialContext.Provider
			value={{ testimonialInfo, setTestimonialInfo }}>
			{children}
		</TestimonialContext.Provider>
	);
};

export const useTestimonial = () => {
	const context = useContext(TestimonialContext);
	if (!context) {
		throw new Error("useTestimonial must be used within a TestimonialProvider");
	}
	return context;
};
