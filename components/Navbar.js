export default function(){
    return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
            <div className="navbar max-w-7xl mx-auto px-6">
              <div className="navbar-start">
                <span className="text-2xl font-black tracking-tighter text-slate-900">IS<span className="text-primary">.</span></span>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 font-bold text-slate-700">
                  {['Programs', 'Mentors', 'Success', 'Pricing', 'Academy'].map(item => (
                    <li key={item}><a className="hover:bg-primary/5 hover:text-primary transition-all px-4 py-2 rounded-lg">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div className="navbar-end gap-3">
                <button className="btn btn-ghost btn-sm rounded-lg">Login</button>
                <button className="btn btn-primary btn-sm rounded-lg px-6 shadow-lg shadow-primary/20">Apply Now</button>
              </div>
            </div>
          </nav>
}