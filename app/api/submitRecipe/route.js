// @############

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
  console.log('POST Request found');
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

    // console.log(!existingRecipe);
    if (!existingRecipe) {
      // console.log('in IF');
      // console.log(directions);
      // tempText = directions.split(Recipe Below:\n|Ingredients Below:);
      // const parts = directions.split(/(\n)/);
      // const result = parts.filter(Boolean);

      const match = directions.match(
        /Ingredients Below:\s*([\s\S]*?)\s*Recipe Below:/i
      );

      // console.log(match);

      const recipeMatch = directions.match(/Recipe Below:\s*([\s\S]*)/);

      // Log the results
      // console.log(result[0]);
      // console.log(typeof directions);
      // console.log(result);
      // const [ingredientsSection, recipeSection] =
      //   directions.split('Recipe Below:');

      // console.log('after splt');
      // console.log('directions');
      // console.log(match[1].split('\n'));

      // tempIng = match[1].split('\n');
      // console.log(recipeMatch[1].trim());

      // const parts = directions.split(/(Recipe Below:|Ingredients Below:)/);
      // console.log(parts);

      // const ingredients_test = parts[2].trim(); // Text after "Ingredients Below:"
      // const recipe_test = parts[4].trim(); // Text after "Recipe Below:"

      // console.log('Ingredients:', ingredients_test);
      // console.log('Recipe:', recipe_test);
      const newRecipe = await prisma.recipe.create({
        data: {
          title,
          description,
          directions: recipeMatch[1].trim(),
          ingredients: match[1].trim(),
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
