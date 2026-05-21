function SummaryCard({ title, amount, color = 'text-slate-800' }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-slate-500">{title}</h3>
      <p className={`text-3xl font-bold mt-2 ${color}`}>₹{amount}</p>
    </div>
  );
}

export default SummaryCard;
