import Link from 'next/link';
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const data = [
    {id:1, name: "Home", url:"/"},
    {id:2, name:"About", url:"/about"},
    {id:3, name:"Categories", subMenu: true},
    {id:4, name:"Contact", url:"/contact"},
];

const subMenuData = [
    {id:1, name:"Jordon", doc_count: 11},
    {id:2, name:"Sneakers", doc_count: 9},
    {id:3, name:"Running shoes", doc_count:64},
    {id:4, name:"Shoes", doc_count:120},
];

type itemType = {
    id: number;
    name: string;
    url: string;
    subMenu?: undefined;
} | {
    id: number;
    name: string;
    subMenu: boolean;
    url?: any;
}

const Menu = ({showCategoryMenu,setShowCategoryMenu}:any) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
        {data.map((item:itemType) => {
           
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li className='cursor-pointer flex items-center gap-2 relative'
                         onMouseEnter={() => setShowCategoryMenu(true)}
                         onMouseLeave={() => setShowCategoryMenu(false)}>
                            {item.name}
                            <BsChevronDown size={14}/>
                            {showCategoryMenu && (
                                <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>
                                    {subMenuData.map((subMenu) => {
                                        return (
                                            <Link key={subMenu.id} href={"/"} onClick={() => setShowCategoryMenu(false)}>
                                                <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
                                                    {subMenu.name}
                                                    <span className='opacity-50 text-sm'>{subMenu.doc_count}</span>
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="cursor-pointer">
                            <Link href={item?.url}>{item.name}</Link>
                        </li>
                    )}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default Menu                                                                                                 