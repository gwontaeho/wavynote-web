import { IconBtn } from "@/components/IconBtn";

interface HeaderProps {
    title: string;
    buttonText: string;
  }

export const Header = ({ title, buttonText } : HeaderProps ) => {
    return <header className="flex justify-between items-center h-[60px] px-[20px]">
        <div className="titleWrap">
            <h2>{title}</h2>
        </div>
        <div className="headerBtnWrap">
            <button className="textBtn default">{buttonText}</button>
            <IconBtn name="" type="search"></IconBtn>
        </div>
    </header>;
};
