import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import SideBar from "../components/SideBar";
import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";



const EmployerLayout = () => {
    const employerLinks=[
        {
            name:"Dashboard",
            path:"/employer",
            icon:<AiOutlineDashboard/> 
        },
            {
            name:"Create-Job",
            path:"/employer/create-job",
            icon:<FaUserPlus/> 
        },
            {
            name:"Applicants",
            path:"/employer/applicants",
            icon:<VscGitStashApply /> 
        },
            {
            name:"Settings",
            path:"/employer/settings",
            icon:<IoSettingsSharp/> 
        },

    ]
    return (
        <div>
            <div className="d-flex flex-grow-1 m-3">
                <div
                 className="card border-0 shadow-sm p-3" 
                 style={{
                    backgroundColor:"#5C7057",
                    width:"300px",
                    minHeight:"90vh",

                 }}
                 
                 
                 >
                    <SideBar links={employerLinks} title="Employer Dashboard" />
                </div>
                <div 
                className="card border-0 shadow-sm p-3"
                style={{
                    backgroundColor:"#89A482",
                
                }}
                
                >
                    <DashboardNavBar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default EmployerLayout;