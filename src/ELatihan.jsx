
import './App.css';
import UseCard from './UseCard';
function ELatihan() {
  return (
    <main>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Cards
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <UseCard name="reno" email="reno@example.com" street="123 main" city="anon"/> 
        <UseCard name="jane" email="jane@example.com" street="123 main" city="anon"/>
        <UseCard name="jona" email="jona@example.com" street="123 main" city="anon" />
      </div>
    </div>
    </main>
  )
}

export default ELatihan
