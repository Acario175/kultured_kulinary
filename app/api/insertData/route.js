import path from 'path';
import { promises as fs } from 'fs';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// export default async function handler(req, res) {
export async function GET(request) {
  try {
    const { data } = request.body; // Assuming the JSON data will be sent as 'data' field in the request body

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ error: 'Invalid data format' });
    }

    const insertedData = [];

    for (const item of data) {
      const existingItem = await prisma.ingredient.findUnique({
        where: {
          name: item.name,
          quantity: item.quantity,
          unit: item.unit,
          // Add other fields as per your schema for uniqueness check
        },
      });

      if (!existingItem) {
        const newItem = await prisma.ingredient.create({
          data: {
            name: item.name,
            quantity: item.quantity,
            unit: item.unit,
            // Add other fields as per your schema
          },
        });
        insertedData.push(newItem);
      }
    }

    // res
    //   .status(200)
    //   .json({ message: 'Data inserted successfully', insertedData });

    return NextResponse.json(
      {
        message: 'Data inserted successfully',
        insertedData,
      },
      { status: 200 }
    );
  } catch (error) {
    // res
    //   .status(500)
    //   .json({ error: 'Error inserting data', message: error.message });
    return NextResponse.json(
      {
        error: 'Error inserting data',
        message: error.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }

  // return Response.json({
  //   soldContents: soldContents,
  // });
}

// return NextResponse.json(
//   {
//     message: 'Data stored and old data deleted',
//   },
//   { status: 200 }
// );
