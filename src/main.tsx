import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { ThemeProvider } from './providers/theme.provider.tsx'
import {Provider as ReduxProvider} from "react-redux"
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ReduxProvider store={store}>

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}>
        
    </RouterProvider>
      <Toaster richColors position='top-right'/>
      </ThemeProvider>
   </ReduxProvider>
  </React.StrictMode>,
)
