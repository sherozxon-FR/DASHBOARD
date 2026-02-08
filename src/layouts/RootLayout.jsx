
import { NavLink, Outlet } from 'react-router-dom'
import styles from './RootLayout.module.css'
import { useState } from 'react'

import {
    MdDashboard,
    MdInfo,
    MdCode,
    MdSchool,
    MdPerson,
    MdKeyboardArrowRight,
    MdChevronLeft
} from 'react-icons/md'




import { FaUsers, FaProjectDiagram } from 'react-icons/fa'
import { IoMdFlash } from 'react-icons/io'

function RootLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className={styles.dashboard}>
            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.logo}>
                        <IoMdFlash className={styles.logoIcon} />
                        {sidebarOpen && <span className={styles.logoText}>Full Stack</span>}
                    </div>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className={styles.toggleBtn}>
                        {sidebarOpen ? <MdKeyboardArrowRight /> : <MdChevronLeft />}
                    </button>
                </div>
                {/* navigation */}
                <nav className={styles.nav}>
                    <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                        <MdDashboard className={styles.navIcon} />
                        {sidebarOpen && <span>Dashboard</span>}
                    </NavLink>

                    <NavLink to="/azolar" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                        <FaUsers className={styles.navIcon} />
                        {sidebarOpen && <span>A'zolar</span>}
                    </NavLink>

                    <NavLink to="/loyhalar" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                        <FaProjectDiagram className={styles.navIcon} />
                        {sidebarOpen && <span>Loyihalar</span>}
                    </NavLink>

                    <NavLink to="/texnalogiyalar" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                        <MdCode className={styles.navIcon} />
                        {sidebarOpen && <span>Texnologiyalar</span>}
                    </NavLink>

                    <div className={styles.navDivider}></div>

                    <NavLink to="/haqida" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                        <MdInfo className={styles.navIcon} />
                        {sidebarOpen && <span>Haqida</span>}
                    </NavLink>

                    <NavLink to="kurslar" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                        <MdSchool className={styles.navIcon} />
                        {sidebarOpen && <span>kurslar</span>}
                    </NavLink>
                </nav>

                <div className={styles.sidebarFooter}>
                    <div className={styles.profile}>
                        <div className={styles.avatar}>
                            <MdPerson />
                        </div>
                        {sidebarOpen && (
                            <div className={styles.profileInfo}>
                                <p className={styles.profileName}>User Name</p>
                                <p className={styles.profileRole}>Admin</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className={styles.mainContent}>
                <header className={styles.header}>
                    <h2>Dashboard</h2>
                    <div className={styles.headerRight}>
                        <button className={styles.headerBtn}>
                            <MdPerson />
                        </button>
                    </div>
                </header>
                {/* bu yerda barcha page lar yasaladi  */}
                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default RootLayout