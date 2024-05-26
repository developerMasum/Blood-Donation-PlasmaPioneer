// import React from "react";
// import { Card, CardContent, CardHeader } from "../ui/card";
// import { Badge } from "../ui/badge";

// type Region = {
//   name: string;
//   hasDonors: boolean;
// };

// const regions: Region[] = [
//   { name: "North Region", hasDonors: true },
//   { name: "South Region", hasDonors: false },
//   { name: "East Region", hasDonors: true },
//   { name: "West Region", hasDonors: true },
//   { name: "Central Region", hasDonors: false },
// ];

// const BloodDonationServiceAreas: React.FC = () => {
//   return (
//     <div className="p-8 bg-gray-900 min-h-screen">
//       <h1 className="text-4xl font-extrabold text-center text-white mb-12">
//         Blood Donation Service Areas
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {regions.map((region) => (
//           <Card
//             key={region.name}
//             className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
//           >
//             <CardHeader className="bg-gray-800 text-white p-6">
//               <h2 className="text-2xl font-semibold">{region.name}</h2>
//             </CardHeader>
//             <CardContent className="p-6">
//               {region.hasDonors ? (
//                 <Badge className="bg-green-600 text-white py-2 px-4 rounded-full">
//                   Donors Available
//                 </Badge>
//               ) : (
//                 <Badge className="bg-red-600 text-white py-2 px-4 rounded-full">
//                   No Donors Available
//                 </Badge>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BloodDonationServiceAreas;
