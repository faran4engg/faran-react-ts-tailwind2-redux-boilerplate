import CTA from '../components/CTA';

import PageTitle from '../components/Typography/PageTitle';

function Dashboard() {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      <div className="grid gap-6 mb-8 md:grid-cols-2">Home</div>
    </>
  );
}

export default Dashboard;
