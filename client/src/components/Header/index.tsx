import HeaderComplete from "../HeaderComplete";
import HeaderReduced from "../HeaderReduced";

export default function Header(data: { complete: boolean }) {
    const { complete } = data;

    if (!complete) return <HeaderReduced />;
    return <HeaderComplete />;
}
