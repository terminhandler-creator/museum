export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-bold text-primary-600">Meridian Museum</a>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-primary-600 transition">Exhibitions</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition">Reviews</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 transition">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition">Contact</a>
          </nav>
          <a href="#contact" className="bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition">Plan Your Visit</a>
        </div>
      </header>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video src="/hero.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">Where Art Meets History</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">A world-class museum featuring rotating exhibitions, permanent collections spanning 5,000 years, and immersive experiences.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#services" className="bg-primary-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-600 transition">Current Exhibitions</a>
            <a href="#contact" className="bg-white/20 backdrop-blur text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/30 transition border border-white/30">Visit Today</a>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Exhibitions & Galleries</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our permanent collection and ever-changing special exhibitions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/service-1.jpg", title: "Permanent Collection", desc: "Over 10,000 works spanning ancient civilizations to contemporary art, including paintings, sculpture, and artifacts." },
              { img: "/service-2.jpg", title: "Special Exhibitions", desc: "Rotating exhibitions featuring loaned masterworks, emerging artists, and thematic explorations from around the world." },
              { img: "/service-3.jpg", title: "Interactive Galleries", desc: "Hands-on exhibits with touchscreen displays, augmented reality guides, and immersive multimedia installations." },
              { img: "/service-4.jpg", title: "Sculpture Garden", desc: "A landscaped outdoor gallery featuring large-scale sculptures surrounded by native plantings and reflecting pools." },
              { img: "/service-5.jpg", title: "Education Programs", desc: "School field trips, university lectures, workshops for all ages, and docent-led tours of the collection." },
              { img: "/service-6.jpg", title: "Evening Events", desc: "Members-only previews, gallery talks, live music nights, and fundraising galas in our stunning atrium." },
            ].map((s, i) => (
              <div key={i} className="group bg-primary-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">About Meridian Museum</h2>
            <p className="text-gray-700 text-lg mb-6">The Meridian Museum has been a cultural cornerstone of our community for over 75 years. We preserve the past, celebrate the present, and inspire the future.</p>
            <p className="text-gray-700 text-lg mb-8">Our curatorial team travels the globe to bring extraordinary exhibitions to our galleries, while our educators make art and history accessible to visitors of every age.</p>
            <div className="flex gap-8">
              <div><p className="text-3xl font-bold text-primary-600">75+</p><p className="text-gray-600">Years Open</p></div>
              <div><p className="text-3xl font-bold text-primary-600">10K+</p><p className="text-gray-600">Works in Collection</p></div>
              <div><p className="text-3xl font-bold text-primary-600">250K</p><p className="text-gray-600">Annual Visitors</p></div>
            </div>
          </div>
          <img src="/about.jpg" alt="About Meridian Museum" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h3 className="font-display text-3xl font-bold text-gray-900 mb-10 text-center">Museum Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "/team-1.jpg", name: "Dr. Helen Torres", role: "Director" },
              { img: "/team-2.jpg", name: "William Park", role: "Chief Curator" },
              { img: "/team-3.jpg", name: "Safia Rahman", role: "Education Director" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <img src={m.img} alt={m.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="font-display text-xl font-bold text-gray-900">{m.name}</h4>
                <p className="text-primary-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-16 text-center">Visitor Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "The special exhibition on Impressionism was breathtaking. World-class curation in a beautiful space.", name: "Robert K.", role: "Art Lover" },
              { quote: "My kids loved the interactive galleries. It is one of the few museums where they actually wanted to stay longer.", name: "Maria G.", role: "Family Visitor" },
              { quote: "The sculpture garden is my favorite place in the city. I come here every weekend just to sit and think.", name: "David W.", role: "Member" },
            ].map((t, i) => (
              <div key={i} className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}</div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What are your admission prices?", a: "Adults $18, Seniors $14, Students $10, Children under 12 free. Members always free." },
              { q: "Are guided tours available?", a: "Yes. Docent-led tours run hourly from 11am-3pm. Private group tours can be booked in advance." },
              { q: "Is photography allowed?", a: "Yes, personal photography without flash is welcome in the permanent collection. Special exhibitions may vary." },
              { q: "Do you have a gift shop?", a: "Our museum shop carries art books, prints, jewelry, and unique gifts inspired by the collection." },
              { q: "How do I become a member?", a: "Memberships start at $75/year and include unlimited free admission, member previews, and exclusive event invitations." },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl p-6 border border-primary-100">
                <summary className="cursor-pointer font-bold text-gray-900 flex justify-between items-center">
                  {item.q}
                  <svg className="w-5 h-5 text-primary-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
                </summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Plan Your Visit</h2>
              <p className="text-gray-600 text-lg mb-8">We look forward to welcoming you. Reach out for group bookings or special accommodations.</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>1 Museum Plaza</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>(555) 555-0001</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>info@meridianmuseum.com</p>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-full font-medium hover:bg-primary-600 transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Meridian Museum</h3>
              <p className="text-gray-400">Art and history museum with a permanent collection of 10,000+ works, rotating exhibitions, interactive galleries, and a sculpture garden.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition">Exhibitions</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-gray-400">Wed-Mon: 10am-5pm</p>
              <p className="text-gray-400">Closed Tuesdays</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Meridian Museum. A Tideline demo.</p>
            <p className="mt-1">Designed by <a href="https://tideline.torreypines.io" className="text-gray-400 hover:text-white transition">Tideline</a> &mdash; AI-powered web design</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
