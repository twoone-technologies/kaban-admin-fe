"use client"
import React from 'react';
import Container from './_components/Container';
import RealtorsTable from './_components/RealtorsTable';
import PropertyListTable from './_components/PropertyListTable';
import UserListTable from './_components/UserListTable';
import PostBlogSupport from './_components/PostBlogSupport';
import ListingsStatistics from './_components/ListingsStatistics';

function AdminDashboard() {
  // Example usage
  const items = [
    { name: 'rent', value: 300,},
    { name: 'sale', value: 40,},
    { name: 'featured', value: 100,},
    { name: 'expired', value: 20,},
  ];

  return (
    <Container element="section" className="flex flex-col gap-8">
      <h1 className="text-white">Welcome to Kaban Nigeria</h1>
      <ListingsStatistics items={items} totals={{properties: 4800, realtors: 4300}} />
      <RealtorsTable />
      <PropertyListTable />
      <UserListTable />
      <PostBlogSupport />
    </Container>
  );
}

export default AdminDashboard;
