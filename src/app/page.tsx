"use client"

import Navbar from "@/Components/Commons/Navbar";
import LargeScreenCard from "@/Components/LargeScreenCard";
import SmallScreenCard from "@/Components/SmallScreenCard";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  paddingX: '48px',
};

export default function Home() {
  return (
<>
<div className="hidden md:flex px-[24px] xl:px-[48px] w-screen h-screen relative">
     <LargeScreenCard /> 
</div>
<div className="grid md:hidden h-full gap-2.5 bg-[#F4F8FB]">
    <Navbar />
     <SmallScreenCard /> 
</div></>
  );
}
