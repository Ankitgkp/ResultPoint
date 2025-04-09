import React from 'react'

const HeroSection = () => {
    return (
        <div className="font-libre w-full h-screen bg-[#020617] relative overflow-hidden text-white px-6 py-10">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#467bff] rounded-full blur-[150px] opacity-60" />
                <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#138a48] rounded-full blur-[150px] opacity-60" />
            </div>
            <img
                className="w-full h-full object-cover z-8 opacity-7 absolute inset-0"
                src="https://media-hosting.imagekit.io/7255af5a82544c57/hero-pattern.svg?Expires=1838785882&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lwE6eTZN~tpEZJtQGPCl76Z0lEIC3IrhPQGyw4Vp-3O3v9DQUWNUMFZEridj4tgnS79nc-LpHovlqlMkAUs57G7z9OeOlhzCIOMuEo5UgBHIxp4BM5c~a6twnixz5PXzn8YBfR1oUB~roXnKrmhiZ3SGbjOYeUQ4TLOhWIYwr2jWkN2xIx-whl7j8GBqX1jzUxxeMvTVN9jTgw6CjKup7tzvIn-thENZs46qc5fH-VGSGLF6yDeYfuJTRpBnS0p43yTZ17ElwoSRQhs3bv~UsjmTBK6bDVNADxj58S~vqfhY4F8NciTnBpgFe631zyVRLBj331vCpmKQJJ47TJfcrQ__"
                alt=""
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto h-full overflow-hidden">
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Your one stop solution for <br />
                            <span className="text-[#477BFF]">skill-based learning</span>
                        </h1>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="330"
                            height="91"
                            fill="none"
                            className="-mt-6"
                        >
                            <path stroke="#467BFF" strokeLinecap="round" strokeWidth="6.83" d="M24.73 72.829c92.366-28.309 213.505-43.554 301.076-20.515" />
                            <path stroke="#467BFF" strokeLinecap="round" strokeWidth="6.83" d="M4.188 65.588c93.631-23.79 215.367-33.138 301.717-5.874" />
                        </svg>

                    </div>

                    <div className="grid grid-cols-2 gap-6 text-sm mt-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-white/10 p-2 rounded-full">🎯</div>
                            <p>Connect with peers for jobs, projects and much more</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-white/10 p-2 rounded-full">📡</div>
                            <p>Build connections that help you grow!</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-white/10 p-2 rounded-full">📸</div>
                            <p>Network with peers for projects, interview preparation</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-white/10 p-2 rounded-full">🧠</div>
                            <p>Expert advice a one click away for jobs, mock interviews</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                        <button className="bg-[#477BFF] text-white px-6 py-2 rounded-full font-medium">Join Now</button>
                    </div>
                </div>

                <div className="lg:w-1/2 flex gap-x-5 mt-10 justify-center overflow-y-auto]">
                    <div className="flex flex-col gap-y-4">
                        <div className="bg-[#e1fef0] rounded-xl w-[250px] h-[150px] flex flex-col justify-between p-4">
                            <h2 className="font-bold text-xl  text-black">Real-Time Alerts</h2>
                            <p className="text-sm text-black">Instant updates on results, admit cards & exams.</p>
                        </div>
                        <div className="bg-[#fdd6fa] rounded-xl w-[250px] h-[150px] flex flex-col justify-between p-4">
                            <h2 className="font-bold text-xl text-black">Clean Categories</h2>
                            <p className="text-sm text-black">Easy access to all sections – results, exams & more.</p>
                        </div>
                        <div className="bg-[#ffe3e1] w-[250px] h-[320px] rounded-xl flex flex-col justify-between p-4">
                            <div>
                                <h2 className="font-bold text-xl text-black">Mobile First Design</h2>
                                <p className="text-sm text-black">Lightning-fast, mobile-friendly interface – track your exams on the go.</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://www.propeers.in/images/cuate.svg" className="h-15 w-30" alt="MySQL" />
                                <img src="https://www.propeers.in/images/big-card-1.svg" className="h-15 w-30" alt="Code" />
                                <img src="https://www.propeers.in/ask/step2?commType=one-time" className="h-15 w-30" alt="AWS" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <div className="bg-[#fef0d1] rounded-xl w-[250px] h-[320px] flex flex-col justify-between p-4">
                            <h2 className="font-bold text-xl text-black">Advanced Search & Filters</h2>
                            <p className="text-sm text-black">Find exactly what you're looking for using keyword search, exam name, state-wise filters, and more.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className="bg-[#ccd8f7] rounded-xl w-[250px] h-[150px] flex flex-col justify-between p-4">
                                <h2 className="font-bold text-xl text-black">Expected Dates</h2>
                                <p className="text-sm text-black">Know upcoming result/admit card dates early.</p>
                            </div>
                            <div className="bg-[#ccd8f7] rounded-xl w-[250px] h-[150px] flex flex-col justify-between p-4">
                                <h2 className="font-bold text-xl text-black">All Exams Covered</h2>
                                <p className="text-sm text-black">Govt, SSC, UPSC, Bank, State & more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
