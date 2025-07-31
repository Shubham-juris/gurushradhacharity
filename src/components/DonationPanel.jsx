import React from "react";
import panelImage from "../assets/homeless.jpg"; 

const DonationPanel = () => {
const [flipped, setFlipped] = React.useState(false);

return (
    <div className="sm:px-6 lg:px-12 py-12 max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* Left Section */}
            <div className="flex-1 w-full">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
                    YOUR TRUST,{" "}
                    <span className="bg-blue-600 text-white px-2">THEIR FUTURE:</span>{" "}
                    GIVE WITH CONFIDENCE. HELP REWRITE A CHILD’S STORY.
                </h1>
                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                    Your gift brings food, shelter, education, and trauma care to children
                    in war zones. To direct your donation to a specific project, email{" "}
                    <a href="mailto:Gurushradhacharity" className="text-blue-600 font-medium">
                        Gurushradhacharity
                    </a>
                    . While we honor preferences, Novi may reallocate funds to ensure the
                    greatest impact.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex-1 w-full flex flex-col items-center text-center">
                <div
                    className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-64 perspective"
                    onMouseEnter={() => setFlipped(true)}
                    onMouseLeave={() => setFlipped(false)}
                >
                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out  ${
                            flipped ? "rotate-y-180" : ""
                        }`}
                        style={{
                            transformStyle: "preserve-3d",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {/* Front Side */}
                        <div
                            className="absolute w-full h-full backface-hidden rounded shadow-lg"
                            style={{
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <img
                                src={panelImage}
                                alt="Verification panel"
                                className="w-full h-full object-cover rounded shadow-lg"
                            />
                        </div>
                        {/* Back Side */}
                        <div
                            className="absolute bg-blue-500 w-full h-full flex items-center justify-center  rounded shadow-lg text-lg font-semibold backface-hidden"
                            style={{
                                transform: "rotateY(180deg)",
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-900">
                            <span className="text-white">Their Future</span>{" "}
                            <span className="text-gray-800">Starts With</span>{" "}
                            <span className="bg-yellow-300 px-2 rounded-md">Your Trust.</span>
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Add CSS for perspective and flip */}
        <style>
            {`
                .perspective {
                    perspective: 1000px;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
            `}
        </style>
    </div>
);
};

export default DonationPanel;
