import Header from "@/components/Header";
import ServerStats from "@/components/ServerStats";
import ForumCategories from "@/components/ForumCategories";
import DonationSection from "@/components/DonationSection";
import RecentActivity from "@/components/RecentActivity";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <ServerStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ForumCategories />
          </div>

          <div className="space-y-8">
            <RecentActivity />
          </div>
        </div>

        <div className="mt-12">
          <DonationSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
