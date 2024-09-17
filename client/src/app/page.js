import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
    {/* Hero Section */}
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-300 to-indigo-300">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to ChatApp</h1>
        <p className="text-lg mb-8">
          Stay connected with your friends and colleagues.
        </p>
        <a href="/signup" className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-200">
          Get Started
        </a>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Real-time Messaging</h3>
            <p>Instant chat with anyone in your network.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Online Status</h3>
            <p>Know who’s online or offline in real-time.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-2xl font-semibold mb-4">User Management</h3>
            <p>Easy registration and profile management.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-slate-300 text-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Start chatting now!</h2>
        <a href="/signup" className="px-8 py-3 bg-white font-bold text-indigo-600 rounded-md hover:bg-green-200">
          Sign Up
        </a>
      </div>
    </section>
  </div>
  );
}
