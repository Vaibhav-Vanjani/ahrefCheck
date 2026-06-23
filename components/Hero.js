export default function(){
    return <>
         <header className="relative pt-30 pb-24 px-6">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-blue-300 border-2 border-white" />)}
              </div>
              <span className="text-sm font-bold text-slate-600">50,000+ Students Enrolled</span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              Education Without <span className="text-primary underline decoration-wavy decoration-2 underline-offset-8">Boundaries</span>.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Join the world's most flexible American online school. Accredited, global, and designed to fit your lifestyle—not the other way around.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="btn btn-primary btn-lg rounded-xl px-10 text-lg shadow-xl shadow-primary/20">Start Your Journey</button>
              <button className="btn btn-outline btn-lg rounded-xl text-lg">View Curriculum</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[ {val: '50K+', label: 'Active Students'}, {val: '120+', label: 'Countries'}, {val: '98%', label: 'Success Rate'}, {val: '300+', label: 'Programs'} ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="text-4xl font-black text-primary mb-2">{stat.val}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
}