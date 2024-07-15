"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();

    const list = [
        {
            name: "나의노트",
            href: "/folder",
            icon: null,
            matches: [],
            // matches: ["/folder", "/write"],
        },
        {
            name: "받은노트",
            href: "/box",
            icon: null,
            matches: [],
        },
        {
            name: "오픈노트",
            href: "/opennote",
            icon: null,
            matches: [],
            // matches: ["/search"],
        },
        {
            name: "마이페이지",
            href: "/mypage",
            icon: null,
            matches: [],
        },
    ];

    return (
        <nav className="sticky left-0 bottom-0 bg-white rounded-t-[15px] h-[90px] w-full grid grid-cols-4 place-content-center place-items-center">
            {list.map(({ name, href, matches }) => {
                return (
                    <Link
                        key={href}
                        href={href}
                        aria-current={[...matches, href].some((value) => pathname.startsWith(value)) ? "page" : "false"}
                        className="aria-[current=page]:font-bold"
                    >
                        <div>{name}</div>
                    </Link>
                );
            })}
        </nav>
    );
};
