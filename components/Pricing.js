export default function(){
    return <section className="py-24 bg-white border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-5xl font-black tracking-tighter">Choose your path</h2>
                  <p className="text-slate-500">Transparent pricing. No hidden fees. Lifetime access to alumni network.</p>
                </div>
                {['Self-Study', 'One-to-One'].map((plan, i) => (
                  <div key={plan} className={`p-8 rounded-3xl border-2 ${i === 1 ? 'border-primary bg-primary/5' : 'border-slate-100'}`}>
                    <h3 className="text-xl font-bold">{plan}</h3>
                    <div className="text-5xl font-black my-6">${i === 0 ? '99' : '249'}<span className="text-xl text-slate-400">/mo</span></div>
                    <ul className="space-y-4 mb-8 text-slate-600 font-medium">
                      {['Personal Mentor', 'Live Classes', 'Global Curriculum', 'Career Guidance'].map(feat => (
                        <li key={feat} className="flex items-center gap-3">✅ {feat}</li>
                      ))}
                    </ul>
                    <button className={`btn w-full ${i === 1 ? 'btn-primary' : 'btn-outline'}`}>Select Plan</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
}