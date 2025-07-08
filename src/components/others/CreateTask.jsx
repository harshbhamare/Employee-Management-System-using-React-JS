import React from 'react'

const CreateTask = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-10 bg-black-100">
            <form
                action=""
                className="w-full flex flex-col md:flex-row gap-6 bg-black shadow-xl rounded-xl p-8"
            >

                <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Task Title</h3>
                            <input
                                type="text"
                                placeholder="Make a UI Design"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Date</h3>
                            <input
                                type="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Assign To</h3>
                            <input
                                type="text"
                                placeholder="Employee Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Category</h3>
                            <input
                                type="text"
                                placeholder="design, dev, etc."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all"
                        >
                            Create Task
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <div className="bg-black h-full rounded-xl p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                        <textarea
                            placeholder="Write task details here..."
                            className="w-full h-[300px] px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default CreateTask