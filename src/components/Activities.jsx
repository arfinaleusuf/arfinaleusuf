import { activities } from '../data/portfolioData';

export default function Activities() {
  return (
    <section
      id="activities"
      className="section-padding bg-slate-900/30 border-y border-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase">
            Lifestyle
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Beyond Coding
          </h2>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4">
            Snapshots from my extra-curricular journey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[600px] auto-rows-[200px]">
          {activities.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden group shadow-xl ${
                item.className || ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {item.subtitle ? (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div>
                    <span className="px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold text-white mb-2 inline-block shadow-md">
                      {item.tag}
                    </span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    <p className="text-slate-300 text-sm mt-1">{item.subtitle}</p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                  {item.tag && (
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                      {item.tag}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
