import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <form className="w-full  bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-between">
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Task Title
                </label>
                <input
                  type="text"
                  placeholder="Make a UI Design"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Assign To
                </label>
                <input
                  type="text"
                  placeholder="Employee Name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Design, Dev, etc"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 md:pl-4">
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                rows="10"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Task details..."
              ></textarea>
              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
