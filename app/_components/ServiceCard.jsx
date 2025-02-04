function ServiceCard({ title = "Service Title", description = "Short description of the service.", icon }) {
    return (
      <div className="w-full md:w-[40%] bg-white/10 backdrop-blur-lg text-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="text-4xl text-blue-500">{icon}</div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    );
  }
  
  export default ServiceCard;
  