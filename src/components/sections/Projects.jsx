import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols- md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Lucky-Sevens</h3>
                <p className="text-gray-400 mb-4">
                  An RNG game that utilizes Yahtzee gameplay with a combination
                  of Poker mechanics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Lucky-Sevens/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Multi-Trail</h3>
                <p className="text-gray-400 mb-4">
                  Using classList methods and FontAwesome to create a mod of
                  cursor trails. These trails are customizable and fully
                  functional. Public Mod is coming soon!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Multi-Trail/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Mock Calculator</h3>
                <p className="text-gray-400 mb-4">
                  A mock-up calculator using JavaScript operations to calculate
                  user inputs. These inputs function to become your personal
                  Calculator!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Soccer-Pong/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Soccer Pong</h3>
                <p className="text-gray-400 mb-4">
                  Using Vanilla JavaScript to create game logic of pong. Using canvas methods and collision logic, pong comes to life in this program.  Inspired by the Soccer trend, play Soccer Pong!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Flappy-Kirby/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Flappy Kirby</h3>
                <p className="text-gray-400 mb-4">
                  An RNG game that utilizes Yahtzee gameplay with a combination
                  of Poker mechanics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["JavaScript", "Phaser"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Lucky-Sevens/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Super-Squad 2.0</h3>
                <p className="text-gray-400 mb-4">
                  An RNG game that utilizes Yahtzee gameplay with a combination
                  of Poker mechanics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/Levi-G-Duarte/super-squad-2.0"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}