import Image from "next/image";

/**
 * 404
 * @returns
 */
export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-[24px]">
      <Image
        src="/images/not-found.svg"
        alt="not-found"
        width="113"
        height="88"
        priority
      />
      <h2 className="text-[18px]">잘못된 경로입니다.</h2>
    </div>
  );
}
