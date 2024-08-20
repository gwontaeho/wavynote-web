type ButtonType = "prev" | "search" | "searchBlack" | "etc";

interface ButtonProps {
  name: string;
  type: ButtonType;
}

function getTheme(type: ButtonType) {
  switch (type) {
    case "prev":
      return "prevBtn";
    case "search":
      return "searchBtn";
    case "searchBlack":
      return "searchBlackBtn";
    case "etc":
      return "etcBtn"
  }
}

export const IconBtn =({ name, type, ...rest }: ButtonProps) => {
  return (
    <button className={`icBtn ${getTheme(type)}`} {...rest}>
      {name}
    </button>
  );
}