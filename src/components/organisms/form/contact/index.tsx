"use client";

import { PrimaryButton } from "@/components/atoms";
import {
    fields,
    MessageValues,
    schema,
} from "@/components/organisms/form/contact/model";
import {
    CARD_SHAPE_ID,
    CARD_SHAPE_PATH,
} from "@/components/organisms/form/contact/style";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SECURE } from "@/lib/constants";
import { database } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSendEmail } from "@/services";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader, Mail, SendHorizonal } from "lucide-react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger);

export const ContactForm = () => {
    const [open, setOpen] = useState(false);
    const [isFloating, setIsFloating] = useState(false);
    const slotRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const captchaRef = useRef<TurnstileInstance>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    /* turnstile tokens are single-use, so fetch a fresh one after every attempt */
    const resetCaptcha = () => {
        setCaptchaToken(null);
        captchaRef.current?.reset();
    };

    useGSAP(() => {
        const slot = slotRef.current;
        const button = buttonRef.current;
        const label = labelRef.current;
        const icon = iconRef.current;
        if (!slot || !button || !label || !icon) return;

        let animation: gsap.core.Animation | undefined;

        const fadeLabel = (opacity: number, onComplete?: () => void) => {
            const distance = Math.abs(
                Number(gsap.getProperty(label, "opacity")) - opacity
            );
            return gsap.to(label, {
                opacity,
                duration: 0.2 * distance,
                ease: "power1.out",
                onComplete,
            });
        };

        const morph = (floating: boolean, onComplete?: () => void) => {
            const state = Flip.getState([button, icon]);

            slot.style.width = floating ? `${button.offsetWidth}px` : "";
            slot.style.height = floating ? `${button.offsetHeight}px` : "";
            button.toggleAttribute("data-floating", floating);

            button.style.transition = "none";
            return Flip.from(state, {
                duration: 0.7,
                ease: "expo.inOut",
                nested: true,
                onComplete: () => {
                    button.style.transition = "";
                    onComplete?.();
                },
            });
        };

        const setFloating = (floating: boolean) => {
            setIsFloating(floating);
            animation?.kill();
            animation = floating
                ? fadeLabel(0, () => (animation = morph(true)))
                : morph(false, () => (animation = fadeLabel(1)));
        };

        ScrollTrigger.create({
            trigger: slot,
            start: "bottom top",
            onEnter: () => setFloating(true),
            onLeaveBack: () => setFloating(false),
        });

        return () => {
            animation?.kill();
            button.removeAttribute("data-floating");
            button.style.transition = "";
            slot.style.width = "";
            slot.style.height = "";
            gsap.set(label, { clearProps: "opacity" });
        };
    });

    const { mutate, isPending } = useSendEmail({
        onSuccess: () => {
            resetCaptcha();
            toast.success(
                "Thanks for reaching out! I'll get back to you soon."
            );
            form.reset();
            setOpen(false);
        },
        onError: (error) => {
            resetCaptcha();
            /* rate limited: keep the draft so the visitor can retry later */
            if (error.response?.status === 429) {
                toast.error(
                    `You've sent a few messages already. Please try again later or email me at ${database.email}.`
                );
                return;
            }
            toast.error(
                `Oops! Something went wrong. Please try again or email me at ${database.email}.`
            );
            form.reset();
            setOpen(false);
        },
    });

    const form = useForm<MessageValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    const onSubmit = (values: MessageValues) => {
        if (!captchaToken) return;
        mutate({
            captchaToken,
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <span ref={slotRef} className="inline-flex">
                <Tooltip disabled={!isFloating}>
                    <TooltipTrigger
                        render={
                            <DialogTrigger
                                render={
                                    <PrimaryButton
                                        ref={buttonRef}
                                        className="group min-w-40 data-floating:fixed data-floating:right-4 data-floating:bottom-4 data-floating:z-40 data-floating:min-w-0 data-floating:p-3.5 data-floating:shadow-lg"
                                    >
                                        <span
                                            ref={labelRef}
                                            className="group-data-floating:sr-only"
                                        >
                                            Let&apos;s Talk!
                                        </span>
                                        <Mail
                                            ref={iconRef}
                                            className="group-hover:animate-wiggle-more size-4 group-data-floating:size-6"
                                        />
                                    </PrimaryButton>
                                }
                            />
                        }
                    />
                    <TooltipContent side="left">
                        <p className="text-sm">Let&apos;s talk!</p>
                    </TooltipContent>
                </Tooltip>
            </span>
            <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto bg-transparent p-0 ring-0 drop-shadow-2xl *:data-[slot=dialog-close]:top-10 *:data-[slot=dialog-close]:right-10 sm:max-w-xl">
                <svg aria-hidden className="absolute size-0">
                    <defs>
                        <clipPath
                            id={CARD_SHAPE_ID}
                            clipPathUnits="objectBoundingBox"
                        >
                            <path d={CARD_SHAPE_PATH} />
                        </clipPath>
                    </defs>
                </svg>
                <Card
                    className="relative gap-8 rounded-none py-14 ring-0"
                    style={{ clipPath: `url(#${CARD_SHAPE_ID})` }}
                >
                    <CardHeader className="relative px-8 pt-10 sm:px-16">
                        <DialogTitle
                            render={
                                <CardTitle className="font-fuzzy! text-4xl! font-bold! tracking-tight!" />
                            }
                        >
                            Let&apos;s Talk!
                        </DialogTitle>
                        <DialogDescription
                            render={<CardDescription className="text-xs" />}
                        >
                            Please fill this form, and I&apos;ll get back to you
                            through email!
                        </DialogDescription>
                    </CardHeader>

                    <form
                        id="contact-form"
                        onSubmit={form.handleSubmit(onSubmit)}
                        noValidate
                    >
                        <CardContent className="px-8 sm:px-16">
                            <FieldGroup className="gap-6">
                                {fields.map(
                                    ({
                                        name,
                                        label,
                                        type,
                                        multiline,
                                        required,
                                    }) => (
                                        <Controller
                                            key={name}
                                            name={name}
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field
                                                    data-invalid={
                                                        fieldState.invalid
                                                    }
                                                    className="gap-1"
                                                >
                                                    <FieldLabel
                                                        htmlFor={`contact-${name}`}
                                                        className="text-muted-foreground font-normal"
                                                    >
                                                        {label}
                                                        {required && (
                                                            <span className="text-destructive">
                                                                *
                                                            </span>
                                                        )}
                                                    </FieldLabel>
                                                    {multiline ? (
                                                        <Textarea
                                                            {...field}
                                                            id={`contact-${name}`}
                                                            aria-invalid={
                                                                fieldState.invalid
                                                            }
                                                            required
                                                            disabled={isPending}
                                                            className={cn(
                                                                "focus-visible:ring-ring h-32 resize-none overflow-y-auto rounded-none border-0 border-b px-0 py-2 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent dark:aria-invalid:ring-0"
                                                            )}
                                                        />
                                                    ) : (
                                                        <Input
                                                            {...field}
                                                            id={`contact-${name}`}
                                                            type={
                                                                type ?? "text"
                                                            }
                                                            aria-invalid={
                                                                fieldState.invalid
                                                            }
                                                            required
                                                            disabled={isPending}
                                                            className={cn(
                                                                "focus-visible:ring-ring h-auto rounded-none border-0 border-b px-0 py-2 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent dark:aria-invalid:ring-0"
                                                            )}
                                                        />
                                                    )}
                                                    {fieldState.invalid && (
                                                        <FieldError
                                                            errors={[
                                                                fieldState.error,
                                                            ]}
                                                        />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                    )
                                )}
                            </FieldGroup>
                            <Turnstile
                                ref={captchaRef}
                                siteKey={SECURE.TURNSTILE.SITE_KEY!}
                                onSuccess={setCaptchaToken}
                                onExpire={() => setCaptchaToken(null)}
                                onError={() => setCaptchaToken(null)}
                                options={{ theme: "auto", size: "flexible" }}
                                className="mt-6"
                            />
                        </CardContent>
                    </form>

                    <CardFooter className="border-t-0 bg-transparent px-8 pb-16 sm:px-16">
                        <PrimaryButton
                            type="submit"
                            form="contact-form"
                            disabled={isPending || !captchaToken}
                            className="group"
                        >
                            {isPending ? "Sending..." : "Send Message"}
                            {isPending ? (
                                <Loader className="animate-spin" />
                            ) : (
                                <SendHorizonal className="group-hover:animate-wiggle-more" />
                            )}
                        </PrimaryButton>
                    </CardFooter>
                </Card>
            </DialogContent>
        </Dialog>
    );
};
