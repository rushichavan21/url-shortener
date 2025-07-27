import React from 'react'

const ServerDown = () => {
  return (
    <div><div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="text-center bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-4">🚧 Server Under Maintenance</h1>
        <p className="text-lg mb-4">
          Our server is currently <span className="text-red-500 font-semibold">offline</span>.
        </p>
        <p className="text-md mb-6">We’ll be back online in <span className="font-bold">2 days</span>.</p>
        <div className="text-sm text-gray-400">Thank you for your patience! 🙏</div>
      </div>
    </div></div>
  )
}

export default ServerDown