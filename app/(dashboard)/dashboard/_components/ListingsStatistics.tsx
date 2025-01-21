"use client"
import React from 'react';

export interface ListingsStatisticsProps {
  name: string;
  value: number;
}

interface ItemWithPercentage extends ListingsStatisticsProps {
  percentage: string;
}

type TotalStats = {
  properties: number;
  realtors: number;
}

export default function ListingsStatistics({items, totals}: {items: ListingsStatisticsProps[], totals: TotalStats}) {  
  const calculateBarLengthsInPercent = (
    items: ListingsStatisticsProps[],
  ): ItemWithPercentage[] => {
    // Calculate the total value from the "value" property of each item
    const totalValue = items.reduce((sum, item) => sum + item.value, 0);
    // Map the array into a new array of objects, adding the percentage property
    return items.map((item) => ({
      ...item, // Spread existing properties (name, value, color)
      percentage: ((item.value / totalValue) * 100).toFixed(2) + '%', // Add percentage as a formatted string
    }));
  };

  // Example usage
  const itemsColor: {color: string }[] = [
    { color: '#437EF7' },
    { color: '#5DC264' },
    { color: '#F2AE40' },
    { color: '#F04438' },
  ];

  const barLengths: ItemWithPercentage[] = calculateBarLengthsInPercent(items);
  // console.log(barLengths);

  // Output: { rent: "65.22%", sale: "8.70%", featured: "21.74%", expired: "4.35%" }
  const formatNums = (number: string | number) => {
    if (typeof number !== 'number' && typeof number !== 'string') {
      throw new Error(
        'Input must be a number or a string representing a number.',
      );
    }
    // Convert the number to a string and format with commas
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="p-3 flex min-w-max flex-col border border-accent gap-4 rounded-lg">
        <div className="w-full justify-between flex">
          <div>
            <h2>TOTAL PROPERTIES</h2>
            <span className="text-white text-2xl">{formatNums(totals.properties)}</span>
          </div>
          <div>
            <h2>TOTAL REALTORS</h2>
            <span className="text-white text-2xl">{formatNums(totals.realtors)}</span>
          </div>
        </div>
        <div className="flex gap-1 w-full rounded-sm">
          {barLengths.map((item, id) => (
            <div
              key={item.name}
              className="rounded-sm h-3"
              style={{ width: item.percentage, backgroundColor: itemsColor[id].color }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 md:flex-row md:gap-4 w-full rounded-sm">
          {barLengths.map((item, id) => (
            <div className="flex items-center gap-1" key={item.name}>
              <div
                className="rounded-full h-2 w-2"
                style={{ backgroundColor: itemsColor[id].color }}
              />
              <span className="text-[12px] capitalize">
                {item.name} Listings
              </span>
              <span className="text-white font-bold text-[12px] capitalize">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
  )
}
