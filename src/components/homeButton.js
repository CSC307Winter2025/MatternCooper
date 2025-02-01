"use client";

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className='pt-2 pl-5 pb-2'>
      <button
        className="p-2 flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        onClick={handleBack}
      >
        <Home className="h-5 w-5 text-gray-600" />
        <span className="text-gray-600">Home</span>
      </button>
    </div>
  );
}