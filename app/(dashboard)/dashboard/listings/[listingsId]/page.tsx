'use client;';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Container from '../../_components/Container';
import Basic from '../_components/Basic';
import ProfileCard from '../../_components/ProfileCard';
import Reports from '../_components/Reports';

export default function page() {
  return (
    <Container element="section">
      <div>
          <h2 className="mb-3 text-white">Listing realtor:</h2>
          <div className="flex justify-between items-center pb-3">
            <ProfileCard className="my-4" name={'foo'} role="camel" star={3} />
            <button className="border p-2 rounded flex gap-2 items-center border-accent  max-h-max max-w-max">
              View Profile
            </button>
          </div>
        </div>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="w-full mb-8 justify-start rounded-none border-b-2 border-accent">
          <TabsTrigger
            value="basic"
            className="text-gray-500 data-[state=active]:text-white rounded-none data-[state=active]:border-b-4"
          >
            Basic
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="text-gray-500 data-[state=active]:text-white rounded-none data-[state=active]:border-b-4"
          >
            Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic"><Basic /></TabsContent>
        <TabsContent value="reports"><Reports report /></TabsContent>
      </Tabs>
    </Container>
  );
}
