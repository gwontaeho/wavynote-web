// 노트목록
import { Header } from "./../../_components/Header";

export default function Notes() {
    return <main className="">
        <Header title="나의 노트" buttonText="" icBtnType="prev"></Header>
        <button>새로운 노트 쓰기</button>
        <ul>
            <li>
                <h4>제목이 표시됩니다 최대 1줄까지 제목이 표시됩니다. 제목이 표시됩니다 최대 1줄까지 제목이 표시됩니다.</h4>
                <p></p>
            </li>
        </ul>
    </main>;
}
