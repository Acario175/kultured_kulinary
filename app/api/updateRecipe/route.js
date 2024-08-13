// import path from 'path';
// import { promises as fs } from 'fs';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // ...
  return NextResponse.json({ message: 'Hello World' });
}

// Handles POST requests to /api
export async function POST(request) {
  try {
    const body = await request.json();

    const { title, description, directions } = body;

    if (!body) {
      return NextResponse.json(
        {
          error: 'Invalid data format',
        },
        { status: 400 }
      );
    }

    const existingRecipe = await prisma.recipe.findUnique({
      where: {
        title,
      },
    });

    if (!existingRecipe) {
      // const newRecipe = await prisma.recipe.create({
      //   data: {
      //     title,
      //     description,
      //     directions,
      //   },
      // });
      // await prisma.$disconnect();
      // return NextResponse.json(newRecipe);
      throw new Error('Record not found');
    } else {
      // console.log(existingRecipe);
      const match = directions.match(
        /Ingredients Below:\s*([\s\S]*?)\s*Recipe Below:/i
      );

      const recipeMatch = directions.match(/Recipe Below:\s*([\s\S]*)/);

      const updatedRecord = await prisma.recipe.update({
        where: {
          title,
        },
        data: {
          title,
          description,
          directions: recipeMatch[1].trim(),
          ingredients: match[1].trim(),
        },
      });

      // await prisma.$disconnect();
      // return updatedRecord;
      // console.log('updatedRecord');
      // console.log(updatedRecord);
      return NextResponse.json(updatedRecord);
    }
    // }
  } catch (error) {
    return NextResponse.json({
      error: 'Error with data',
      message: error.message,
    });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
}
