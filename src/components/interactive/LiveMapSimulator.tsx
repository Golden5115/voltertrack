import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Radio, 
  Fuel, 
  BatteryCharging, 
  Truck, 
  Car, 
  Bike,
  MapPin
} from 'lucide-react';
import { DEMO_FLEET, DEMO_GEOFENCES, SAMPLE_ROUTE_COORDINATES } from '../../data/fleetData';
import { VehicleTelemetry } from '../../types';

export const LiveMapSimulator: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleTelemetry>(DEMO_FLEET[0]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [isPlayingReplay, setIsPlayingReplay] = useState<boolean>(false);
  const [replayStep, setReplayStep] = useState<number>(0);
  const [showGeofences, setShowGeofences] = useState<boolean>(true);
  const [simulatedSpeed, setSimulatedSpeed] = useState<number>(DEMO_FLEET[0].speed);
  const [recentAlert, setRecentAlert] = useState<string | null>(null);

  // Live simulation tick for speed and coordinates jitter
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedVehicle.status === 'moving') {
        const speedDelta = (Math.random() - 0.5) * 4;
        setSimulatedSpeed(prev => Math.max(20, Math.min(110, Math.round(prev + speedDelta))));
      } else {
        setSimulatedSpeed(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedVehicle]);

  // Route playback simulation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingReplay) {
      timer = setInterval(() => {
        setReplayStep(prev => {
          if (prev >= SAMPLE_ROUTE_COORDINATES.length - 1) {
            setIsPlayingReplay(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlayingReplay]);

  // Trigger occasional simulated alert
  useEffect(() => {
    const alerts = [
      'VT-01 entered Ikeja Logistics Hub (Gate 1)',
      'VT-02 temperature optimal at 4.2°C (Cold Chain)',
      'VT-04 completed delivery on Mobolaji Bank Anthony Way',
      'VT-06 departed Kano Central Interchange en route Kaduna',
    ];
    let idx = 0;
    const alertInterval = setInterval(() => {
      setRecentAlert(alerts[idx % alerts.length]);
      idx++;
      setTimeout(() => setRecentAlert(null), 4000);
    }, 9000);
    return () => clearInterval(alertInterval);
  }, []);

  const filteredVehicles = DEMO_FLEET.filter(v => {
    if (filterStatus === 'all') return true;
    return v.status === filterStatus;
  });

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/10 overflow-hidden">
      
      {/* Dashboard Top Header Bar */}
      <div className="bg-[#012462] text-white px-4 py-3 border-b border-blue-900 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#005CCC] text-white text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE TELEMETRY (248 ACTIVE)
          </div>
          <span className="text-blue-300 text-xs hidden sm:inline">|</span>
          <span className="text-xs text-blue-100 font-mono hidden md:inline">
            Refreshed: <strong className="text-[#008CFF]">Sub-Second</strong> • Signal: 4G LTE-M
          </span>
        </div>

        {/* Geofence Toggle */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setShowGeofences(!showGeofences)}
            className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 font-bold ${
              showGeofences 
                ? 'bg-[#008CFF] text-white' 
                : 'bg-white/10 text-blue-200 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Geofences: {showGeofences ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:h-[540px]">
        
        {/* Left Sidebar: Fleet List & Status Filter */}
        <div className="lg:col-span-3 bg-slate-50 border-r border-slate-200 flex flex-col h-64 lg:h-full overflow-hidden">
          
          {/* Status Quick Filter Tabs */}
          <div className="p-3 border-b border-slate-200 bg-white">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#012462] mb-2">
              Fleet Status Filter
            </p>
            <div className="grid grid-cols-4 gap-1 text-[10px] font-bold">
              {[
                { id: 'all', label: 'All', count: DEMO_FLEET.length },
                { id: 'moving', label: 'Moving', count: DEMO_FLEET.filter(v=>v.status==='moving').length, color: 'text-emerald-600' },
                { id: 'idle', label: 'Idle', count: DEMO_FLEET.filter(v=>v.status==='idle').length, color: 'text-amber-600' },
                { id: 'offline', label: 'Offline', count: DEMO_FLEET.filter(v=>v.status==='offline').length, color: 'text-slate-500' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilterStatus(tab.id)}
                  className={`py-1.5 px-1 rounded-lg text-center transition-all ${
                    filterStatus === tab.id 
                      ? 'bg-[#005CCC] text-white shadow-sm' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span className={filterStatus === tab.id ? 'text-white' : tab.color}>{tab.count}</span> {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-200/80 p-2 space-y-1">
            {filteredVehicles.map(vehicle => {
              const isSelected = selectedVehicle.id === vehicle.id;
              return (
                <div
                  key={vehicle.id}
                  onClick={() => {
                    setSelectedVehicle(vehicle);
                    setSimulatedSpeed(vehicle.speed);
                  }}
                  className={`p-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-2 border-[#005CCC] shadow-md shadow-blue-500/10'
                      : 'hover:bg-slate-100/80 border border-transparent bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                        vehicle.status === 'moving' ? 'bg-emerald-500 animate-pulse' :
                        vehicle.status === 'idle' ? 'bg-amber-500' :
                        vehicle.status === 'parked' ? 'bg-blue-500' : 'bg-slate-400'
                      }`} />
                      <p className="text-xs font-bold text-[#012462] tracking-tight truncate max-w-[130px]">
                        {vehicle.name}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {vehicle.plate}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                    <span className="truncate max-w-[120px]">{vehicle.city}</span>
                    <span className="font-mono text-[#005CCC] font-bold">
                      {vehicle.status === 'moving' ? `${vehicle.speed} km/h` : vehicle.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Live Vector Simulated Map Display */}
        <div className="lg:col-span-6 relative bg-[#EEF4FB] overflow-hidden flex items-center justify-center min-h-[300px] select-none border-r border-slate-200">
          
          {/* Subtle light grid background */}
          <div className="absolute inset-0 bg-grid-cyber opacity-70" />

          {/* Light Radar Sweep Effect */}
          <div className="absolute w-[450px] h-[450px] rounded-full border border-blue-200 pointer-events-none flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-blue-200/80" />
            <div className="w-[150px] h-[150px] rounded-full border border-blue-200/60" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-blue-400/10 to-transparent animate-radar-sweep-light pointer-events-none" />
          </div>

          {/* Simulated Geofence Polygons */}
          {showGeofences && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {DEMO_GEOFENCES.map((gf) => {
                return (
                  <g key={gf.id}>
                    <polygon
                      points="60,80 220,90 240,200 80,180"
                      fill={`${gf.color}20`}
                      stroke={gf.color}
                      strokeWidth="2"
                      strokeDasharray="5 3"
                    />
                    <text x="75" y="105" fill={gf.color} fontSize="10" fontWeight="bold" fontFamily="monospace">
                      ⚑ {gf.name.substring(0, 24)}
                    </text>
                  </g>
                );
              })}
            </svg>
          )}

          {/* SVG Trajectory Breadcrumbs / Route Playback Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <polyline
              points="110,340 180,260 260,220 340,160 420,110"
              fill="none"
              stroke="#005CCC"
              strokeWidth="3"
              strokeDasharray="6 3"
              className="opacity-80"
            />
            {SAMPLE_ROUTE_COORDINATES.slice(0, replayStep + 1).map((pt, i) => (
              <circle
                key={i}
                cx={110 + i * 75}
                cy={340 - i * 55}
                r="4.5"
                fill="#008CFF"
                className="animate-pulse"
              />
            ))}
          </svg>

          {/* Dynamic Vehicle Marker Pins on Map */}
          <div className="absolute inset-0 z-20">
            {DEMO_FLEET.map((v, i) => {
              const posX = 15 + ((i * 14) % 70);
              const posY = 20 + ((i * 12) % 65);
              const isCurrent = v.id === selectedVehicle.id;

              return (
                <div
                  key={v.id}
                  onClick={() => {
                    setSelectedVehicle(v);
                    setSimulatedSpeed(v.speed);
                  }}
                  style={{ top: `${posY}%`, left: `${posX}%` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group`}
                >
                  <div className={`relative flex items-center justify-center p-2 rounded-full transition-transform ${
                    isCurrent ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}>
                    {v.status === 'moving' && (
                      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
                    )}
                    {isCurrent && (
                      <span className="absolute -inset-1 rounded-full bg-[#008CFF]/30 animate-pulse-blue" />
                    )}

                    {/* Marker icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 ${
                      isCurrent
                        ? 'bg-[#005CCC] text-white border-white shadow-blue-500/50'
                        : v.status === 'moving'
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-500'
                        : v.status === 'idle'
                        ? 'bg-amber-50 text-amber-600 border-amber-500'
                        : 'bg-white text-slate-500 border-slate-300'
                    }`}>
                      {v.type === 'truck' ? <Truck className="w-4 h-4" /> :
                       v.type === 'motorcycle' ? <Bike className="w-4 h-4" /> :
                       <Car className="w-4 h-4" />}
                    </div>

                    {/* Pin tooltip */}
                    <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center pointer-events-none z-40">
                      <div className="px-2 py-1 rounded-lg bg-[#012462] text-white text-[10px] whitespace-nowrap font-mono shadow-xl">
                        {v.name} • {v.speed} km/h
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Toast Notification */}
          {recentAlert && (
            <div className="absolute top-4 left-4 right-4 md:left-auto md:right-4 z-40 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-blue-200 text-[#012462] text-xs font-mono shadow-lg flex items-center gap-2 font-bold">
                <Radio className="w-4 h-4 text-[#005CCC] animate-pulse shrink-0" />
                <span>{recentAlert}</span>
              </div>
            </div>
          )}

          {/* Replay Control Bar at bottom of map */}
          <div className="absolute bottom-3 left-3 right-3 z-30">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-2.5 flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlayingReplay(!isPlayingReplay)}
                  className="w-8 h-8 rounded-xl bg-[#005CCC] hover:bg-[#008CFF] text-white flex items-center justify-center transition-colors shadow-md"
                  title={isPlayingReplay ? 'Pause Route Playback' : 'Play Route Playback'}
                >
                  {isPlayingReplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button
                  onClick={() => {
                    setIsPlayingReplay(false);
                    setReplayStep(0);
                  }}
                  className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                  title="Reset Playback"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Progress Slider */}
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-600 font-semibold">
                  <span>Replay: {SAMPLE_ROUTE_COORDINATES[replayStep]?.status || 'Trip Track'}</span>
                  <span>{SAMPLE_ROUTE_COORDINATES[replayStep]?.time || '08:00 AM'}</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#005CCC] h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((replayStep + 1) / SAMPLE_ROUTE_COORDINATES.length) * 100}%` }}
                  />
                </div>
              </div>

              <span className="text-[10px] font-mono font-bold text-[#005CCC] bg-blue-50 px-2 py-1 rounded-lg border border-blue-200">
                1x Speed
              </span>
            </div>
          </div>

        </div>

        {/* Right Sidebar: Active Vehicle Telematics Dossier */}
        <div className="lg:col-span-3 bg-white p-4 flex flex-col justify-between">
          
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#005CCC]">
                  Unit: {selectedVehicle.id}
                </span>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                  selectedVehicle.status === 'moving' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  selectedVehicle.status === 'idle' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                  'bg-slate-100 text-slate-700 border border-slate-200'
                }`}>
                  {selectedVehicle.status}
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#012462] mt-1">{selectedVehicle.name}</h4>
              <p className="text-xs font-mono text-slate-500 font-semibold">{selectedVehicle.plate}</p>
            </div>

            {/* Live Gauges */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-semibold">
                  <Activity className="w-3.5 h-3.5 text-[#005CCC]" />
                  <span>Velocity</span>
                </div>
                <p className="text-lg font-bold font-mono text-[#012462] mt-1">
                  {simulatedSpeed} <span className="text-[10px] font-normal text-slate-500">km/h</span>
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-semibold">
                  <Fuel className="w-3.5 h-3.5 text-amber-600" />
                  <span>Fuel Tank</span>
                </div>
                <p className="text-lg font-bold font-mono text-[#012462] mt-1">
                  {selectedVehicle.fuelLevel ?? 76}%
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-semibold">
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Battery</span>
                </div>
                <p className="text-xs font-bold font-mono text-[#012462] mt-1">
                  {selectedVehicle.voltage}V ({selectedVehicle.batteryLevel}%)
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-semibold">
                  <Zap className="w-3.5 h-3.5 text-[#005CCC]" />
                  <span>Ignition</span>
                </div>
                <p className={`text-xs font-bold font-mono mt-1 ${selectedVehicle.ignition ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {selectedVehicle.ignition ? 'ENGINE ON' : 'OFF'}
                </p>
              </div>
            </div>

            {/* Current Address & Driver */}
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] text-slate-500 flex items-center gap-1 font-semibold">
                  <MapPin className="w-3 h-3 text-[#005CCC]" /> Location Address
                </p>
                <p className="text-slate-800 font-semibold text-[11px] mt-0.5 line-clamp-2">
                  {selectedVehicle.currentAddress}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] text-slate-500 font-semibold">Assigned Driver</p>
                <p className="text-slate-800 font-bold text-[11px]">
                  {selectedVehicle.driverName}
                </p>
                <p className="text-[10px] font-mono text-slate-500">{selectedVehicle.driverPhone}</p>
              </div>
            </div>
          </div>

          {/* Quick Remote Cutoff Simulation */}
          <div className="pt-3 border-t border-slate-200">
            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-red-800">Remote Cutoff</p>
                <p className="text-[9px] text-red-600">Engine Relay Armed</p>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-red-600 text-white shadow-sm">
                SECURE
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Demo Notice Banner */}
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#005CCC]" />
          Interactive Product Simulation. Real VolterTrack accounts stream 100% live hardware data.
        </span>
        <a href="/demo" className="text-[#005CCC] hover:text-[#008CFF] font-bold hidden sm:inline">
          Book Custom Live Demo →
        </a>
      </div>

    </div>
  );
};
