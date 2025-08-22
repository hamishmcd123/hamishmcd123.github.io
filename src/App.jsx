import './App.css'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  return (
    <div className="relative min-w-screen min-h-screen overflow-hidden bg-gradient-to-br from-base-300 to-base-200">
      <div className="relative flex flex-row p-6 gap-10 max-w-7xl mx-auto animate-flyIn">
        <ProfileCard/>
        <div className="flex flex-col flex-1">
          <main className="bg-base-100/70 backdrop-blur-md border border-base-300/50 rounded-lg shadow-lg">
            <section className="p-6">
              <h1 className="text-3xl font-semibold gradient-text">About Me</h1>
              <p className="pt-3 leading-relaxed opacity-90">
                Hello there! I'm Hamish, an aspiring game programmer currently studying at AIE Melbourne with a strong interest in computer graphics and game engines.
              </p>
              <p className="pt-4 text-sm opacity-70">
                Profile image made by the very talented Dylan Goss.
              </p>
            </section>
          </main>
          <main className="bg-base-100/70 backdrop-blur-md border border-base-300/50 rounded-lg shadow-lg mt-5">
            <section className="p-6">
              <h2 className="text-3xl font-semibold gradient-text">Skills &amp; Tools</h2>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {[
                  { icon: 'devicon-cplusplus-plain', label: 'C++' },
                  { icon: 'devicon-python-plain', label: 'Python' },
                  { icon: 'devicon-javascript-plain', label: 'JavaScript' },
                  { icon: 'devicon-css3-plain', label: 'CSS3' },
                  { icon: 'devicon-html5-plain', label: 'HTML5' },
                  { icon: 'devicon-git-plain', label: 'Git' },
                  { icon: 'devicon-github-original', label: 'GitHub' },
                  { icon: 'devicon-cmake-plain', label: 'CMake' },
                  { icon: 'devicon-visualstudio-plain', label: 'Visual Studio' },
                  { icon: 'devicon-jetbrains-plain', label: 'JetBrains' },
                  { icon: 'devicon-opengl-plain', label: 'OpenGL' },
                  { icon: 'devicon-unrealengine-original', label: 'UE5' },
                  { icon: 'devicon-latex-original', label: 'LaTeX' },
                  { icon: 'devicon-linux-plain', label: 'Linux' },
                ].map((s, i) => (
                  <div key={i} className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-base-300/60 bg-base-100/60 p-4 hover-elevate">
                    <i className={`${s.icon} text-3xl opacity-90 group-hover:opacity-100 transition-opacity duration-200`}></i>
                    <span className="text-sm opacity-80">{s.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
   </div>
  )
}

export default App
