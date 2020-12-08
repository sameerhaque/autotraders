import React from "react"

const Hotspot = () => {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9">
        <g opacity="0.3" filter="url(#filter0_b)">
          <circle
            r="27.5"
            transform="matrix(-1 0 0 1 32.5 32.5)"
            stroke="#0F68C9"
            strokeWidth="10"
          />
        </g>
        <g filter="url(#filter1_b)">
          <circle
            r="22.5"
            transform="matrix(-1 0 0 1 32.5 32.5)"
            fill="#0F68C9"
          />
          <circle
            r="21.5"
            transform="matrix(-1 0 0 1 32.5 32.5)"
            stroke="#0F68C9"
            strokeWidth="2"
          />
        </g>
        <rect
          className="vertical"
          width="1"
          height="20"
          rx="0.5"
          transform="matrix(-1 0 0 1 33 23)"
          fill="white"
        />
        <rect
          className="horizontal"
          width="1"
          height="20"
          rx="0.5"
          transform="matrix(4.37114e-08 1 1 -4.37114e-08 23 32)"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b"
          x="-4"
          y="-4"
          width="73"
          height="73"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b"
          x="6"
          y="6"
          width="53"
          height="53"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Hotspot
