import FakeStore from "@/components/FakeStore";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function() {
  return (
    <main className="bg-slate-50 text-slate-900 selection:bg-primary/20">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Pricing/>
    {/* Developer Section (API Demo) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <FakeStore />
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-6xl font-black tracking-tighter mb-8">Ready to transform your future?</h2>
        <button className="btn btn-primary btn-lg rounded-full px-12 text-lg">Get Started Now</button>
      </section>
    </main>
  );
}
