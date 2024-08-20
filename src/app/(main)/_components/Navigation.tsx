"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navigation = () => {
    const pathname = usePathname();

    const list = [
        {
            name: "나의노트",
            href: "/folder",
            icon: "ic_mynote",
            iconW : 20,
            iconH : 19,
            matches: [],
            // matches: ["/folder", "/write"],
        },
        {
            name: "받은노트",
            href: "/box",
            icon: "ic_box",
            iconW : 20,
            iconH : 16,
            matches: [],
        },
        {
            name: "오픈노트",
            href: "/opennote",
            icon: "ic_opennote",
            iconW : 14,
            iconH : 20,
            matches: [],
            // matches: ["/search"],
        },
        {
            name: "마이페이지",
            href: "/mypage",
            icon: "ic_mypage",
            iconW : 17,
            iconH : 18,
            matches: [],
        },
    ];

    return (
        <nav className="nav flex w-full justify-around items-center bg-white h-[90px] absolute bottom-0">
            {list.map(({ name, href, icon, iconW, iconH, matches }) => {
                return (
                    <Link
                        key={href}
                        href={href}
                        aria-current={[...matches, href].some((value) => pathname.startsWith(value)) ? "page" : "false"}
                        className="aria-[current=page]:active-menu text-[10px] flex flex-col gap-[10px] text-[#C6C6D0]"
                    >
                        <p className="flex justify-center">
                        <Image
                            src={`/images/icons/${icon}${[...matches, href].some((value) => pathname.startsWith(value)) ? '_on' : ''}.svg`}
                            alt={`${name} icon image`}
                            width={iconW}
                            height={iconH}
                            priority
                            className="menu-icon"
                        />
                        </p>
                        <div>{name}</div>
                    </Link>
                );
            })}
        </nav>
    );
};
