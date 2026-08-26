import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Bell, 
  Clock, 
  Sparkles
} from 'lucide-react';
import { DEMO_GEOFENCES } from '../../data/fleetData';

export const GeofenceVisualizer: React.FC = () => {
  const [activeZone, setActiveZone] = useState(DEMO_GEOFENCES[0]);
  const [vehiclePos, setVehiclePos] = useState<{ x: number; y: number }>({ x: 15, y: 35 });
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [alertMessage, setAlertMessage] = useState<string | null>('Vehicle entered depot boundary');
  const [notifyEntry, setNotifyEntry] = useState<boolean>(true);
  const [notifyExit, setNotifyExit] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setVehiclePos(prev => {
          let nextX = prev.x + 2;
          let nextY = prev.y + (Math.sin(prev.x / 10) * 2);
          if (nextX > 85) {
            nextX = 10;
          }

          // Boundary check
          const isInside = nextX >= 25 && nextX <= 55 && nextY >= 20 && nextY <= 65;
          if (isInside && notifyEntry) {
            setAlertMessage(`[GEOFENCE ENTRY] Unit VT-01 crossed into ${activeZone.name}`);
          } else if (!isInside && notifyExit && nextX > 55) {
            setAlertMessage(`[GEOFENCE EXIT] Unit VT-01 departed ${activeZone.name}`);
          }

          return { x: nextX, y: nextY };
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isSimulating, activeZone, notifyEntry, notifyExit]);

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-white border border-slate-200/90 p-6 md:p-8 shadow-xl shadow-blue-950/5 overflow-hidden">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-[#005CCC] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Geofence Boundary Simulator</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#012462] mt-1 font-['Space_Grotesk']">
            Visual Perimeter & Boundary Alerts
          </h3>
          <p className="text-xs text-slate-500">
            Draw custom polygons around depots, warehouses, and client sites with instant entry/exit SMS triggers.
          </p>
        </div>

        {/* Zone Selector */}
        <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
          {DEMO_GEOFENCES.map(zone => (
            <button
              key={zone.id}
              onClick={() => {
                setActiveZone(zone);
                setVehiclePos({ x: 15, y: 35 });
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeZone.id === zone.id ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              {zone.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left: Interactive Canvas Map */}
        <div className="lg:col-span-8 bg-[#EEF4FB] rounded-2xl border border-slate-200 h-[340px] relative overflow-hidden flex items-center justify-center select-none">
          <div className="absolute inset-0 bg-grid-cyber opacity-70" />

          {/* Virtual Polygon Zone */}
          <div 
            className="absolute top-[20%] left-[25%] w-[32%] h-[48%] rounded-xl border-2 border-dashed flex flex-col justify-between p-3"
            style={{ 
              borderColor: activeZone.color, 
              backgroundColor: `${activeZone.color}25` 
            }}
          >
            <span className="text-[10px] font-mono font-bold tracking-wider" style={{ color: activeZone.color }}>
              ⚑ {activeZone.name}
            </span>
            <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-600">
              <span>{activeZone.type.toUpperCase()}</span>
              <span>14 VEHICLES</span>
            </div>
          </div>

          {/* Moving Vehicle Marker */}
          <div
            style={{ left: `${vehiclePos.x}%`, top: `${vehiclePos.y}%` }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 flex flex-col items-center"
          >
            <div className="relative">
              <span className="w-8 h-8 rounded-full bg-[#008CFF]/30 absolute -inset-1 animate-ping" />
              <div className="w-7 h-7 rounded-full bg-[#005CCC] text-white font-bold flex items-center justify-center text-[10px] shadow-lg border-2 border-white">
                🚚
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-md bg-[#012462] text-white font-mono text-[9px] mt-1 shadow-md font-bold whitespace-nowrap">
              VT-01 (64 km/h)
            </span>
          </div>

          {/* Alert Notification Toast inside map */}
          {alertMessage && (
            <div className="absolute bottom-4 left-4 right-4 z-30">
              <div className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-blue-200 text-[#012462] text-xs font-mono font-bold shadow-lg flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#005CCC] animate-bounce shrink-0" />
                <span className="truncate">{alertMessage}</span>
              </div>
            </div>
          )}

          {/* Play/Pause Simulator */}
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="absolute top-3 right-3 z-30 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#005CCC] text-xs font-bold shadow-sm"
          >
            {isSimulating ? 'Pause Motion' : 'Resume Motion'}
          </button>
        </div>

        {/* Right: Geofence Rule Settings Panel */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <h4 className="font-bold text-[#012462] flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#005CCC]" />
              Notification Triggers
            </h4>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-700 font-medium">Alert on Boundary Entry</span>
              <input
                type="checkbox"
                checked={notifyEntry}
                onChange={(e) => setNotifyEntry(e.target.checked)}
                className="w-4 h-4 accent-[#005CCC] rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-700 font-medium">Alert on Boundary Exit</span>
              <input
                type="checkbox"
                checked={notifyExit}
                onChange={(e) => setNotifyExit(e.target.checked)}
                className="w-4 h-4 accent-[#005CCC] rounded cursor-pointer"
              />
            </label>

            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
              <p className="flex items-center gap-1.5 text-slate-700 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#005CCC]" /> Curfew Hours: 07:00 PM – 06:00 AM
              </p>
              <p className="text-[10px] text-slate-500">
                Unauthorized movement during curfew immediately sends emergency SMS to management.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-xs space-y-1">
            <p className="font-bold text-[#005CCC] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" /> Automated Turnaround Analytics
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              VolterTrack automatically logs time spent inside client facilities to prevent driver delays and dispute detention fees.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
