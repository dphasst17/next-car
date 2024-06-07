"use client";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverTrigger, Tooltip } from "@nextui-org/react";
import { headerData } from "@constants";
import { FaCaretDown } from "react-icons/fa6";

const NavBar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1540px] mx-auto flex justify-start items-center sm:px-10 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain mx-1'
        />
      </Link>
      <nav className="w-4/5 xl:w-[60%] h-full hidden lg:flex flex-col justify-between px-4 mx-8">
            <div className="bottom-nav w-full h-2/4 flex justify-around ">
                {headerData.map((d) => <div className="nav-item flex justify-start content-center text-zinc-800 rounded-md p-2 cursor-pointer hover:bg-zinc-100 hover:text-orange-400 transition-all font-semibold">
                    {!d.isHover
                        ? <div className="flex items-center">{d.content}</div>
                        : <Tooltip classNames={{
                            base: "!w-[98vw] h-auto top-[2vh] !left-0 !mx-auto",
                            content: "translate-x-[3%] w-[50vw] h-full bg-zinc-300 rounded-md",
                        }} content={
                            <div className="flex w-full h-full">
                                <div className="subContent w-[75%] h-full flex flex-wrap justify-start content-start p-8">
                                    {d.subNav?.map((s) => <div className={`w-[45%] flex flex-col justify-start ${s.detail ? "h-4/5" : "h-auto"}`}>
                                        <span className="text-[16px] my-4 font-bold text-black cursor-pointer">
                                            {s.content}
                                        </span>
                                        {s.detail && s.detail.map((sd: any) => <span className="text-[10px] my-1 text-black cursor-pointer hover:text-orange-400">{sd.content}</span>)}
                                    </div>)}
                                </div>
                                <div className="images-subContent w-1/4 h-full">
                                    <img className="w-full h-full translate-x-18 object-contain" src="https://pvmachino.vn/wp-content/themes/wecangroup-child/dist/images/menu-img.png" alt="images-sub-content" />
                                </div>
                            </div>
                        }>
                            <div className="h-full flex items-center ">
                                {d.content}
                                <FaCaretDown className="mx-2" />
                            </div>
                        </Tooltip>
                    }
                </div>)}
            </div>
        </nav>
    </nav>
  </header>
);

export default NavBar;
