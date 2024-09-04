"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";
import { getOpennotes, createFolder, createNote } from "@/apis";

export default function Opennotes() {
    useEffect(() => {
        // cn();
    }, []);

    const handleClickCreateFolder = async () => {
        const { data } = await createFolder({
            folder_name: "test1234",
            user_id: "wavynoteadmin@gmail.com",
        });
        console.log(data);
    };

    const handleClickCreateNote = async () => {
        const { data } = await createNote({
            content: "test 6666",
            folder_id: "d4d21058-9df0-4f2e-81f5-da45a920e03a",
            from_id: "wavynoteadmin@gmail.com",
            keywords: ["b0d88d67-01fd-47f8-b426-6ca0657d0f6e"],
            title: "my first note",
        });
        console.log(data);
    };

    return (
        <main className="">
            <Button onClick={handleClickCreateFolder}>폴더 생성</Button>
            <Button onClick={handleClickCreateNote}>노트 생성</Button>
        </main>
    );
}
