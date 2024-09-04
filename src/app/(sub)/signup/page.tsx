"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { signup, duplicate } from "@/apis";

export default function Signup() {
    const { register, handleSubmit, getValues } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);

        try {
            const response = await signup(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClickDuplicate = async () => {
        try {
            const response = await duplicate(getValues("id"));
            console.log(response);
        } catch (error) {}
    };

    return (
        <main className="flex flex-col gap-4 p-8">
            <span>signup</span>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("nickname")} placeholder="nickname" />
                <Input {...register("id")} placeholder="id" />
                <Input {...register("password")} placeholder="password" />
                <Button>signup</Button>
            </form>
            <Button type="button" onClick={handleClickDuplicate}>
                duplicate
            </Button>
        </main>
    );
}
