/* eslint-disable @next/next/no-sync-scripts */
'use client'
import  "bootstrap/dist/css/bootstrap.min.css"

import React, { ReactNode, useEffect, useState, useCallback } from "react";
import BackToTop from "@/components/supportingComponents/BackToTop";
import Breadcrumb from "@/components/supportingComponents/Breadcrumb";
import PageHead from "@/components/supportingComponents/PageHead";
import Header from "@/components/nav/Header";
import { WOW } from 'wowjs';

interface LayoutProps {
    headerStyle: string;
    footerStyle?: string;
    headTitle: string;
    breadcrumbTitle?: string;
    children: ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({
    headerStyle,
    footerStyle = "", 
    headTitle,
    breadcrumbTitle,
    children,
}) => {
    const [scroll, setScroll] = useState<boolean>(false);
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const [isSearch, setSearch] = useState<boolean>(false);
    const [isOffcanvus, setOffcanvus] = useState<boolean>(false);

    const handleMobileMenu = useCallback(() => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
    }, [isMobileMenu]);

    const handleSearch = useCallback(() => {
        setSearch(!isSearch);
    }, [isSearch]);

    const handleOffcanvus = useCallback(() => {
        setOffcanvus(!isOffcanvus);
    }, [isOffcanvus]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const scrollCheck = window.scrollY > 100;
                if (scrollCheck !== scroll) {
                    setScroll(scrollCheck);
                }
            };

            const wow = new WOW({ live: false });
            wow.init();

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [scroll]);

    return (
        <>
            <PageHead headTitle={headTitle} />
            <Header
                scroll={scroll}
                handleMobileMenu={handleMobileMenu}
                isMobileMenu={isMobileMenu}
                handleSearch={handleSearch}
                isSearch={isSearch}
                handleOffcanvus={handleOffcanvus}
                isOffcanvus={isOffcanvus}
            />

            <main className="fix">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
                
            </main>

            {/* {footerStyle && <Footer1 />} */}
            <BackToTop />
        </>
    );
};

export default MainLayout;
