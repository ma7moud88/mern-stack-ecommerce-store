export default function AdminDashboard() {
  const stats = {
    users: 120,
    orders: 340,
    sales: "$25,000",
    lowStock: 5,
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Users" value={stats.users} />
        <StatCard title="Orders" value={stats.orders} />
        <StatCard title="Total Sales" value={stats.sales} />
        <StatCard title="Low Stock Products" value={stats.lowStock} />
      </div>
    </>
  );
}

function StatCard({ title, value }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}