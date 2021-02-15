import React from 'react'

export function Checked() {
    return (
        <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i)">
                    <rect width="20" height="20" rx="4" fill="white" />
                </g>
                <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#02B589" />
                <line x1="4.53033" y1="4.69294" x2="15.6919" y2="15.8545" stroke="#02B589" strokeWidth="1.5" />
                <line x1="4.48435" y1="15.6312" x2="15.6459" y2="4.46965" stroke="#02B589" strokeWidth="1.5" />
                <defs>
                    <filter id="filter0_i" x="0" y="0" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1" dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                </defs>
            </svg>

        </div>
    )
}


