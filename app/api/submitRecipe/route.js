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
    // const { data } = request.body; // Assuming the JSON data will be sent as 'data' field in the request body
    const body = await request.json();
    // console.log(request.body);
    // console.log('first body', body);
    const { title, description, directions } = body;
    // console.log(title, description, directions);

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
      const newRecipe = await prisma.recipe.create({
        data: {
          title,
          description,
          directions,
        },
      });
      await prisma.$disconnect();
      return NextResponse.json(newRecipe);
    } else {
      await prisma.$disconnect();
      return NextResponse.json({ message: 'Object exist' });
    }
    // }
  } catch (error) {
    return NextResponse.json({
      error: 'Error inserting data',
      message: error.message,
    });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
}
