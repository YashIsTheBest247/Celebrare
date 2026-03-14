import React from "react";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-semibold text-gray-700">GalleryOS</h1>

        <p className="px-4 py-2 text-gray-600 font-medium">
  Made by Yash Munshi
</p>
      </header>
      <main className="p-8">
        <Gallery />
      </main>

    </div>
  );
};

export default App;