"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { FaArrowRight, FaTelegramPlane } from "react-icons/fa";
import { Button } from "../ui/button";
import { VideoDialog } from "./hero/video-dialog";

export function HeroSection() {
    return (
        <div className="relative size-full min-h-[500pt] items-center flex flex-col gap-y-10 justify-center overflow-hidden rounded-lg bg-background p-10 py-20">
            <div className="w-full lg:w-1/3 flex flex-col gap-10 mx-auto">
                <div className="mb-0 mx-auto">
                    <div className="w-auto px-2 py-1 rounded-full bg-sky-400 font-bold text-[7.5pt] text-black flex items-center justify-center gap-3 group">
                        <div className="py-1 px-2 bg-sky-200 rounded-full flex items-center gap-1">
                            <FaTelegramPlane className="text-sky-900 text-lg" />
                            Introducing
                        </div>
                        Web 3 wallet support
                        <div>
                            <FaArrowRight className="group-hover:animate-pulse" />
                        </div>
                    </div>
                </div>
                <p className="z-10 whitespace-pre-wrap text-center text-5xl lg:text-8xl font-semibold tracking-tighter text-white flex flex-col gap-4">
                    Your Journey
                    Begins Here
                </p>
                <div className="w-full lg:w-1/2 mx-auto">
                    <p className="text-xl lg:text-3xl text-slate-300 text-center">
                        Fast easy booking for your next bus ride
                    </p>
                </div>

                <div className="w-full flex items-center justify-center">
                    <a href="/register">
                        <Button className="text-xs font-bold bg-sky-300 hover:bg-sky-400">
                            <FaTelegramPlane />
                            Get started for free
                        </Button>
                    </a>
                </div>
            </div>
            <div className="lg:w-[60%] mt-10">
                <VideoDialog />
            </div>
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
        </div>
    );
}
