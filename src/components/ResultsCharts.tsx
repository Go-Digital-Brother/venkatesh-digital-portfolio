import { useEffect, useState } from "react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

const LEADS = [
  { m: "Jan", leads: 610 }, { m: "Feb", leads: 680 }, { m: "Mar", leads: 720 }, { m: "Apr", leads: 790 },
  { m: "May", leads: 850 }, { m: "Jun", leads: 910 }, { m: "Jul", leads: 960 }, { m: "Aug", leads: 1040 },
];
const MIX = [
  { n: "Google Ads", v: 40 }, { n: "SEO / AEO / GEO", v: 25 }, { n: "Meta Ads", v: 20 }, { n: "Social & Content", v: 10 }, { n: "OOH", v: 5 },
];
const CPL = [{ k: "Before", v: 100 }, { k: "After", v: 83 }];
const COLORS = ["var(--primary)", "var(--accent)", "oklch(0.7 0.15 230)", "oklch(0.78 0.14 85)", "oklch(0.65 0.18 30)"];
const tip = { background: "var(--navy-deep)", border: "1px solid oklch(1 0 0 / 0.15)", borderRadius: 12, color: "var(--navy-foreground)" };

export default function ResultsCharts() {
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => setReady(true), []);
  if (!ready) return <div className="h-[420px]" />;
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <div className="rounded-3xl glass p-6 lg:col-span-7">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Monthly leads</p>
        <p className="font-heading text-3xl font-extrabold">1,000+ <span className="text-base font-semibold text-navy-foreground/60">per month</span></p>
        <div className="mt-4 h-64">
          <ResponsiveContainer>
            <AreaChart data={LEADS}>
              <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--accent)" stopOpacity={0.6} /><stop offset="1" stopColor="var(--accent)" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid stroke="oklch(1 0 0 / 0.08)" vertical={false} />
              <XAxis dataKey="m" stroke="oklch(1 0 0 / 0.5)" tickLine={false} axisLine={false} />
              <YAxis stroke="oklch(1 0 0 / 0.5)" tickLine={false} axisLine={false} width={40} />
              <Tooltip contentStyle={tip} />
              <Area type="monotone" dataKey="leads" stroke="var(--accent)" strokeWidth={3} fill="url(#lg)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-3xl glass p-6 lg:col-span-5">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Channel mix</p>
        <p className="font-heading text-xl font-bold">{MIX[active].n} · {MIX[active].v}%</p>
        <div className="h-52">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={MIX} dataKey="v" nameKey="n" innerRadius={55} outerRadius={85} paddingAngle={3} onMouseEnter={(_, i) => setActive(i)}>
                {MIX.map((_, i) => <Cell key={i} fill={COLORS[i]} stroke="none" opacity={i === active ? 1 : 0.55} />)}
              </Pie>
              <Tooltip contentStyle={tip} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-2">
          {MIX.map((x, i) => <button key={x.n} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs transition ${i === active ? "bg-navy-foreground/15" : "text-navy-foreground/60"}`}><span className="size-2 rounded-full" style={{ background: COLORS[i] }} />{x.n}</button>)}
        </div>
      </div>
      <div className="rounded-3xl glass p-6 lg:col-span-5">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Cost per lead</p>
        <p className="font-heading text-3xl font-extrabold">−17%</p>
        <div className="mt-2 h-40">
          <ResponsiveContainer>
            <BarChart data={CPL} layout="vertical">
              <XAxis type="number" hide /><YAxis type="category" dataKey="k" stroke="oklch(1 0 0 / 0.6)" tickLine={false} axisLine={false} width={55} />
              <Tooltip contentStyle={tip} cursor={false} />
              <Bar dataKey="v" radius={[0, 10, 10, 0]}>{CPL.map((_, i) => <Cell key={i} fill={i ? "var(--accent)" : "oklch(1 0 0 / 0.25)"} />)}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:col-span-7">
        {[["+32%", "Qualified leads"], ["₹10L", "Monthly Google Ads budget"], ["10+", "Campaigns managed"], ["9+", "Years of experience"]].map(([n, l]) => (
          <div key={l} className="ring-brand rounded-3xl glass p-6 transition hover:-translate-y-1">
            <p className="font-heading text-4xl font-extrabold text-brand">{n}</p><p className="mt-2 text-sm text-navy-foreground/70">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
