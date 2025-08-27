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


      {/* Body with Sidebar */}
      <div className="flex flex-1 relative">
        <SidebarProvider>
          {/* Sidebar */}
          <div className="relative z-40">
            <AppSidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 p-4 overflow-auto">
             {/* Header */}
            <Header />
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
