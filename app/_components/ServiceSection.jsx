"use client"
import { Service_ENG_Data,Service_MAL_Data } from "@/app/_constants/service.data";
import { SECTION_ENG_TITLES,SECTION_MAL_TITLES } from "@/app/_constants/base.data";
import ServiceCard from "@/app/_components/ServiceCard"
import { useEffect, useState } from "react";
import useGetLang from "../_helper/useGetLang";


function ServiceSection() {
   const [lang, setLang] = useState(null);
    const GetLang = useGetLang(); 
      useEffect(() => {
        if (GetLang) {
          setLang(GetLang);
        }
      }, [GetLang]);
    const ServiceData=lang==="malayalam"?Service_MAL_Data:Service_ENG_Data
    const ServiceHeader=lang==="malayalam"?SECTION_MAL_TITLES.SERVICE:SECTION_ENG_TITLES.SERVICE
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-center py-16 px-4">
      <h1 className="base-text-500 font-bold mb-12">
        {ServiceHeader}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {ServiceData.map((service) => (
          <ServiceCard 
            key={service.id}
            title={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
