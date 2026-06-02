interface Props {
  open?: boolean;
  className?: string;
}

export default function HamburgerIcon({ open = false, className = "" }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {open ? (
        // × close
        <>
          <line
            x1="5" y1="5" x2="19" y2="19"
            stroke="white" strokeWidth="1.8" strokeLinecap="round"
            style={{ transition: "all 0.3s ease" }}
          />
          <line
            x1="19" y1="5" x2="5" y2="19"
            stroke="white" strokeWidth="1.8" strokeLinecap="round"
            style={{ transition: "all 0.3s ease" }}
          />
        </>
      ) : (
        // ☰ hamburger
        <>
          <line
            x1="3" y1="7" x2="21" y2="7"
            stroke="white" strokeWidth="1.8" strokeLinecap="round"
            style={{ transition: "all 0.3s ease" }}
          />
          <line
            x1="3" y1="12" x2="21" y2="12"
            stroke="white" strokeWidth="1.8" strokeLinecap="round"
            style={{ transition: "all 0.3s ease" }}
          />
          <line
            x1="3" y1="17" x2="21" y2="17"
            stroke="white" strokeWidth="1.8" strokeLinecap="round"
            style={{ transition: "all 0.3s ease" }}
          />
        </>
      )}
    </svg>
  );
}
