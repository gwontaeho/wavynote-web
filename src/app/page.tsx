import Link from "next/link";

/**
 * default
 * @returns
 */

export default function Home() {
    return (
        <main className="flex flex-col items-center pt-10 [&_*]:p-2">
            <Link href="/signup">go sign up</Link>
            <Link href="/login">go login</Link>
            <Link href="/intro">go intro</Link>
        </main>
    );
}
