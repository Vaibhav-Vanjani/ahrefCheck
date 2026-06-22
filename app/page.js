import ApiButton from "@/components/ApiButton";
import FakeStore from "@/components/FakeStore";

export default function Home() {
  return (
    <main className="bg-base-100">

      <div className="navbar bg-base-100 border-b sticky top-0 z-50">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">
      International Schooling
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Store</a>
      </li>
      <li>
        <a>API Demo</a>
      </li>
    </ul>
  </div>

  <div className="navbar-end">
    <button className="btn btn-primary">
      Get Started
    </button>
  </div>
</div>

      <section className="hero min-h-[85vh]">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="max-w-xl">
            <div className="badge badge-primary badge-lg mb-4">
              Trusted by 50,000+ Students
            </div>

            <h1 className="text-6xl font-black leading-tight">
              Learn From Anywhere In The World
            </h1>

            <p className="py-6 text-lg opacity-80">
              Accredited online education with flexible
              schedules, personal mentors and global
              classrooms.
            </p>

            <div className="flex gap-4">
              <button className="btn btn-primary btn-lg">
                Start Learning
              </button>

              <button className="btn btn-outline btn-lg">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="mockup-window border bg-base-300 shadow-2xl">
            <div className="bg-base-200 px-10 py-16">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Students</div>
                  <div className="stat-value">50K+</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Countries</div>
                  <div className="stat-value">120+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Students Love Us
          </h2>

          <p className="mt-4 opacity-70">
            Everything you need to succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="text-5xl">🎯</div>
              <h3 className="card-title text-xl">
                Flexible Learning
              </h3>
              <p>
                Study at your own pace and schedule.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="text-5xl">👨‍🏫</div>
              <h3 className="card-title text-xl">
                Expert Mentors
              </h3>
              <p>
                Personalized support from teachers.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="text-5xl">🌎</div>
              <h3 className="card-title text-xl">
                Global Community
              </h3>
              <p>
                Connect with learners worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Student Success Stories
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "The flexibility helped me balance
                  sports and academics."
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="avatar placeholder">
                    <div className="bg-primary text-primary-content rounded-full w-10">
                      <span>A</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold">Alex</p>
                    <p className="text-sm opacity-60">
                      Student Athlete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I completed my studies while travelling."
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="avatar placeholder">
                    <div className="bg-secondary text-secondary-content rounded-full w-10">
                      <span>S</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold">Sarah</p>
                    <p className="text-sm opacity-60">
                      International Student
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "The one-to-one support was incredible."
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="avatar placeholder">
                    <div className="bg-accent text-accent-content rounded-full w-10">
                      <span>J</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold">John</p>
                    <p className="text-sm opacity-60">
                      Graduate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Pricing Plans
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card border shadow-xl">
            <div className="card-body">
              <h3 className="text-3xl font-bold">
                Self Study
              </h3>

              <div className="text-5xl font-black">
                $99
              </div>

              <ul className="space-y-2">
                <li>✓ Flexible Learning</li>
                <li>✓ Recorded Classes</li>
                <li>✓ Global Curriculum</li>
              </ul>

              <button className="btn btn-outline mt-4">
                Choose Plan
              </button>
            </div>
          </div>

          <div className="card bg-primary text-primary-content shadow-2xl">
            <div className="card-body">
              <div className="badge badge-secondary">
                MOST POPULAR
              </div>

              <h3 className="text-3xl font-bold">
                One-to-One
              </h3>

              <div className="text-5xl font-black">
                $249
              </div>

              <ul className="space-y-2">
                <li>✓ Personal Mentor</li>
                <li>✓ Live Classes</li>
                <li>✓ Flexible Timings</li>
              </ul>

              <button className="btn btn-secondary mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-center text-5xl font-bold mb-12">
            FAQ
          </h2>

          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border">
              <input type="radio" name="faq" />
              <div className="collapse-title">
                Can I learn while travelling?
              </div>
              <div className="collapse-content">
                Yes, classes are fully online.
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border">
              <input type="radio" name="faq" />
              <div className="collapse-title">
                Are schedules flexible?
              </div>
              <div className="collapse-content">
                Yes, depending on your plan.
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApiButton/>
      <FakeStore/>

      <footer className="footer footer-center p-16 bg-neutral text-neutral-content">
        <div>
          <h2 className="text-3xl font-bold">
            Ready To Start?
          </h2>

          <button className="btn btn-primary mt-4">
            Apply Now
          </button>
        </div>
      </footer>
    </main>
  );
}