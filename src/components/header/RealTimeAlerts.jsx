import './Header.css';

function RealTimeAlerts() {
  const text = "Water shortages are expected in the next 24 hours ----------- Data collected from 3W sensors shows poor water quality ----------- Water level in the reservoir is low -----------";

  return (
    <div className='top-24 w-full bg-red-500 text-white text-center py-1 font-bold overflow-hidden absolute'>
      <div className='marquee'>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default RealTimeAlerts;