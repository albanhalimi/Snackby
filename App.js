
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">SnackBy Chur</h1>
        <p className="text-lg">Burritos. Chips. Viral. Dein neuer Lieblingssnack für unterwegs.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Unser Konzept</h2>
          <p>
            SnackBy kombiniert warme Burrito-Zutaten mit knusprigen Chips, serviert in stylischen Packungen. Perfekt
            für unterwegs, zum Teilen oder für den Social-Media-Moment. Schnell, sättigend und trendy.
          </p>
        </div>
        <div className="rounded-2xl shadow-md overflow-hidden">
          <img src="/burrito-chips.jpg" alt="Burrito in Chips Verpackung" className="w-full h-auto" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Unsere Bestseller</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl shadow-md bg-gray-50">
            <h3 className="text-xl font-bold mb-2">Cheesy Beef</h3>
            <p>Rindfleisch, Cheddar, Salsa & Jalapeños</p>
          </div>
          <div className="p-4 rounded-2xl shadow-md bg-gray-50">
            <h3 className="text-xl font-bold mb-2">Vegan Vibes</h3>
            <p>Vegane Hackmischung, Avocado, BBQ-Sauce</p>
          </div>
          <div className="p-4 rounded-2xl shadow-md bg-gray-50">
            <h3 className="text-xl font-bold mb-2">Korean Kick</h3>
            <p>Würziges Poulet, Kimchi, Gochujang-Sauce</p>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Standort</h2>
        <p>In Planung: Nähe FH Graubünden / Bahnhof Chur</p>
        <p className="mt-2">Folge uns für Updates!</p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Kontakt & Socials</h2>
        <p>Instagram: <a href="https://instagram.com/snackby.ch" className="text-blue-500">@snackby.ch</a></p>
        <p>Email: <a href="mailto:hello@snackby.ch" className="text-blue-500">hello@snackby.ch</a></p>
      </section>
    </div>
  );
}
