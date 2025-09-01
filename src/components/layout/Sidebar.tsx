import { Calendar, Home, Search, Settings  } from "lucide-react"
import { FiMail } from 'react-icons/fi'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "หน้าแรก",
    url: "/",
    icon: Home,
  },
  {
    title: "ติดต่อ",
    url: "/contact",
    icon: FiMail,
  },
  {
    title: "Admin",
    url: "/admin/employees",
    icon: Settings,
  },
  {
    title: "เปลี่ยนรหัสผ่าน",
    url: "/profile/change-password",
    icon: Settings,
  },

]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Catalog Product</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
