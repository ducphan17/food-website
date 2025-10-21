// api/categories/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/app/utils/connect";

// async function because we are fetching a data
export const GET = async() => {
    try {
        const categories = await prisma.category.findMany({
          include: {
            products: true,
          },
          orderBy: {
            order: "asc",
          },
        });
        return new NextResponse(
          JSON.stringify(categories),
          { status: 200 }
        );
    }catch(err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}), 
            { status: 200 });
    }
}
export const POST = () => {
    return new NextResponse("Hello",{status: 200})
}