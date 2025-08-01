import {
   
    FaCalendarCheck,
    
    FaCreditCard,
    
    FaSignOutAlt,
 
} from "react-icons/fa";

export type DrawerData = {
    id: string;
    name: string;
    icon: React.ComponentType<{ size?: number }>;
    link: string;
    badge?: string;
    description?: string;
}

export const userDrawerData: DrawerData[] = [
  
    
    
    {
        id: "bookings",
        name: "Bookings",
        icon: FaCalendarCheck,
        link: "bookings",
        badge: "12",
        description: "Reservation Management"
    },
   
    {
        id: "payments",
        name: "Payments",
        icon: FaCreditCard,
        link: "payments",
        description: "Financial Transactions"
    },
    // {
    //     id: "analytics",
    //     name: "Analytics",
    //     icon: FaChartLine,
    //     link: "analytics",
    //     badge: "New",
    //     description: "Reports & Insights"
    // },
    // {
    //     id: "user_settings",
    //     name: "Settings",
    //     icon: FaCog,
    //     link: "user_settings",
    //     description: "User Preferences"
    // },
    {
        id: "logout",
        name: "Logout",
        icon: FaSignOutAlt,
        link: "logout",
        description: "Sign Out"
    }

]