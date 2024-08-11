"use client";
import { useState, useEffect } from "react";
import EditQuestion from "@/components/EditQuestion";
import DeleteQuestion from "@/components/DeleteQuestion";
import AddQuestion from "@/components/AddQuestion";
import toast from "react-hot-toast";

export default function page() {
    const [take, setTake] = useState(8);
    const [skip, setSkip] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handlePrevious = () => {
        setSkip(Math.max(0, skip - take));
    };

    const handleNext = () => {
        setSkip(skip + take);
    };

    const handleAllDelete = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                toast.error('Failed to delete the question');
                throw new Error('Failed to delete the question');
            }

            toast.success('Successfully deleted the question! Please refresh the page to see the changes', {
                duration: 7000
            });
        } catch (error) {
            console.error("Error deleting question:", error);
            toast.error('Failed to delete the question');
        }
    }
    
    

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



    return (
        <div className="pt-20 max-w-5xl mx-auto h-screen">
            <p className="text-lg">Welcome to admin dashboard</p>
            <div className="border max-w-4xl mx-auto rounded-md mt-5 min-h-[80%] border-gray-500 p-3 h-auto">
                <div className="flex">
                    <AddQuestion />
                    <button className="bg-red-700 text-black rounded-md py-2 px-4 font-semibold" onClick={handleAllDelete}>Delete All</button>
                </div>

                <div>
                    {isLoading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <div>
                            {data.length != 0 ? <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Question</th>
                                        <th className="px-4 py-2">Answer</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="border px-4 py-2">{item.question}</td>
                                            <td className="border px-4 py-2">{item.answer}</td>
                                            <td className="border px-4 py-2 flex ">
                                                <EditQuestion id={item.id} />
                                                <DeleteQuestion id={item.id} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> : <p className="text-center text-white">No data</p>}
                        </div>
                    )}
                </div>


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
    )
}
