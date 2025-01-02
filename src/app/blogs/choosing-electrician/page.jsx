"use client";
import React from "react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Video Section */}
      <motion.div
        variants={fadeIn}
        className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          className="w-full h-full "
          // className="w-full h-[500px] "
          src="https://www.youtube.com/embed/jUxRjLqbmN8?autoplay=1&mute=1"
          title="Choosing the Right Electrician for Your Project"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Blog content */}
      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Choosing the Right Electrician for Your Project
        </h1>
        <p className="text-lg text-gray-600">
          Not all electricians are the same. Learn how to choose the right one
          for your electrical needs.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          When it comes to electrical work, hiring the right electrician can
          make all the difference between a smooth, safe project and one full of
          costly mistakes. Whether you're dealing with a small repair or a major
          renovation, it’s essential to select an electrician who is
          experienced, reliable, and qualified for the job. Here’s how you can
          make the right choice:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Verify Their Credentials
        </h2>
        <p>
          A licensed electrician is not only qualified but also follows the
          proper regulations and codes set by local authorities. Before hiring,
          always ask to see their license and insurance. A qualified electrician
          should have both to guarantee that they are professionally recognized
          and covered in case of any accidents during the project.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Experience and Specialization
        </h2>
        <p>
          Not all electricians specialize in the same areas. Some may focus on
          residential wiring, while others may have more experience with
          commercial or industrial electrical systems. For larger projects, make
          sure the electrician has relevant experience with the type of work you
          need to be done. It’s essential to hire someone who has handled
          similar tasks to ensure the best possible results.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Ask for Recommendations and Reviews
        </h2>
        <p>
          One of the best ways to find a trustworthy electrician is by asking
          for recommendations from friends, family, or neighbors. If they’ve had
          positive experiences with an electrician, that can be a good sign.
          Additionally, check online reviews and ratings on platforms like
          Google or Yelp to see how the electrician has performed for other
          clients.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Get Multiple Quotes
        </h2>
        <p>
          It’s always a good idea to get at least three quotes before settling
          on an electrician. Comparing different quotes gives you an idea of the
          going rates for your project and helps you assess whether a particular
          electrician offers a fair price. Be cautious of quotes that seem too
          good to be true—extremely low prices can sometimes signal poor quality
          work or lack of proper qualifications.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Assess Their Communication Skills
        </h2>
        <p>
          Effective communication is key to ensuring a successful electrical
          project. Pay attention to how the electrician communicates with you
          during the initial consultation. Are they clear about the scope of the
          work, timeline, and costs? Do they answer your questions thoroughly
          and patiently? A good electrician should be able to explain technical
          details in a way that’s easy to understand.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          6. Evaluate Their Reputation and Professionalism
        </h2>
        <p>
          An electrician’s reputation is a direct reflection of their quality of
          work and professionalism. During your interactions, take note of their
          attitude, punctuality, and approach to the job. A reliable electrician
          will be respectful of your home, arrive on time, and treat your
          project with the attention it deserves. If an electrician is
          disorganized or unprofessional from the outset, it’s a red flag.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          7. Ask About Warranty and Guarantees
        </h2>
        <p>
          A professional electrician should stand behind their work with a
          warranty or guarantee. This ensures that if something goes wrong after
          the project is completed, they will take responsibility for fixing the
          issue. Always ask about the terms of any warranties or guarantees, as
          this provides you with added peace of mind that the electrician is
          committed to providing quality service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          8. Ensure They Are Insured
        </h2>
        <p>
          Accidents can happen during any electrical project, no matter how
          experienced the electrician is. That’s why it’s crucial to make sure
          the electrician has both liability and worker’s compensation
          insurance. This will protect you in case of accidents, damages, or
          injuries that occur while the electrician is working on your property.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          9. Review Their Availability
        </h2>
        <p>
          Depending on the urgency of your project, you should also consider the
          availability of the electrician. If your project has a tight timeline,
          make sure the electrician can commit to completing the job within your
          required schedule. Discuss the project’s timeline and confirm that
          they can meet your expectations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          10. Trust Your Instincts
        </h2>
        <p>
          At the end of the day, trust your gut feeling. If something doesn’t
          feel right about an electrician or if you feel uncomfortable with
          their work or pricing, don’t hesitate to look for someone else.
          Choosing the right electrician is a crucial decision, and it’s better
          to take your time and select a professional you feel confident about.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p>
          Choosing the right electrician for your project is essential for
          ensuring that the work is done safely, effectively, and within budget.
          By taking the time to verify credentials, gather quotes, assess their
          communication skills, and evaluate their reputation, you can make a
          more informed decision. Don’t rush the process—select an electrician
          who will meet your needs and provide peace of mind throughout the
          project.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
