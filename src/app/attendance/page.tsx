import Show from "@/components/Show/index";
import WideCards from "@/sections/WideCards/index";

const dataA = [
    {
        title: 'Attendance',
        contentComponent: Show,
    },
]

export default function Attendance() {
    return (
        <div>
            <WideCards data={dataA}/>
        </div>
    )
}