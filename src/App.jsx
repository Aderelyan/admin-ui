import "./App.css";

function App() {
  return (
    <div className="p-6">
      {/* Tutorial 3: grid card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl flex justify-center items-center hover:scale-105 duration-300 hover:border hover:bg-gray-200 hover:shadow-lg transition-shadow"
          >
            card
          </div>
        ))}
      </div>

      {/* Tutorial 5: uji font */}
      <div className="mt-12">
        <h1 className="text-3xl font-bold">Ini font default</h1>
        <h1 className="text-3xl font-poppins">Ini font Poppins</h1>
        <p>
          Ini font default juga. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Illum perferendis dolores provident debitis,
          necessitatibus ullam, quibusdam dolore cumque velit, molestias
          recusandae exercitationem pariatur. Quas ullam aliquid ea. Repellat,
          exercitationem similique!
        </p>
      </div>
    </div>
  );
}

export default App;
