import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header/Navigation */}
      <header className="py-6 px-8 md:px-16 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">My Portfolio</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-8 md:px-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Hello, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          A passionate web developer specializing in creating beautiful and functional websites and applications.
        </p>
        <a 
          href="#contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 md:px-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a web developer with a passion for creating clean, efficient, and user-friendly websites and applications. 
                With expertise in modern web technologies, I strive to deliver high-quality solutions that meet client needs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My journey in web development started several years ago, and I've been continuously learning and improving my skills since then.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 italic">Your profile image here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 italic">Project image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project One</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of your first project and what technologies you used.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">View Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 italic">Project image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project Two</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of your second project and what technologies you used.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">View Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 italic">Project image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project Three</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of your third project and what technologies you used.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">View Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 md:px-16 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm currently available for freelance work. If you have a project that you want to get started or have any questions, feel free to contact me.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 bg-gray-100 dark:bg-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            GitHub
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
