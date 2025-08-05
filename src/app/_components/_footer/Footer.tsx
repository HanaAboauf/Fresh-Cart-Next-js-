export default function Footer() {
    return (
      <div className='bg-gray-100 py-8'>
        <div className='container mx-auto px-4'>
          <h3 className='text-2xl mb-2 text-gray-400'>Get the FreshCart app</h3>
          <p className='text-gray-500 mb-4'>We will send you a link, open it on your phone to download the app.</p>
          
          <form className="flex items-center space-x-2">
            <input
              type="email"
              name="email"
              placeholder="Email ..."
              className="flex-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg text-sm px-4 py-2 shadow-sm"
            >
              Share App Link
            </button>
          </form>
        </div>
      </div>
    )
  }