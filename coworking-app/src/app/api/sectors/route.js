let sectors = [
  { id: 'sectorA', name: 'A', status: 'libre' },
  { id: 'sectorB', name: 'B', status: 'libre' },
  { id: 'sectorC', name: 'C', status: 'libre' },
  { id: 'sectorD', name: 'D', status: 'libre' },
  { id: 'sectorE', name: 'E', status: 'libre' },
  { id: 'sectorF', name: 'F', status: 'libre' },
  { id: 'sectorG', name: 'G', status: 'libre' },
  { id: 'sectorH', name: 'H', status: 'libre' },
  { id: 'sectorI', name: 'I', status: 'libre' },
  { id: 'sectorJ', name: 'J', status: 'libre' },
  { id: 'sectorK', name: 'K', status: 'libre' },
  { id: 'sectorP', name: 'P', status: 'libre' },
];

export async function GET(req) {
  return new Response(JSON.stringify(sectors), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const { id, status } = await req.json();

  sectors = sectors.map(sector =>
    sector.id === id ? { ...sector, status } : sector
  );

  return new Response(JSON.stringify(sectors), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}



// let sectors = [
//     { id: 'A', status: 'libre' },
//     { id: 'B', status: 'ocupado' },
//     { id: 'C', status: 'reservado' },
//     { id: 'D', status: 'libre' },
//     { id: 'E', status: 'ocupado' },
//     { id: 'F', status: 'reservado' },
//     { id: 'G', status: 'libre' },
//     { id: 'H', status: 'ocupado' },
//     { id: 'I', status: 'reservado' },
//     { id: 'J', status: 'libre' },
//     { id: 'K', status: 'ocupado' },
//     { id: 'P', status: 'reservado' },
//   ];
  
//   export default function handler(req, res) {
//     if (req.method === 'GET') {
//       res.status(200).json(sectors);
//     } else if (req.method === 'PUT') {
//       const { id, status } = req.body;
//       sectors = sectors.map((sector) =>
//         sector.id === id ? { ...sector, status } : sector
//       );
//       res.status(200).json(sectors);
//     } else {
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  