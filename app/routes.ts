import {
    type RouteConfig,
    index,
    layout,
} from "@react-router/dev/routes";

export default [
    layout(
        "routes/root.tsx",
        {},
        [
            index("routes/home.tsx"),
            { path: "about", file: "routes/about.tsx" },
            { path: "contact", file: "routes/contact.tsx" }
        ]
    )
] satisfies RouteConfig;
