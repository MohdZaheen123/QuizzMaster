import FlashCard from "@/components/FlashCard";

export default function FlashCardList({ data }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center pt-20">
      {data.map((item, index) => (
        <FlashCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}