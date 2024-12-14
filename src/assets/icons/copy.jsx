const CopyIcon = ({ w, color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 13.1251L20 6.00003C20 4.34317 18.6568 3.00002 17 3.00003L9.875 3.00012M14 21.0001L7.25 21.0001C6.00736 21.0001 5 19.9928 5 18.7501L5 9.00012C5 7.75747 6.00736 6.75011 7.25 6.75011L14 6.75011C15.2426 6.75011 16.25 7.75747 16.25 9.00011L16.25 18.7501C16.25 19.9928 15.2426 21.0001 14 21.0001Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CopyIcon;
