export default function(){
    return <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col justify-end">
            <h2 className="text-4xl font-black mb-4">World-Class Mentorship</h2>
            <p className="text-slate-400 max-w-md">Our educators don't just teach; they guide, inspire, and prepare you for global universities.</p>
          </div>
          <div className="bg-primary rounded-[2rem] p-10 text-white flex flex-col justify-between">
            <span className="text-6xl">🌎</span>
            <h2 className="text-2xl font-black">Global Classroom</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-center gap-4 shadow-sm">
            <h2 className="text-3xl font-black">Flexible</h2>
            <p className="text-slate-500">Learn at 2 AM or 2 PM. Your schedule, your terms.</p>
          </div>
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-[2rem] p-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black mb-2">Accredited Excellence</h2>
              <p className="text-slate-500">Recognized by Cognia, WASC, and NEASC.</p>
            </div>
            <button className="btn btn-primary rounded-full">Verify Accreditation</button>
          </div>
        </div>
      </section>
}