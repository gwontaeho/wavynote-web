"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// 노트목록
import { Header } from "./../../_components/Header";
import { getNotes } from "@/apis";

const useNotes = (fid: any) => {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        get();
    }, []);

    const get = async () => {
        try {
            const response = await getNotes({ uid: "test", fid });
            console.log(response);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return { data };
};

export default function Notes() {
    const { folder } = useParams();

    const { data } = useNotes(folder);

    console.log(folder);

    return (
        <main className="">
            <Header title="나의 노트" buttonText="" icBtnType="prev"></Header>
            <button>새로운 노트 쓰기</button>
            <ul>
                <li>
                    <h4>
                        제목이 표시됩니다 최대 1줄까지 제목이 표시됩니다. 제목이 표시됩니다 최대 1줄까지 제목이
                        표시됩니다.
                    </h4>
                    <p></p>
                </li>
            </ul>
        </main>
    );
}
