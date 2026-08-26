import React, { useState } from 'react';
import { 
  Smartphone, 
  Radio, 
  Bell, 
  Navigation, 
  Lock, 
  CheckCircle2, 
  MapPin, 
  Activity, 
  ShieldAlert,
  Battery,
  Wifi,
  Sparkles
} from 'lucide-react';

export const MobileAppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'alerts' | 'trips' | 'security'>('map');

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-gradient-to-b from-blue-50/60 to-white border border-slate-200/90 p-6 md:p-12 shadow-xl shadow-blue-950/5 relative overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Col: Explanatory Copy & Screen Switcher */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>VolterTrack iOS & Android Apps</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012462] tracking-tight leading-tight font-['Space_Grotesk']">
            Your entire fleet in the palm of your hand.
          </h3>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Monitor real-time vehicle movement, receive instant push notifications, replay journeys, and issue emergency engine cutoff commands directly from your mobile device anywhere in the world.
          </p>

          {/* Interactive Feature Selectors */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { id: 'map', title: 'Live GPS View', desc: 'Sub-second real-time map with traffic', icon: Radio },
              { id: 'alerts', title: 'Push Alerts Feed', desc: 'Instant ignition, speed & boundary alerts', icon: Bell },
              { id: 'trips', title: 'Trip Replays', desc: 'Daily route breadcrumbs & stop durations', icon: Navigation },
              { id: 'security', title: 'Remote Cutoff', desc: 'Secure one-tap engine immobilizer', icon: Lock },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-blue-50/90 border-[#005CCC] shadow-md text-[#012462]'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#005CCC]' : 'text-slate-400'}`} />
                    <span className="text-xs font-bold text-[#012462]">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* App Store Download Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-slate-900 text-white flex items-center gap-3 shadow-md hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-2xl leading-none"></span>
              <div className="text-left">
                <p className="text-[9px] text-slate-300 uppercase tracking-wider">Download on the</p>
                <p className="text-xs font-bold text-white">Apple App Store</p>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-slate-900 text-white flex items-center gap-3 shadow-md hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-xl leading-none text-emerald-400">▶</span>
              <div className="text-left">
                <p className="text-[9px] text-slate-300 uppercase tracking-wider">Get it on</p>
                <p className="text-xs font-bold text-white">Google Play Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Phone Mockup Frame */}
        <div className="lg:col-span-6 flex justify-center items-center">
          
          {/* Smartphone Bezel */}
          <div className="w-[300px] sm:w-[320px] rounded-[42px] p-3 bg-slate-900 border-4 border-slate-800 shadow-2xl shadow-blue-950/20 relative">
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
              <div className="w-2 h-2 rounded-full bg-blue-900" />
            </div>

            {/* Screen Canvas in Light Theme */}
            <div className="w-full h-[540px] bg-slate-50 rounded-[32px] overflow-hidden flex flex-col justify-between relative border border-slate-200">
              
              {/* Phone Status Bar */}
              <div className="pt-2 px-6 flex items-center justify-between text-[10px] font-mono text-slate-600 z-20">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-slate-700" />
                  <Battery className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>

              {/* Dynamic Screen Content Based on Active Tab */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 pt-4">
                
                {/* Header in App */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-1.5">
                    <img src="/logo.png" alt="VolterTrack" className="h-6 w-auto" />
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    221 ONLINE
                  </span>
                </div>

                {/* Tab: Map */}
                {activeTab === 'map' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="h-44 rounded-2xl bg-blue-100/60 border border-blue-200 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-grid-cyber opacity-60" />
                      {/* Pulse marker */}
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-12 h-12 rounded-full bg-blue-400/30 animate-ping" />
                        <div className="w-8 h-8 rounded-full bg-[#005CCC] text-white flex items-center justify-center shadow-lg font-bold text-xs border border-white">
                          🚗
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md p-1.5 rounded-xl border border-slate-200 text-[10px] font-mono text-slate-800 font-bold shadow-sm">
                        📍 Victoria Island • 64 km/h
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-1 text-xs shadow-sm">
                      <div className="flex justify-between font-bold text-[#012462]">
                        <span>Express Transit Van #04</span>
                        <span className="text-emerald-600">Moving</span>
                      </div>
                      <p className="text-[10px] text-slate-500">Driver: Tunde Adeleke • Battery 94%</p>
                    </div>
                  </div>
                )}

                {/* Tab: Alerts */}
                {activeTab === 'alerts' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    {[
                      { title: 'Ignition ON', desc: 'Haulage Master #12 started engine', time: '1m ago', color: 'text-[#005CCC]' },
                      { title: 'Geofence Exit', desc: 'Departed Ikeja Depot Perimeter', time: '5m ago', color: 'text-amber-700' },
                      { title: 'Overspeed Warning', desc: 'Speed exceeded 95 km/h on Expressway', time: '14m ago', color: 'text-rose-700' },
                      { title: 'Battery Safe', desc: 'Main power 26.4V stable', time: '1h ago', color: 'text-emerald-700' },
                    ].map((alt, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-0.5 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-bold ${alt.color}`}>{alt.title}</span>
                          <span className="text-[9px] font-mono text-slate-400">{alt.time}</span>
                        </div>
                        <p className="text-[10px] text-slate-600 leading-tight">{alt.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab: Trips */}
                {activeTab === 'trips' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
                      <div className="flex justify-between text-xs font-bold text-[#012462]">
                        <span>Today\'s Distance</span>
                        <span className="text-[#005CCC] font-mono font-bold">142.6 km</span>
                      </div>
                      <p className="text-[10px] text-slate-500">3 completed trips • 42 mins idle</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] space-y-1 shadow-sm">
                      <p className="font-bold text-[#012462]">Trip #1: Ikeja ➔ VI</p>
                      <p className="text-[10px] text-slate-500">08:15 AM - 09:20 AM</p>
                      <p className="text-[10px] font-mono font-bold text-emerald-600">Avg Speed: 42 km/h • Max: 78 km/h</p>
                    </div>
                  </div>
                )}

                {/* Tab: Security */}
                {activeTab === 'security' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-center space-y-2">
                      <ShieldAlert className="w-8 h-8 text-red-600 mx-auto" />
                      <h5 className="text-xs font-bold text-red-900">Emergency Engine Immobilizer</h5>
                      <p className="text-[10px] text-red-700">
                        Disables starter relay securely when vehicle is stationary.
                      </p>
                      <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md">
                        ARM ENGINE CUTOFF
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Mobile Bottom Navigation Bar in mockup */}
              <div className="bg-white p-2 border-t border-slate-200 flex items-center justify-around text-slate-500 text-[10px] font-bold">
                <button onClick={() => setActiveTab('map')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'map' ? 'text-[#005CCC]' : ''}`}>
                  <Radio className="w-3.5 h-3.5" /> Map
                </button>
                <button onClick={() => setActiveTab('alerts')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'alerts' ? 'text-[#005CCC]' : ''}`}>
                  <Bell className="w-3.5 h-3.5" /> Alerts
                </button>
                <button onClick={() => setActiveTab('trips')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'trips' ? 'text-[#005CCC]' : ''}`}>
                  <Navigation className="w-3.5 h-3.5" /> Trips
                </button>
                <button onClick={() => setActiveTab('security')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'security' ? 'text-[#005CCC]' : ''}`}>
                  <Lock className="w-3.5 h-3.5" /> Security
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
