import path from 'path';
import { promises as fs } from 'fs';

// export default async function handler(req, res) {
export async function GET(request) {
  // console.log(process.cwd());
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'lib');

  // Read the json data file data.json
  let listingsContents = await fs.readFile(
    jsonDirectory + '/listingData.json',
    'utf8'
  );
  let rentalsContents = await fs.readFile(
    jsonDirectory + '/rentalData.json',
    'utf8'
  );
  // Return the content of the data file in json format
  listingsContents = JSON.parse(listingsContents);
  rentalsContents = JSON.parse(rentalsContents);

  return Response.json({
    listingsContents: listingsContents,
    rentalsContents: rentalsContents,
  });
}

// export async function GET(request) {
// export default async function handler(req, res) {
//   console.log('hi');
// }

// console.log('hi2_route');

// export async function GET(request) {
//   // export default async function handler(req, res) {
//   // console.log('hi');
//   // res.status(200).json({ message: 'Hello from Next.js!' });

//   return Response.json({ message: 'Hello from KR' });
// }
