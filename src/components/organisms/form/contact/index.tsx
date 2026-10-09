"use client";

import { PrimaryButton } from "@/components/atoms";
import { fields, MessageValues, schema } from "@/components/organisms/form/contact/model";
import { CARD_SHAPE_ID, CARD_SHAPE_PATH } from "@/components/organisms/form/contact/style";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { database } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSendEmail } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, SendHorizonal } from "lucide-react";
import { ReactNode, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export const ContactForm = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);

    const { mutate, isPending } = useSendEmail({
        onSuccess: () => {
            toast.success("Thanks for reaching out! I'll get back to you soon.");
            form.reset();
            setOpen(false);
        },
        onError: () => {
            toast.error(`Oops! Something went wrong. Please try again or email me at ${database.email}.`);
            form.reset();
            setOpen(false);
        }
    })

    const form = useForm<MessageValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    const onSubmit = (values: MessageValues) => {
        mutate({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message
        })
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<PrimaryButton className="group" />}>
                {children}
            </DialogTrigger>
            <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto bg-transparent p-0 ring-0 drop-shadow-2xl sm:max-w-xl *:data-[slot=dialog-close]:top-10 *:data-[slot=dialog-close]:right-10">
                <svg aria-hidden className="absolute size-0">
                    <defs>
                        <clipPath id={CARD_SHAPE_ID} clipPathUnits="objectBoundingBox">
                            <path d={CARD_SHAPE_PATH} />
                        </clipPath>
                    </defs>
                </svg>
                <Card
                    className="relative gap-8 rounded-none py-14 ring-0"
                    style={{ clipPath: `url(#${CARD_SHAPE_ID})` }}
                >
                    <CardHeader className="relative px-8 pt-10 sm:px-16">
                        <DialogTitle render={<CardTitle className="text-4xl! font-bold! tracking-tight! font-fuzzy!" />}>
                            Let&apos;s Talk!
                        </DialogTitle>
                        <DialogDescription render={<CardDescription className="text-xs" />}>
                            Please fill this form, and I&apos;ll get back to you through email!
                        </DialogDescription>
                    </CardHeader>

                    <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
                        <CardContent className="px-8 sm:px-16">
                            <FieldGroup className="gap-6">
                                {fields.map(({ name, label, type, multiline, required }) => (
                                    <Controller
                                        key={name}
                                        name={name}
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid} className="gap-1">
                                                <FieldLabel htmlFor={`contact-${name}`} className="font-normal text-muted-foreground">
                                                    {label}{required && <span className="text-destructive">*</span>}
                                                </FieldLabel>
                                                {multiline ? (
                                                    <Textarea
                                                        {...field}
                                                        id={`contact-${name}`}
                                                        aria-invalid={fieldState.invalid}
                                                        required
                                                        disabled={isPending}
                                                        className={cn("h-32 overflow-y-auto rounded-none border-0 border-b px-0 py-2 focus-visible:ring-ring focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent dark:aria-invalid:ring-0 resize-none")}
                                                    />
                                                ) : (
                                                    <Input

                                                        {...field}
                                                        id={`contact-${name}`}
                                                        type={type ?? "text"}
                                                        aria-invalid={fieldState.invalid}
                                                        required
                                                        disabled={isPending}
                                                        className={cn("h-auto rounded-none border-0 border-b px-0 py-2 focus-visible:ring-ring focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent dark:aria-invalid:ring-0")}
                                                    />
                                                )}
                                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />
                                ))}
                            </FieldGroup>
                        </CardContent>
                    </form>

                    <CardFooter className="border-t-0 bg-transparent px-8 pb-16 sm:px-16">
                        <PrimaryButton
                            type="submit"
                            form="contact-form"
                            disabled={isPending}
                            className="group"
                        >
                            Send Message
                            {isPending ? <Loader className="animate-spin" /> : <SendHorizonal className="group-hover:animate-wiggle-more" />}
                        </PrimaryButton>
                    </CardFooter>
                </Card>
            </DialogContent>
        </Dialog>
    );
};
