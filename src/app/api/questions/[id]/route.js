
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
export async function DELETE(req,{params}){
    try {
        const { id } = params;
        await prisma.questions.delete({
            where: {
                id: parseInt(id),
            },
        });
        return NextResponse.json({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.error(new Error('Failed to delete question'));
    }
}

export async function PUT(req,{params}){
    try {
        const { id } = params;
        const res = await req.json();
        const { question, answer } = res;
        const updatedQuestion = await prisma.questions.update({
            where: {
                id: parseInt(id),
            },
            data: {
                question,
                answer,
            },
        });
        return NextResponse.json(updatedQuestion);
    } catch (error) {
        console.error(error);
        return NextResponse.error(new Error('Failed to update question'));
    }
}