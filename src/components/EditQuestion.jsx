"use client"
import toast from 'react-hot-toast';
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function EditQuestion({id}) {
    const [isEditLoading, setIsEditLoading] = useState(false);
    const[question, setQuestion] = useState("");
    const[answer, setAnswer] = useState("");


    const handleEdit = async () => {
        try {
            setIsEditLoading(true);
            let obj;
            if(question && answer){
                obj = {question, answer}
            }
            else if(answer){
                obj = {answer}
            }
            else{
                obj = {question}
            }

          const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          });
          setIsEditLoading(false);
          toast.success('Successfully updated the question! please refresh the page to see the changes',{
            duration: 7000
          });

        } catch (error) {
          console.error("Error fetching data:", error);
            toast.error('Failed to update the question');
        }
      }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <button onClick={()=>{setAnswer(""); setQuestion("")}} className="bg-blue-500 text-white rounded-md py-1 px-2 mx-2 font-semibold">Edit</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Question</DialogTitle>
                        <DialogDescription>
                            Make changes to your question here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="question" className="text-right">
                                Question
                            </label>
                            <input  onChange={(e) => setQuestion(e.target.value)} id="question" className="col-span-3 text-black" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="answer" className="text-right">
                                Answer
                            </label>
                            <input onChange={(e) => setAnswer(e.target.value)} id="answer" className="col-span-3 text-black" />
                        </div>
                    </div>
                    <DialogFooter>
                        <button disabled={isEditLoading} type="submit" className="px-3 py-2 bg-gray-600 rounded-md" onClick={handleEdit}>{isEditLoading?"Please wait":"Save changes"}</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
