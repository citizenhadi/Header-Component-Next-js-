import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-6">
      <h1 className="text-5xl font-bold mb-12 text-gray-800 text-center">
        Choose Your Header
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-xl justify-center">
        <Link
          href="/darkHeaderPage"
          className="flex-1 text-center py-4 px-6 text-2xl font-semibold rounded-xl bg-black text-white shadow-lg hover:bg-gray-800 transition duration-300"
        >
          Dark Header
        </Link>
        <Link
          href="/lightHeaderPage"
          className="flex-1 text-center py-4 px-6 text-2xl font-semibold rounded-xl bg-white text-black border border-gray-300 shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Light Header
        </Link>
      </div>
    </div>
  );
}
