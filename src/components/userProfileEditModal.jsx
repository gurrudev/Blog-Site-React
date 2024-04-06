import React, { useState } from 'react'

const userProfileEditModal = ({ closeModal }) => {

    return (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-64">
                <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold">Options</h4>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none float-right">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="text-left">
                    <Link to={''} className="block py-2 text-gray-700 hover:bg-gray-200">Logout</Link>
                    <Link to={''} className="block py-2 text-gray-700 hover:bg-gray-200">Change Password</Link>
                </div>
            </div>
        </div>
    );
}

export default userProfileEditModal
