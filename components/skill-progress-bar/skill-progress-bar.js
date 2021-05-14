
export default function SkillProgressBar({label, progress, bgColor}) {
    return (
        <div className="flex flex-col justify-start">
            <div className="flex justify-between">
                <span className="text-lg text-gray-700">{label}</span>
                <span className="text-lg">{progress}%</span>
            </div>
            <div className="rounded-md w-full bg-gray-300">
                <div className="h-2 transition duration-150 ease-in-out rounded-md flex align-center justify-end" style={{width: progress+'%', backgroundColor: bgColor}}>
                    <span className="p-2 text-white font-bold" style={{fontSize: 0}}> {progress}% </span>
                </div>
            </div>
        </div>
    )
}
