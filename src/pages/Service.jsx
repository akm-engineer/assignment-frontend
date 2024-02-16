import React from "react";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="bg-gray-100">
      <div className=" py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Our Service Offerings</h1>
          <h4 className="text-lg">
            Strategies that Drive Property Market Excellence
          </h4>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={faHeartbeat}
            title="Automotive SEO"
            description="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
          />
          <ServiceCard
            icon={faHeartbeat}
            title="PPC Precision"
            description="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
          />
          <ServiceCard
            icon={faHeartbeat}
            title="Social Acceleration"
            description="Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
          />
          <ServiceCard
            icon={faHeartbeat}
            title="Content Excellence"
            description="Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
          />
          <ServiceCard
            icon={faHeartbeat}
            title="Web Design"
            description="Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
          />
          <ServiceCard
            icon={faHeartbeat}
            title="Data-Driven Insights"
            description="Leverage data to refine your strategies, making informed decisions that drive revenue growth."
          />
          <ServiceCard
            icon={faHeartbeat}
            title="End-to-End Solution"
            description="From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
          />
          <ServiceCard
            icon={faHeartbeat}
            title="Video marketing"
            description="Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
          />
        </div>
        <div className="text-center mt-8">
          <button className="rounded-[32px] px-[64px] py-[16.5px] lg:py-[16.5px] lg:px-[64px] gap-[4px] bg-blue-600 text-white hover:shadow-blue transition duration-300 mb-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
