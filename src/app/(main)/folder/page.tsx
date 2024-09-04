"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "./../_components/Header";
import { getFolders } from "@/apis";

interface Folder {
    folder_id: string;
    folder_name: string;
    note_count: number;
}

const useFolders = () => {
    const [data, setData] = useState<Folder[]>([]);

    useEffect(() => {
        get();
    }, []);

    const get = async () => {
        try {
            const response = await getFolders();
            console.log(response);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return { data };
};

export default function Folder() {
    const folders: Folder[] = [
        { folder_id: "0", folder_name: "보낸 노트", note_count: 10 },
        { folder_id: "1", folder_name: "좋아요", note_count: 5 },
        { folder_id: "2", folder_name: "이번달 노트", note_count: 7 },
    ];

    const { data } = useFolders();

    console.log(data);

    return (
        <main className="">
            <Header title="폴더" buttonText="" icBtnType={undefined}></Header>
            <section className="content-wrap bgScroll">
                <ul className="folderWrap">
                    <li className="folderMin add-folder">
                        <button name="폴더추가" className="FolderBtn dark">
                            <h3>폴더추가</h3>
                        </button>
                    </li>
                    {data.map(({ folder_id, folder_name, note_count }) => (
                        <li key={folder_id} className="folderMin">
                            <Link href={`/folder/${folder_id}`} className="FolderBtn light">
                                <h3>{folder_name}</h3>
                                <p>노트 {note_count}개</p>
                            </Link>
                        </li>
                    ))}
                    <li className="folderMin sent-notes">
                        <button name="보낸 노트" className="FolderBtn light">
                            <h3>{folders[0].folder_name}</h3>
                            <p>노트 {folders[0].note_count}개</p>
                        </button>
                    </li>
                </ul>
            </section>
        </main>
    );
}
