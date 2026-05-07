type NavItem = {
    label: string;
    href: string;
}

type NavSection = {
    key:string;
    title: string;
    items: NavItem[];
}

export const NAV_ITEM: readonly NavSection[] = [
    {
        key:"headerNav",
        title: "Header Nav",
        items: [
            {label: 'Home', href:"/"},
            {label: 'Products', href:"/products"},
            {label: 'Cart', href:"/cart"},
        ]
    }
]

//helper to map the keys into the object
export const NAV_MAP = Object.fromEntries(
    NAV_ITEM.map(section => [section.key, section] )
);

//get the specific nav using the key
export function getNav(key:string){
    return NAV_MAP[key]
}