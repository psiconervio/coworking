// src/app/page.js
'use client'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    fetch('/api/sectors')
      .then((response) => response.json())
      .then((data) => setSectors(data));
  }, []);

  const handleSectorClick = async (id) => {
    const sector = sectors.find((s) => s.id === id);
    const newStatus = sector.status === 'libre' ? 'ocupado' : sector.status === 'ocupado' ? 'reservado' : 'libre';
    
    await fetch(`/api/sectors/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    });

    setSectors(sectors.map((s) => (s.id === id ? { ...s, status: newStatus } : s)));
  };

  const getSectorStyle = (id) => {
    const styles = {
      sectorA: { top: '59px', right: '190px', padding: '20px' },
      sectorB: { top: '60px', left: '484px', padding: '20px' },
      sectorC: { top: '60px', left: '407px', padding: '20px' },
      sectorD: { top: '152px', left: '508px', padding: '47px 60px' },
      sectorE: { top: '129px', left: '409px', padding: '32px 38px' },
      sectorF: { top: '220px', left: '421px', padding: '14px 25px' },
      sectorG: { top: '125px', left: '266px', padding: '30px 50px' },
      sectorH: { top: '219px', left: '294px', padding: '14px 25px' },
      sectorI: { top: '137px', left: '205px', padding: '30px 20px' },
      sectorJ: { top: '197px', left: '140px', padding: '20px 24px' },
      sectorK: { top: '86px', left: '144px', padding: '20px' },
      sectorP: { top: '14px', left: '183px', padding: '17px' },
    };
    return styles[id];
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Estado de Sectores del Plano</h1>
      <div className="relative w-full">
        <img src="/xd.jpg" alt="Plano de Sectores" className="w-full h-auto" />
        {sectors.map((sector) => (
          <div
            key={sector.id}
            id={sector.id}
            className={`sector ${sector.status} absolute`}
            onClick={() => handleSectorClick(sector.id)}
            style={getSectorStyle(sector.id)}
          >
            {sector.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// 'use client'
// import React from 'react';

// import { useState, useEffect } from 'react';


// export default function Home() {
//   const [sectors, setSectors] = useState([]);

//   useEffect(() => {
//     fetch('/api/sectors')
//       .then(response => response.json())
//       .then(data => {
//         setSectors(data);
//       })
//       .catch(error => console.error('Error loading sectors:', error));
//   }, []);

//   const handleSectorClick = (id) => {
//     setSectors(prevSectors => {
//       const updatedSectors = prevSectors.map(sector => {
//         if (sector.id === id) {
//           const newStatus = sector.status === 'libre' ? 'ocupado' : sector.status === 'ocupado' ? 'reservado' : 'libre';
//           fetch('/api/sectors', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id, status: newStatus }),
//           })
//             .then(response => response.json())
//             .then(updatedData => {
//               setSectors(updatedData);
//             })
//             .catch(error => console.error('Error updating sector:', error));
//           return { ...sector, status: newStatus };
//         }
//         return sector;
//       });
//       return updatedSectors;
//     });
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-4">Estado de Sectores del Plano</h1>
//       <div className="relative w-full">
//         <img src="/xd.jpg" alt="Plano de Sectores" className="w-full h-auto" />
//         {sectors.map(sector => (
//           <div
//             key={sector.id}
//             id={sector.id}
//             className={`sector ${sector.status} absolute`}
//             onClick={() => handleSectorClick(sector.id)}
//             style={getSectorStyle(sector.id)}
//           >
//             {sector.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const getSectorStyle = (id) => {
//   const styles = {
//     sectorA: { top: '23%', left: '70%', padding: '2.5%' },
//     sectorB: { top: '23%', left: '60.5%', padding: '2.5%' },
//     sectorC: { top: '23%', left: '51%', padding: '2.5%' },
//     sectorD: { top: '50%', left: '63.5%', padding: '7.5% 8%' },
//     sectorE: { top: '46%', left: '51%', padding: '4% 5%' },
//     sectorF: { top: '75%', left: '51%', padding: '2.5% 4.5%' },
//     sectorG: { top: '38%', left: '32%', padding: '5% 8%' },
//     sectorH: { top: '74%', left: '35%', padding: '2.5% 4.5%' },
//     sectorI: { top: '44%', left: '25%', padding: '5% 3%' },
//     sectorJ: { top: '70%', left: '16.5%', padding: '3.5% 4%' },
//     sectorK: { top: '30%', left: '18%', padding: '2.5%' },
//     sectorP: { top: '5%', left: '22.5%', padding: '2.3%' },
//   };

//   return styles[id] || {};
// };

// 'use client'
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [sectors, setSectors] = useState([]);

//   useEffect(() => {
//     fetch('/api/sectors')
//       .then(response => response.json())
//       .then(data => {
//         setSectors(data);
//       })
//       .catch(error => console.error('Error loading sectors:', error));
//   }, []);

//   const handleSectorClick = (id) => {
//     setSectors(prevSectors => {
//       const updatedSectors = prevSectors.map(sector => {
//         if (sector.id === id) {
//           const newStatus = sector.status === 'libre' ? 'ocupado' : sector.status === 'ocupado' ? 'reservado' : 'libre';
//           fetch('/api/sectors', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id, status: newStatus }),
//           })
//             .then(response => response.json())
//             .then(updatedData => {
//               setSectors(updatedData);
//             })
//             .catch(error => console.error('Error updating sector:', error));
//           return { ...sector, status: newStatus };
//         }
//         return sector;
//       });
//       return updatedSectors;
//     });
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-4">Estado de Sectores del Plano</h1>
//       <div className="relative w-full">
//         <img src="/xd.jpg" alt="Plano de Sectores" className="w-full h-auto relative" />
//         {sectors.map(sector => (
//           <div
//             key={sector.id}
//             id={sector.id}
//             className={`sector ${sector.status} absolute`}
//             onClick={() => handleSectorClick(sector.id)}
//             style={getSectorStyle(sector.id)}
//           >
//             {sector.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const getSectorStyle = (id) => {
//   const styles = {
//     sectorA: { top: '7%', left: '77.5%', padding: '2.5%' },
//     sectorB: { top: '7%', left: '60.5%', padding: '2.5%' },
//     sectorC: { top: '7%', left: '51%', padding: '2.5%' },
//     sectorD: { top: '50%', left: '63.5%', padding: '7.5% 10%' },
//     sectorE: { top: '44%', left: '51%', padding: '4% 5%' },
//     sectorF: { top: '75%', left: '51%', padding: '2.5% 4.5%' },
//     sectorG: { top: '38%', left: '32%', padding: '5% 8%' },
//     sectorH: { top: '74%', left: '35%', padding: '2.5% 4.5%' },
//     sectorI: { top: '44%', left: '25%', padding: '5% 3%' },
//     sectorJ: { top: '65%', left: '16.5%', padding: '3.5% 4%' },
//     sectorK: { top: '27%', left: '18%', padding: '2.5%' },
//     sectorP: { top: '2%', left: '21%', padding: '2.1%' },
//   };

//   return styles[id] || {};
// };



// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
