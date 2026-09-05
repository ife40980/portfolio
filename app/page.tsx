export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial' }}>
      <section className="mb-12">
        <h1 className="text-5xl font-bold">Ifeanyi Godswill</h1>
        <p className="text-xl mt-4 text-gray-400">Full-Stack Software Engineer</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">

          {/*Project 1*/}
          <a
            href="https://ife40980.github.io/spotify-clone/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-gray-200 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">Spotify Web Application</h3>
              <p className="text-gray-400 mt-2">
                React, JavaScript, HTML/CSS, iTunes API
              </p>
              <p className="mt-3">
                Built a Spotify-inspired web app that integrates the iTunes API for
                real-time music data, with music browsing, playlist creation, and a
                responsive UI for desktop and mobile.
              </p>
            </div>
          </a>

          {/*Project 2*/}
          <div className="bg-gray-200 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">AI Chat App with RAG</h3>
            <p className="text-gray-400 mt-2">
              React, TypeScript, Node.js, PostgreSQL, Gemini API
            </p>
            <p className="mt-3">
              Full-stack AI chat application with a React/TypeScript frontend and
              Node.js/Express backend. Implemented Retrieval-Augmented Generation using
              vector embeddings and PostgreSQL&apos;s pgvector extension, grounding AI
              responses in a custom knowledge base.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: Ifeanyigodswill23@gmail.com</p>
        <p>Phone: 443-251-8847</p>
        <p>GitHub: <a href="https://github.com/ife40980" target="_blank" rel="noreferrer">github.com/ife40980</a></p>
      </section>
    </main>
  );
}
