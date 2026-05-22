// function SummaryCard({ title, amount, color = 'text-slate-800' }) {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-md">
//       <h3 className="text-slate-500">{title}</h3>
//       <p className={`text-3xl font-bold mt-2 ${color}`}>₹{amount}</p>
//     </div>
//   );
// }

// export default SummaryCard;

import CountUpModule from 'react-countup';

const CountUp = CountUpModule.default;

function SummaryCard({ title, amount = 0, color = 'text-slate-800' }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-slate-500">{title}</h3>

      <p className={`text-3xl font-bold mt-2 ${color}`}>
        <CountUp
          start={0}
          end={amount}
          duration={1.8}
          separator=","
          prefix="₹"
        />
      </p>
    </div>
  );
}

export default SummaryCard;
