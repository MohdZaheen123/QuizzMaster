import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export async function POST(req){
    try {
        const res = await req.json();
        const { question, answer } = res;
        const newQuestion = await prisma.questions.create({
            data: {
                question,
                answer,
            },
        });
        return NextResponse.json(newQuestion);
    } catch (error) {
        console.error(error);
        return NextResponse.error(new Error('Failed to create question'));
    }
}

export async function GET(req){
    try {
        let skip =req.nextUrl.searchParams.get('skip');
        let take =req.nextUrl.searchParams.get('take');
        const questions = await prisma.questions.findMany({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
        });
        return NextResponse.json(questions);
    } catch (error) {
        console.error(error);
        return NextResponse.error(new Error('Failed to fetch questions'));
    }
}

export async function DELETE(req){
    try {
        await prisma.questions.deleteMany({});
        return NextResponse.json({message: "Successfully deleted all questions"});
    } catch (error) {
        console.error(error);
        return NextResponse.error(new Error('Failed to delete questions'));
    }
}