import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import zestyzilla from "../../public/zestyzilla.png";
import Echopost from "../../public/Echopost.png";
function PortFolio() {
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>{/*start*/}
        <p className="text-gray-700 my-4">
    Throughout my development journey, I have worked on several projects that reflect my dedication to creating impactful and user-friendly applications. Among them, two projects stand out as my personal favorites: 
    <span className="font-bold text-blue-600"> EchoPosts </span> and 
    <span className="font-bold text-green-600"> ZestyZilla</span>. These projects showcase my expertise in full-stack development and my ability to build intuitive, feature-rich platforms.
  </p>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
  <h1 className="text-green-600 font-semibold text-xl mb-4">ZestyZilla</h1>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Left Section: Project Details */}
    <div>
      <p className="text-gray-700 mb-4">
        ZestyZilla is a feature-rich food delivery system offering a seamless and engaging experience for users. The platform integrates with Stripe for secure payment processing and includes essential features like user authentication (login/signup), a cart system for managing orders, real-time order tracking, and a responsive design.  
      </p>
      <p className="text-gray-700 mb-4">
        Additionally, the admin dashboard empowers administrators to efficiently manage the menu, track orders, and oversee platform operations, making ZestyZilla an all-in-one solution for modern food delivery services.
      </p>
      <a 
        href="https://zestyzillafrontend.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
        Visit Live Project
      </a>
      <a 
        href="https://zestyzillaadmin.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition ml-3">
        Visit Admin Panel
      </a>
      <a 
        href="https://github.com/amanpanwar5634/ZestyZilla" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition ml-3">
        Visit Project Code
      </a>
      
    </div>

    {/* Right Section: Image */}
    <div>
      <img 
        src={zestyzilla} 
        alt="ZestyZilla Preview" 
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
<hr className="mt-3"></hr>
<div className="bg-gray-100 p-6 rounded-2xl shadow-md">
  <h1 className="text-blue-600 font-semibold text-xl mb-4">EchoPosts</h1>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Left Section: Project Details */}
    <div>
      <p className="text-gray-700 mb-4">
        EchoPosts is a dynamic platform built with the FULL Stack that enables users to share and explore blogs effortlessly. The platform features user authentication and authorization, allowing users to create accounts, upload posts, and interact with content through likes and comments.
      </p>
      <p className="text-gray-700 mb-4">
        EchoPosts offers a responsive and user-friendly interface for seamless navigation. Additional features include a "Trending Posts" section, personalized post management, and robust backend functionality for secure and efficient operations.
      </p>
      <a 
        href="https://echopost-ckyq.onrender.com/posts" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Visit Live Project
      </a>
      <a 
        href="https://github.com/amanpanwar5634/echopost" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition ml-3">
        Visit Code Project
      </a>
    </div>

    {/* Right Section: Image */}
    <div>
      <img 
        src={Echopost}
        alt="EchoPosts Preview" 
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>

      </div> {/*end*/}
    </div>
  );
}

export default PortFolio;
