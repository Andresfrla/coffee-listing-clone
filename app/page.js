import CoffeeList from "@/public/components/CoffeeList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="mt-[160px] mr-[90px] ml-[90px] bg-[#1B1D1F] rounded-xl">
        <div className="pt-[180px] text-center pl-[310px] pr-[310px]">
            <h2 className="text-[#FEF7EE] text-[32px]">Our Collection</h2>
            <p className="text-[#6F757C] text-[16px] mt-2">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className="mt-4">
            <button className="bg-[#6F757C] text-[#FEF7EE] rounded-xl text-[14px] p-2 mr-4">All Products</button>
            <button className="text-[#FEF7EE]">Available Now</button>
          </div>
        </div>
        <div>
          <CoffeeList />
        </div>
      </div>
    </main>
  );
}
