import path from 'path';
import { promises as fs } from 'fs';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // ...
  // console.log('We in the Get');
  // return NextResponse.json({ message: 'Hello World' });

  try {
    // const data = await prisma.post.findUnique({
    //   where: { id: postId },
    //   include: { author: true },
    // });
    const data = await prisma.Ingredient.findMany();

    // console.log(data);

    if (!data) {
      // res.status(404).json({ error: 'Post not found' });
      // return NextResponse.json({ message: 'Hello World' });
      return NextResponse.json(
        {
          // error: 'Error inserting data',
          error: 'Data not found',
        },
        { status: 404 }
      );
    }

    // res.status(200).json(data);
    const newArray = data.map((item) => ({
      label: item.name,
      value: item.name,
    }));

    // console.log(newArray);
    return NextResponse.json(
      {
        data: newArray,
      },
      { status: 200 }
    );
  } catch (error) {
    // res.status(500).json({ error: 'Error fetching post' });
    return NextResponse.json(
      {
        // error: 'Error inserting data',
        error: 'Error fetching Data',
      },
      { status: 500 }
    );
  }
}

// Handles POST requests to /api
export async function POST(request) {
  // ...
  // console.log('in Post', body);
  // try {
  //   const { data } = request.body; // Assuming the JSON data will be sent as 'data' field in the request body
  //   const body = await request.json();
  //   // console.log(request.body);
  //   console.log(body);
  //   if (!body || !Array.isArray(body)) {
  //     // return res.status(400).json({ error: 'Invalid data format' });
  //     return NextResponse.json(
  //       {
  //         // error: 'Error inserting data',
  //         error: 'Invalid data format',
  //       },
  //       { status: 400 }
  //     );
  //   }
  //   const insertedData = [];
  //   for (const item of body) {
  //     // console.log(item);
  //     const existingItem = await prisma.ingredient.findUnique({
  //       where: {
  //         name: item.strIngredient,
  //         // description: item.strDescription,
  //         // unit: item.unit,
  //         // Add other fields as per your schema for uniqueness check
  //       },
  //     });
  //     if (!existingItem) {
  //       const newItem = await prisma.ingredient.create({
  //         data: {
  //           name: item.strIngredient,
  //           description: item.strDescription,
  //           // Add other fields as per your schema
  //         },
  //       });
  //       insertedData.push(newItem);
  //     }
  //   }
  //   // res.status(200).json({ message: 'Data inserted successfully', insertedData });
  //   return NextResponse.json(insertedData);
  // } catch (error) {
  //   // res.status(500).json({ error: 'Error inserting data', message: error.message });
  //   return NextResponse.json({ message: error.message });
  // } finally {
  //   await prisma.$disconnect(); // Disconnect Prisma client
  // }
  // return NextResponse.json({ message: 'Hello World' });
}

// "
// Invalid `prisma.ingredient.findUnique()` invocation:

// {
//   where: {
//     name: "Chicken",
// ?   id?: Int,
// ?   AND?: IngredientWhereInput | IngredientWhereInput[],
// ?   OR?: IngredientWhereInput[],
// ?   NOT?: IngredientWhereInput | IngredientWhereInput[],
// ?   description?: StringFilter | String,
// ?   Recipes?: StringFilter | String
//   }
// }

// Argument `where` of type IngredientWhereUniqueInput needs at least one of `id` arguments. Available options are marked with ?."

// "
// Invalid `prisma.ingredient.create()` invocation:

// The provided value for the column is too long for the column's type. Column: for"
