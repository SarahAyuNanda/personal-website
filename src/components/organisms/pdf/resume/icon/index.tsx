import {
    IconMap,
    IconProps,
} from "@/components/organisms/pdf/resume/icon/model";
import { Circle, Path, Svg } from "@react-pdf/renderer";

export const Icon = ({ name, size = 24, color = "black" }: IconProps) => {
    const Component = icons[name];
    return (
        <Svg height={size} width={size} viewBox="0 0 24 24" stroke={color}>
            <Component color={color} />
        </Svg>
    );
};

const icons: IconMap = {
    at: ({ color }) => (
        <>
            <Circle stroke={color} cx="12" cy="12" r="4" />
            <Path stroke={color} d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
        </>
    ),
    calendar: ({ color }) => (
        <>
            <Path stroke={color} d="M8 2v4" />
            <Path stroke={color} d="M16 2v4" />
            <Path
                stroke={color}
                d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"
            />
            <Path stroke={color} d="M3 10h18" />
            <Path stroke={color} d="M15 22v-4a2 2 0 0 1 2-2h4" />
        </>
    ),
    dot: ({ color }) => <Circle stroke={color} cx="12.1" cy="12.1" r="4" />,
    link: ({ color }) => (
        <>
            <Path
                stroke={color}
                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            />
            <Path
                stroke={color}
                d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            />
        </>
    ),
    location: ({ color }) => (
        <>
            <Path
                stroke={color}
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            />
            <Circle stroke={color} cx="12" cy="10" r="3" />
        </>
    ),
    phone: ({ color }) => (
        <>
            <Path
                stroke={color}
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
            />
        </>
    ),
};
