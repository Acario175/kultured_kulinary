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
      const updatedRecord = await prisma.user.update({
        where: {
          title,
        },
        data: {
          title,
          description,
          directions,
        },
      });

      // await prisma.$disconnect();
      // return updatedRecord;
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
