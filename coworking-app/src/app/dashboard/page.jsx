// 'use client';

// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [sectors, setSectors] = useState([]);

//   useEffect(() => {
//     fetch('/api/sectors')
//       .then((res) => res.json())
//       .then((data) => setSectors(data));
//   }, []);

//   const updateStatus = async (id, newStatus) => {
//     await fetch('/api/sectors', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id, status: newStatus }),
//     });

//     setSectors(
//       sectors.map((sector) =>
//         sector.id === id ? { ...sector, status: newStatus } : sector
//       )
//     );
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Estado de Sectores del Plano</h1>
//       <div className="relative">
//         <img src="xd.jpg" alt="Plano de Sectores" className="w-full h-auto" />
//         {sectors.map((sector) => (
//           <div
//             key={sector.id}
//             id={`sector${sector.id}`}
//             className={`sector ${sector.status} absolute p-2 rounded font-bold text-white cursor-pointer`}
//             onClick={() =>
//               updateStatus(
//                 sector.id,
//                 sector.status === 'libre'
//                   ? 'ocupado'
//                   : sector.status === 'ocupado'
//                   ? 'reservado'
//                   : 'libre'
//               )
//             }
//             style={getPositionStyles(sector.id)}
//           >
//             {sector.id}
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
//         .libre {
//           background-color: #28a745;
//         }
//         .ocupado {
//           background-color: #dc3545;
//         }
//         .reservado {
//           background-color: #ffc107;
//           color: #000;
//         }
//       `}</style>
//     </div>
//   );
// }

// function getPositionStyles(id) {
//   const positions = {
//     A: { top: '50px', right: '165px' },
//     B: { top: '50px', left: '350px' },
//     C: { top: '50px', left: '450px' },
//     D: { top: '100px', left: '565px' },
//     E: { top: '135px', left: '440px' },
//     F: { top: '230px', left: '400px' },
//     G: { top: '180px', left: '311px' },
//     H: { top: '230px', left: '270px' },
//     I: { top: '160px', left: '190px' },
//     J: { top: '230px', left: '200px' },
//     K: { top: '100px', left: '200px' },
//     P: { top: '45px', left: '210px' },
//   };

//   return positions[id];
// }
