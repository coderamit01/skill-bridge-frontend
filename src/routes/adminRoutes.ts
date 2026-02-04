import { Route } from "@/type/route-types";
import { title } from "process";


export const adminRoutes: Route[] = [
  {
    title: 'Dashboard',
    url: '/admin'
  },
  {
    title: 'Users',
    url: '/admin/users'
  },
  {
    title: 'Bookings',
    url: '/admin/bookings'
  },
  {
    title: 'Categories',
    url: '/admin/categories'
  },
]