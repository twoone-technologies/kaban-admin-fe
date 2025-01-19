'use client;'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Listings from "@/app/(dashboard)/dashboard/realtors/_components/Listings"
import Container from "../../_components/Container"
import RatingsReviews from "../_components/RatingsReviews"
import TokenHistory from "../_components/TokenHistory"
import Profile from "../_components/Profile"

export default function ProfileHistory() {
  return (
    <Container element="section">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full mb-8 justify-start rounded-none border-b-2 border-accent">
          <TabsTrigger 
            value="profile" 
            className="text-gray-500 data-[state=active]:text-white rounded-none data-[state=active]:border-b-4"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger 
            value="listings" 
            className="text-gray-500 data-[state=active]:text-white rounded-none data-[state=active]:border-b-4"
          >
            Listings
          </TabsTrigger>
          <TabsTrigger 
            value="ratings" 
            className="text-gray-500 data-[state=active]:text-white rounded-none data-[state=active]:border-b-4"
          >
            Ratings/Reviews
          </TabsTrigger>
          <TabsTrigger 
            value="tokenHistory" 
            className="text-gray-500 data-[state=active]:text-white rounded-none data-[state=active]:border-b-4"
          >
            Token History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Profile />
        </TabsContent>
        <TabsContent value="listings">
          <Listings />
        </TabsContent>
        <TabsContent value="ratings">
          <RatingsReviews />
        </TabsContent>
        <TabsContent value="tokenHistory">
          <TokenHistory />
        </TabsContent>
      </Tabs>
    </Container>
  )
}
