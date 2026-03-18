interface IconProps {
  color?: string
}

export function ChevronDownIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CircleCheckIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="10" stroke={color} strokeWidth="1.5" />
      <path
        d="M7 11L10 14L15 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LightbulbIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6C3.5 7.648 4.393 9.087 5.75 9.875V11.5C5.75 11.914 6.086 12.25 6.5 12.25H9.5C9.914 12.25 10.25 11.914 10.25 11.5V9.875C11.607 9.087 12.5 7.648 12.5 6C12.5 3.515 10.485 1.5 8 1.5Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 13.5H9.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function FileCodeIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 1.5H3.5C3.5 1.5 2.5 1.5 2.5 2.5V13.5C2.5 13.5 2.5 14.5 3.5 14.5H12.5C12.5 14.5 13.5 14.5 13.5 13.5V6L9 1.5Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M9 1.5V6H13.5" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M5.5 9.5L7 11L5.5 12.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.5H10.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
