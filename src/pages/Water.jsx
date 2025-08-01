import React from 'react';
import water from "../assets/waterbg.jpeg";
import logo from "../assets/logo/guru1.png";

const Water = () => {
    return (
        <>
            <section>
        <img
            src={water}
            alt="Water Banner"
            className="w-full h-48 sm:h-64 mt-16 md:h-80 lg:h-96 object-cover shadow-lg"
            style={{ maxHeight: '50vh' }}
        />
            </section>
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-7xl mx-auto px-10 gap-8 text-lg md:text-xl lg:text-2xl">
                {/* Text Section */}
                <div
                    className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg w-full lg:w-[40%] text-center lg:text-left flex flex-col justify-center animate-fade-in-up"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
                        Saving Water with GuruCharity
                    </h1>
                    <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                        GuruCharity is dedicated to conserving water and ensuring access to clean water for communities in need. Through innovative projects and community engagement, we strive to make every drop count for a better, sustainable future. From building rainwater harvesting systems in drought-prone regions to installing clean water filtration units in rural villages, our initiatives address both immediate needs and long-term sustainability.
                    </p>

                </div>

                {/* Image Section */}
                {/* <div className="flex flex-col items-center w-full lg:w-[20%] justify-center animate-fade-in">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex-shrink-0">
                    <img
                        src={logo}
                        alt="GuruCharity Logo"
                        className="w-80 h-80 object-cover rounded-full shadow-lg"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </div> */}

                {/* Image Text Section */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center animate-fade-in-down">
                    <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-0">
                        <span className='text-blue-600 font-bold'>
                            Discover how providing access to safe water is transforming lives and promoting sustainable health in underprivileged areas.
                        </span>
                        {" "}
                        In many communities, unsafe water leads to illness, missed education, and economic hardship. GuruCharity provides clean water through wells, filters, and rainwater systems, bringing lasting change. Families gain better health, children stay in school, and women reclaim their time. Beyond immediate impact, these efforts foster long-term wellness and resilience. Safe water is not just survival — it’s the foundation for dignity, opportunity, and a healthier future. </p>
                </div>
                <div className="w-full lg:w-[20%] flex flex-col justify-center animate-fade-in-down">
                    <img
                        src={logo}
                        alt="GuruCharity Logo" className='rounded-full' />
                </div>
            </div>
            <div>
                <h3 className='p-10 text-blue-600 font-bold text-6xl'>Every drop counts. Join us in creating a future where clean water is a right, not a privilege.</h3>
            </div>

            {/* Animations */}
            <style>
                {`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                @keyframes fade-in {
                    0% { opacity: 0;}
                    100% { opacity: 1;}
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.8s cubic-bezier(0.4,0,0.2,1) both;
                }
                .animate-fade-in {
                    animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
                }
            `}
            </style>
        </>
    )
}

export default Water