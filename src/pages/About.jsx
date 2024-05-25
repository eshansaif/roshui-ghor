import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-12xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to RecipeShare, your number one source for delicious and
          diverse recipes from around the world. Whether you're a seasoned chef
          or a home cook, our app provides a platform to share, discover, and
          enjoy culinary creations.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          At RecipeShare, our mission is to connect food enthusiasts and inspire
          people to explore new flavors and cooking techniques. We believe that
          cooking and sharing meals can bring joy and bring people together.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
          <li>Share your own recipes with the community</li>
          <li>Discover new recipes from around the world</li>
          <li>Save your favorite recipes for easy access</li>
          <li>Rate and review recipes to help others</li>
          <li>Follow other users and see their culinary creations</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Meet the Team
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Our team is made up of passionate food lovers, experienced chefs, and
          tech enthusiasts who are dedicated to making RecipeShare the best
          platform for sharing and discovering recipes. We work hard to ensure
          our app is user-friendly, visually appealing, and always up-to-date
          with the latest features.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-700 text-lg">
            Have any questions or feedback? We'd love to hear from you! Reach
            out to us at{" "}
            <a
              href="mailto:contact@recipeshare.com"
              className="text-blue-500 underline"
            >
              contact@recipeshare.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
