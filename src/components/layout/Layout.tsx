import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/Sidebar"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Body with Sidebar */}
      <div className="flex flex-1">
        <SidebarProvider>
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Content */}
          <main className="flex-1 p-4">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
