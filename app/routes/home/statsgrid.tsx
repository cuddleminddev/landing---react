import React from "react";
import "./styles/count.css";

type StatItem = {
    value: string;
    label: string;
};

type StatsGridProps = {
    stats: StatItem[];
};

export default function StatsGrid({ stats }: StatsGridProps) {
    return (
        <div className="count-counts">
            {stats.map((stat, index) => (
                <div key={index} className="count-stat">
                    <h4>{stat.value}</h4>
                    <h5>{stat.label}</h5>
                </div>
            ))}
        </div>
    );
}
