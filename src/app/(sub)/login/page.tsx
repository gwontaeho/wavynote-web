"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { signin } from "@/apis";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);

        try {
            const response = await signin(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="p-[30px]">
            <div className="h-[300px]"></div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("id", { required: true })} aria-invalid={errors.id ? "true" : "false"} />
                <Input
                    {...register("password", { required: true })}
                    aria-invalid={errors.password ? "true" : "false"}
                />
                <Button>로그인</Button>
            </form>
        </main>
    );
}
