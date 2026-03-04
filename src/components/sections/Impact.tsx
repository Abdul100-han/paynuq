"use client";

import React from "react";
import { motion, useSpring, useTransform, animate, useInView } from "framer-motion";
import { Users, Store, Repeat, Landmark } from "lucide-react";
import Section from "../Section";

const stats = [
    {
        icon: Users,
        label: "Active Members",
        value: 100,
        suffix: "+",
        color: "bg-blue-500"
    },
    {
        icon: Store,
        label: "Local Business Acceptance",
        value: 8,
        suffix: "+",
        color: "bg-indigo-500"
    },
    {
        icon: Repeat,
        label: "Community Transactions",
        value: 3000000,
        prefix: "₦",
        suffix: "+",
        color: "bg-sky-500"
    },
    {
        icon: Landmark,
        label: "USDC-backed Treasury",
        value: 1,
        suffix: "00%",
        color: "bg-brand-blue"
    }
];

const Counter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                onUpdate: (latest) => setCount(Math.floor(latest)),
            });
            return () => controls.stop();
        }
    }, [value, isInView]);

    return (
        <span ref={ref} className="text-3xl md:text-4xl font-bold tabular-nums">
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

const Impact = () => {
    return (
        <Section id="impact" title="Impact" dark>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-all"
                    >
                        <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-blue/10`}>
                            <stat.icon className="w-7 h-7" />
                        </div>
                        <div className="text-brand-blue mb-2">
                            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <div className="text-gray-500 font-medium">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Impact;
