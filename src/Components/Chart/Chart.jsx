// import { ResponsivePie } from "@nivo/pie";

// const data = [
//   {
//     id: "scala",
//     label: "scala",
//     value: 86,
//     color: "hsl(7, 70%, 50%)",
//   },
//   {
//     id: "php",
//     label: "php",
//     value: 569,
//     color: "hsl(255, 70%, 50%)",
//   },
// ];
// export default function Chart({ items }) {
//   // console.log(items?.type);
//   return (
//     <div className="flex gap-4 justify-between flex-wrap border w-[100%]">
//       <div className="flex gap-2 flex-wrap h-[200px] w-[200px] py-2">
//         <p>
//           Property <span className="font-bold">Status</span>
//         </p>
//         <ResponsivePie
//           margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
//           labelsChart="['Sale', 'Rent']"
//           innerRadius={0.4}
//           cornerRadius={1}
//           activeOuterRadiusOffset={1}
//           borderWidth={1}
//           borderColor="#f90000"
//           enableArcLinkLabels={false}
//           arcLinkLabelsSkipAngle={10}
//           arcLinkLabelsTextColor="#00000"
//           arcLinkLabelsOffset={3}
//           arcLinkLabelsThickness={9}
//           arcLinkLabelsColor={{ from: "color" }}
//           arcLabelsSkipAngle={10}
//           arcLabelsTextColor="#0000"
//           defs={[
//             {
//               id: "dots",
//               type: "patternDots",
//               background: "inherit",
//               color: "rgba(255, 255, 255, 0.9)",
//               size: 9,
//               padding: 1,
//               stagger: true,
//             },
//             {
//               id: "lines",
//               type: "patternLines",
//               background: "inherit",
//               color: "rgba(255, 255, 255, 0.3)",
//               rotation: -45,
//               lineWidth: 0,
//               spacing: 10,
//             },
//           ]}
//           legends={[
//             {
//               anchor: "top",
//               direction: "column",
//               justify: false,
//               translateX: 23,
//               translateY: -47,
//               itemsSpacing: 1,
//               itemWidth: 190,
//               itemHeight: 26,
//               itemTextColor: "#000",
//               itemDirection: "left-to-right",
//               itemOpacity: 1,
//               // symbolSize: 35,
//               symbolHeight: 15,
//               symbolWidth: 55,
//               symbolShape: "square",
//               effects: [
//                 {
//                   on: "hover",
//                   style: {
//                     itemTextColor: "#000",
//                   },
//                 },
//               ],
//             },
//           ]}
//         ></ResponsivePie>
//       </div>
//       <div className="flex gap-2 flex-wrap h-[200px] w-[200px] py-2">
//         <p>
//           Property <span className="font-bold">Location</span>
//         </p>
//         <ResponsivePie
//           labelsChart="locations"
//           margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
//           innerRadius={0.4}
//           cornerRadius={1}
//           activeOuterRadiusOffset={1}
//           borderWidth={1}
//           borderColor="#f90000"
//           Color="red"
//           enableArcLinkLabels={false}
//           arcLinkLabelsSkipAngle={10}
//           arcLinkLabelsTextColor="#00000"
//           arcLinkLabelsOffset={3}
//           arcLinkLabelsThickness={9}
//           arcLinkLabelsColor={{ from: "color" }}
//           arcLabelsSkipAngle={10}
//           arcLabelsTextColor="#0000"
//           defs={[
//             {
//               id: "dots",
//               type: "patternDots",
//               background: "inherit",
//               color: "rgba(255, 255, 255, 0.9)",
//               size: 9,
//               padding: 1,
//               stagger: true,
//             },
//             {
//               id: "lines",
//               type: "patternLines",
//               background: "inherit",
//               color: "rgba(255, 255, 255, 0.3)",
//               rotation: -45,
//               lineWidth: 0,
//               spacing: 10,
//             },
//           ]}
//           legends={[
//             {
//               anchor: "top",
//               direction: "column",
//               justify: false,
//               translateX: 23,
//               translateY: -47,
//               itemsSpacing: 1,
//               itemWidth: 190,
//               itemHeight: 26,
//               itemTextColor: "#000",
//               itemDirection: "left-to-right",
//               itemOpacity: 1,
//               // symbolSize: 35,
//               symbolHeight: 15,
//               symbolWidth: 55,
//               symbolShape: "square",
//               effects: [
//                 {
//                   on: "hover",
//                   style: {
//                     itemTextColor: "#000",
//                   },
//                 },
//               ],
//             },
//           ]}
//         ></ResponsivePie>
//       </div>
//       <div className="flex gap-2 flex-wrap h-[200px] w-[200px] py-2">
//         <p>
//           Property <span className="font-bold">Type</span>
//         </p>
//         <ResponsivePie
//           labelsChart="types"
//           margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
//           innerRadius={0.4}
//           cornerRadius={1}
//           activeOuterRadiusOffset={1}
//           borderWidth={1}
//           borderColor="#f90000"
//           enableArcLinkLabels={false}
//           arcLinkLabelsSkipAngle={10}
//           arcLinkLabelsTextColor="#00000"
//           arcLinkLabelsOffset={3}
//           arcLinkLabelsThickness={9}
//           arcLinkLabelsColor={{ from: "color" }}
//           arcLabelsSkipAngle={10}
//           arcLabelsTextColor="#0000"
//           defs={[
//             {
//               id: "dots",
//               type: "patternDots",
//               background: "inherit",
//               color: "rgba(255, 255, 255, 0.9)",
//               size: 9,
//               padding: 1,
//               stagger: true,
//             },
//             {
//               id: "lines",
//               type: "patternLines",
//               background: "inherit",
//               color: "rgba(255, 255, 255, 0.3)",
//               rotation: -45,
//               lineWidth: 0,
//               spacing: 10,
//             },
//           ]}
//           fill={[
//             {
//               match: {
//                 id: "scala",
//               },
//               id: "lines",
//             },
//             {
//               match: {
//                 id: "php",
//               },
//               id: "lines",
//             },
//           ]}
//           legends={[
//             {
//               anchor: "top",
//               direction: "column",
//               justify: false,
//               translateX: 23,
//               translateY: -47,
//               itemsSpacing: 1,
//               itemWidth: 190,
//               itemHeight: 26,
//               itemTextColor: "#000",
//               itemDirection: "left-to-right",
//               itemOpacity: 1,
//               // symbolSize: 35,
//               symbolHeight: 15,
//               symbolWidth: 55,
//               symbolShape: "square",
//               effects: [
//                 {
//                   on: "hover",
//                   style: {
//                     itemTextColor: "#000",
//                   },
//                 },
//               ],
//             },
//           ]}
//         ></ResponsivePie>
//       </div>
//     </div>
//   );
// }
