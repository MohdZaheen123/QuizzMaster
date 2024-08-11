"use client";
import FlashCardList from "@/components/FlashCardList";
import { useState, useEffect } from "react";

export default function Home() {
  const [take, setTake] = useState(8);
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/?skip=${skip}&take=${take}`);
        const newData = await req.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [skip, take]);

  const handlePrevious = () => {
    setSkip(Math.max(0, skip - take));
  };

  const handleNext = () => {
    setSkip(skip + take);
  };

  return (
    <div className="container mx-auto py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Flashcards</h1>
      <div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        // console.log(data)
        data.length!=0?<FlashCardList data={data} />:<p className="text-center text-white">No data</p>
      )}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handlePrevious}
          disabled={skip === 0}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={data.length < take}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}