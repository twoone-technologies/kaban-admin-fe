"use client"
import React from 'react';
import Container from './_components/Container';
// import TanstackTable from './_components/TanstackTable'
// import { RealtorColumns, RealtorsData } from './_components/TablesData';
import RealtorsTable from './_components/RealtorsTable';
import PropertyListTable from './_components/PropertyListTable';
import UserListTable from './_components/UserListTable';
import PostBlogSupport from './_components/PostBlogSupport';

interface Item {
  name: string;
  value: number;
  color: string;
}

interface ItemWithPercentage extends Item {
  percentage: string;
}
function AdminDashboard() {
  const calculateBarLengthsInPercent = (
    items: Item[],
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
  const items: Item[] = [
    { name: 'rent', value: 300, color: '#437EF7' },
    { name: 'sale', value: 40, color: '#5DC264' },
    { name: 'featured', value: 100, color: '#F2AE40' },
    { name: 'expired', value: 20, color: '#F04438' },
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
    <Container element="section" className="flex flex-col gap-8">
      <h1 className="text-white">Welcome to Kaban Nigeria</h1>
      <div className="p-3 flex min-w-max flex-col border border-accent gap-4 rounded-lg">
        <div className="w-full justify-between flex">
          <div>
            <h2>TOTAL PROPERTIES</h2>
            <span className="text-white text-2xl">{formatNums(4500)}</span>
          </div>
          <div>
            <h2>TOTAL REALTORS</h2>
            <span className="text-white text-2xl">{formatNums(4500)}</span>
          </div>
        </div>
        <div className="flex gap-1 w-full rounded-sm">
          {barLengths.map((item) => (
            <div
              key={item.name}
              className="rounded-sm h-3"
              style={{ width: item.percentage, backgroundColor: item.color }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 md:flex-row md:gap-4 w-full rounded-sm">
          {barLengths.map((item) => (
            <div className="flex items-center gap-1" key={item.name}>
              <div
                className="rounded-full h-2 w-2"
                style={{ backgroundColor: item.color }}
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
      <RealtorsTable />
      <PropertyListTable />
      <UserListTable />
      <PostBlogSupport />
    </Container>
  );
}

export default AdminDashboard;
