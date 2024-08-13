import path from 'path';
import { promises as fs } from 'fs';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // ...
  // console.log('We in the Get');
  return NextResponse.json({ message: 'Hello World' });
}

// Handles POST requests to /api
export async function POST(request) {
  // ...
  // const body = await request.json();
  // console.log('in Post', body);
  try {
    // const { data } = request.body; // Assuming the JSON data will be sent as 'data' field in the request body
    const body = await request.json();
    // console.log(request.body);
    // console.log(body);
    if (!body) {
      // return res.status(400).json({ error: 'Invalid data format' });
      return NextResponse.json(
        {
          // error: 'Error inserting data',
          error: 'Invalid data format',
        },
        { status: 400 }
      );
    }
    const existingItem = await prisma.recipe.findUnique({
      where: {
        title: body,
      },
    });

    if (existingItem) {
      // console.log(existingItem);
      return NextResponse.json(existingItem);
    }

    // res.status(200).json({ message: 'Data inserted successfully', insertedData });
    // return NextResponse.json(insertedData);
  } catch (error) {
    // res.status(500).json({ error: 'Error inserting data', message: error.message });
    return NextResponse.json({ message: error.message });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
  return NextResponse.json({ message: 'Hello World' });
}
