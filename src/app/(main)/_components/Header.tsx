import { IconBtn } from "@/components/IconBtn";

interface HeaderProps {
    title: string;
    buttonText: string;
    icBtnType: "prev" | "search" | "searchBlack" | "etc" | undefined | null;
}

export const Header = ({ title, buttonText, icBtnType } : HeaderProps ) => {

    return <header className="flex justify-between items-center h-[60px] px-[20px]">
        <div className="titleWrap">
            {icBtnType && <IconBtn name="" type={icBtnType}></IconBtn>}
            <h2>{title}</h2>
        </div>
        <div className="headerBtnWrap">
            <button className="textBtn default">{buttonText}</button>
            <IconBtn name="" type="search"></IconBtn>
        </div>
    </header>;
};
