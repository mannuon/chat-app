'use client' 

import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'

const Logout = ({ open, setOpen }) => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/signin')
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <AlertDialogHeader className="mb-4">
          <AlertDialogTitle className="text-xl font-semibold text-gray-800">Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600">
            This action will log you out. You can log in again at any time.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-end space-x-4">
          <AlertDialogCancel className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Logout
