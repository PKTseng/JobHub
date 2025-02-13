import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainLayout from '@/layout/MainLayout'
import HomePage from '@/pages/HomePage'
import JobsPage from '@/pages/JobsPage'
import JobDetail, { jobLoader } from '@/pages/JobDetail'
import AddJobPage from '@/pages/AddJobPage'
import EditJobPage from '@/pages/EditJobPage'
import NotFoundPage from '@/pages/NotFoundPage'

const App = () => {
  const addJob = async (newJob) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })

    return
  }

  const deleteJobItem = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })

    return
  }

  const updateJobSubmit = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })

    return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobDetail deleteJobItem={deleteJobItem} />} loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJobSubmit} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
}

export default App
