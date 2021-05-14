import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function OverallCircularBar({percentage, label}) {
    return (
        <div className="flex flex-col justify-center">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <span className="font-semibold text-sm text-center">{label}</span>
        </div>
    )
}
