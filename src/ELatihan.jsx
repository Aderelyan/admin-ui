
import './App.css';
import react, { useEffect,useState } from 'react';
import UseCard from './UseCard';
import { getPosts } from './Services' ;
function ELatihan() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Gagal menampilkan data:", error);
        setError("Gagal mengambil data post.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Post Cards
      </h1>

      {loading && (
        <p className="text-center">Memuat data...</p>
      )}

      {error && (
        <p className="text-center text-red-600">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <UseCard
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default ELatihan;