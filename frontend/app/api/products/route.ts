// api/categories/route.ts
import { NextResponse, NextRequest } from "next/server"
import {prisma} from "@/app/utils/connect"
// instead of recreating prismaClient over and over
// => create utils/connect.ts


// FETCH ALL PRODUCTS
// async function because we are fetching a data
// nextRequest is to get the id of the category, and so the searchParams and cat
export const GET = async(req: NextRequest) => {
    const {searchParams} = new URL(req.url)
    const cat = searchParams.get("cat")
    // localhost:3000/api/products?cat="bowls"
    try {
        const products = await prisma.product.findMany({
            where: {
                ...(cat ? {catSlug: cat} : {})
            }
        })
        return new NextResponse(
          JSON.stringify(products),
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