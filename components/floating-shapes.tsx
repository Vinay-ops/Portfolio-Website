"use client";

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Yellow Square */}
      <div className="floating-shape absolute left-[10%] top-[20%] h-16 w-16 border-4 border-neo-black bg-neo-yellow hidden sm:block" />
      
      {/* Blue Circle */}
      <div className="floating-shape-delay-1 absolute right-[15%] top-[30%] h-20 w-20 rounded-full border-4 border-neo-black bg-neo-blue hidden md:block" />
      
      {/* Pink X */}
      <div className="floating-shape-delay-2 absolute left-[5%] top-[60%] hidden lg:block">
        <div className="relative h-16 w-16">
          <div className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 rotate-45 border-2 border-neo-black bg-neo-pink" />
          <div className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 -rotate-45 border-2 border-neo-black bg-neo-pink" />
        </div>
      </div>
      
      {/* Green Square */}
      <div className="floating-shape absolute right-[10%] top-[70%] h-12 w-12 border-4 border-neo-black bg-neo-green hidden sm:block" />
      
      {/* Orange Triangle */}
      <div className="floating-shape-delay-1 absolute left-[20%] bottom-[20%] hidden xl:block">
        <div className="h-0 w-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[45px] border-b-neo-orange" />
        <div className="absolute left-1 top-1 h-0 w-0 border-l-[21px] border-l-transparent border-r-[21px] border-r-transparent border-b-[38px] border-b-neo-orange" />
      </div>
      
      {/* Purple Circle */}
      <div className="floating-shape-delay-2 absolute right-[25%] bottom-[30%] h-14 w-14 rounded-full border-4 border-neo-black bg-neo-purple hidden md:block" />
    </div>
  );
}