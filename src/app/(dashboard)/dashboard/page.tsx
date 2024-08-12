import { Dashboard } from "@/components/dashboard/Dashboard";
import { Header } from "@/components/header/Header";
import SideMenu from "@/components/sideMenu/SideMenu";

export default function DashboardPage(){
    return (
        <>
            <Header />
            <SideMenu />
            <Dashboard />
        </>
    )
}