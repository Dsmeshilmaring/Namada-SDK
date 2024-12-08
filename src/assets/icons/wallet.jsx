const WalletIcon = ({ w, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width={w}
      height={w}
      viewBox="0 0 24 24"
    >
      <path
        transform="matrix(1 0 0 1 3 3)"
        d="M15.5 5L15.5 1.5Q15.5 1.29289 15.3536 1.14644Q15.2071 1 15 1L1.5 1Q1.29289 1 1.14645 1.14645Q1 1.29289 1 1.5L1 16.5Q1 16.7071 1.14644 16.8536Q1.29288 17 1.5 17L15 17Q15.2071 17 15.3536 16.8536Q15.5 16.7071 15.5 16.5L15.5 13L17.5 13L17.5 16.5Q17.5 17.008 17.3031 17.4734Q17.1133 17.9223 16.7678 18.2678Q16.4223 18.6133 15.9734 18.8031Q15.508 19 15 19L1.5 19Q0.992045 19 0.526587 18.8031Q0.0777598 18.6133 -0.267765 18.2678Q-0.613292 17.9223 -0.803129 17.4734Q-1 17.008 -1 16.5L-1 1.5Q-1 0.992041 -0.803126 0.52658Q-0.61329 0.0777574 -0.267766 -0.267766Q0.0777575 -0.61329 0.52658 -0.803126Q0.992041 -1 1.5 -1L15 -1Q15.508 -1 15.9734 -0.803127Q16.4223 -0.613289 16.7678 -0.267762Q17.1133 0.0777587 17.3031 0.526589Q17.5 0.992044 17.5 1.5L17.5 5L15.5 5Z"
        fill-rule="nonzero"
        fill="rgb(255, 255, 255)"
      />
      <path
        transform="matrix(1 0 0 1 11 8)"
        d="M-1 1.5C-1 0.119288 0.119288 -1 1.5 -1L8.5 -1C9.88071 -1 11 0.119288 11 1.5L11 6.5C11 7.88071 9.88071 9 8.5 9L1.5 9C0.119288 9 -1 7.88071 -1 6.5L-1 1.5ZM1.5 1C1.22386 1 1 1.22386 1 1.5L1 6.5C1 6.77614 1.22386 7 1.5 7L8.5 7C8.77614 7 9 6.77614 9 6.5L9 1.5C9 1.22386 8.77614 1 8.5 1L1.5 1Z"
        fill-rule="nonzero"
        fill="rgb(255, 255, 255)"
      />
      <path
        transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 13)"
        d="M1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0Z"
        fill-rule="nonzero"
        fill="rgb(255, 255, 255)"
      />
    </svg>
  );
};

export default WalletIcon;
