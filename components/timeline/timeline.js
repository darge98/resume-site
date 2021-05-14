import React from "react";

function Timeline(props) {
    return (
        <div className="box-border leading-6 list-none m-0 p-0" style={{fontFeatureSettings: 'tnum', fontVariant: 'tabular-nums'}}>
            {props.children}
        </div>
    )
}

function Item(props) {
    return (
        <li className="list-none m-0 pb-10 relative box-border">
            <div className="left-1 absolute top-2" style={{height: 'calc(100% - 10px)', borderLeft: '2px solid #f0f0f0' }}/>
            <div className="absolute border-2 border-solid border-transparent rounded-full bg-white"
                 style={{borderColor: '#1d35b9', color: '#1d35b9', height: '10px', width: '10px'}} />
            <div className="text-gray-500 absolute -top-1 left-4 text-xs">{props.date}</div>
            <div className="relative break-words top-4" style={{margin: '0 0 0 30px' }}>{props.label}</div>
        </li>
    )
}

Timeline.Item = Item;

export default Timeline;
