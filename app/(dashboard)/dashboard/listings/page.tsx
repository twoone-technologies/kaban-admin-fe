'use client';
import React from 'react';
import ListingsStatistics from '../_components/ListingsStatistics';
import Container from '../_components/Container';
import PropertyListTable from '../_components/PropertyListTable';

function Listings() {
  const items = [
    { name: 'rent', value: 300, color: '#437EF7' },
    { name: 'sale', value: 40, color: '#5DC264' },
    { name: 'featured', value: 100, color: '#F2AE40' },
    { name: 'expired', value: 20, color: '#F04438' },
  ];

  return (
    <Container element="section" className="flex flex-col gap-8">
      <ListingsStatistics
        items={items}
        totals={{ properties: 4800, realtors: 4300 }}
      />
      <PropertyListTable />
    </Container>
  );
}

export default Listings;
