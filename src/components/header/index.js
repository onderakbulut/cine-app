'use client';
import Image from "next/image";
import { Link } from 'next-view-transitions'
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation';

export function Header() {
    const [keyword, setKeyword] = useState('');
    
    const router = useRouter();

    function searchFunc(e) {
        if (e.type === 'keydown' && e.key !== 'Enter') return;
        
        if (keyword.length < 3 ) return;
        router.push(`/search/${keyword}`);
    }
    
    return (
        <header className="bg-primary py-2 lg:py-0">
            <div className="container">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex-1 basis-1/4 xl:flex-1">
                        <Link href="/" className="inline-block">
                            <Image src="/logo.svg" alt="Logo" height="90" width="120" />
                        </Link>
                    </div>
                    
                    <div className="basis-1/2 lg:flex-none">
                        <div className="bg-white bg-opacity-30 rounded-3xl overflow-hidden flex gap-x-4 justify-between px-5 lg:w-[398px]">
                            <input value={keyword}  onChange={(e) => {setKeyword(e.target.value)}} onKeyDown={searchFunc} type="text" placeholder="Search movie..." className="bg-transparent py-[14px] w-full shadow-none outline-none text-white" />
                            <button onClick={searchFunc} ><Image src="/search-icon.svg" width="20" height="20" alt="search"></Image></button>
                        </div>
                    </div>

                    <div className="flex-1 basis-1/4 xl:flex-1">
                        <div className="userActions flex items-center justify-center lg:justify-end xl:gap-x-8">
                            <a href="#" className="p-2">
                                <Image src="/plus-icon.svg" width="20" height="20" alt="plus"></Image>
                            </a>
                            <a href="#" className="p-2">
                                <Image src="/bell-icon.svg" width="20" height="20" alt="bell"></Image>
                            </a>
                            <a href="#" className="hidden lg:flex items-center pl-2 gap-x-2">
                                <Image src="/profile.svg" width="52" height="52" className="lg:mr-6" alt="Profile"></Image>
                                <p className="text-lg text-white text-lg xl:mr-10 hidden lg:block">
                                    Thomas Jackson
                                </p>
                                <Image src="/chevron-down.svg" width="18" height="10" alt="icon"></Image>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}