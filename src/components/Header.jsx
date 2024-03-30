import React from 'react';
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io"
import { CiDiscount1 } from "react-icons/ci";
import { LuBadgeHelp } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdGpsFixed } from "react-icons/md";
const Header = () => {
    const [toggle, setToggle] = useState(false)

    const showSideMenu = () => {
        setToggle(true)
    }

    const hideSideMenu = () => {
        setToggle(false)
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <LuBadgeHelp />,
            name: "Help"
        },
        {
            icon: <MdOutlineAccountCircle />,
            name: "Sign In"
        },
        {
            icon: <AiOutlineShoppingCart />,
            name: "Cart"
        },
    ]
    return (
        <>
            <div className=" black-overlay w-full h-full fixed duration-500"
                onClick={hideSideMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? 'visible' : 'hidden',
                    zIndex: 9999999
                }}>

                <div onClick={(e) => {
                    e.stopPropagation()
                }}
                    className='w-[500px] absolute duration-[400ms] bg-white h-full'
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}>
                    <div className='flex flex-col '>
                        <div className='p-15'>
                            <input className='border outline-none' type="search" placeholder="Search for area,street name..." id="" />
                        </div>
                        <div className='border '>
                            <span className=''>
                                <MdGpsFixed className='inline mr-1 text-gray-600' />
                                Get current location</span>
                            <p className='text-slate-300'>Using GPS</p>
                        </div>
                    </div>

                </div>

            </div>
            <header className='p-[12px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
                <div className="flex items-center max-w-full mx-auto"> {/* Removed max-width class */}
                    <div className='w-[100px]'>
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" className='w-full' alt="" />
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-black '>Other</span>
                        <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019]' />
                    </div>
                    <nav className='font-semibold text-[18px]  hidden md:flex list-none gap-10 ml-auto '>
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className='cursor-pointer hover:text-[#fc8019] flex items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                        <sup className='text-[#fc8019]'>{link.sup}</sup>
                                    </li>
                                }
                            )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header


/*
import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io"
import { CiDiscount1 } from "react-icons/ci";
import { LuBadgeHelp } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const showSideMenu = () => {
        setToggle(true)
    }

    const hideSideMenu = () => {
        setToggle(false)
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <LuBadgeHelp />,
            name: "Help"
        },
        {
            icon: <MdOutlineAccountCircle />,
            name: "Sign In"
        },
        {
            icon: <AiOutlineShoppingCart />,
            name: "Cart"
        },
    ]
    return (
        <>
            <div className=" black-overlay w-full h-full fixed duration-500"
                onClick={hideSideMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? 'visible' : 'hidden',
                    zIndex: 9999999
                }}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }}
                    className='w-[500px] absolute duration-[400ms] bg-white h-full'
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}>

                </div>

            </div>
            <header className='p-[12px] shadow-xl text-[#686b78] sticky m-[-32px] top-0 bg-white z-[9999]'>
                <div className="flex items-center max-w-[1200px]  mx-auto">
                    <div className='w-[100px]'>
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" className='w-full' alt="" />
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-black'>Other</span>
                        <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019]' />
                    </div>
                    <nav className='font-semibold text-[18px]  hidden md:flex list-none gap-10 ml-auto '>
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className='cursor-pointer hover:text-[#fc8019] flex items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                        <sup className='text-[#fc8019]'>{link.sup}</sup>
                                    </li>
                                }
                            )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
*/

