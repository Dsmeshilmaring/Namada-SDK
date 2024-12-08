const UpRightIcon = ({ w, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        transform="matrix(1 0 0 1 8 7.5)"
        d="M9.20711 -0.707107C8.81659 -1.09763 8.18341 -1.09763 7.79289 -0.707107L-0.707107 7.79289C-1.09763 8.18341 -1.09763 8.81659 -0.707107 9.20711C-0.316586 9.59763 0.316586 9.59763 0.707107 9.20711L9.20711 0.707107C9.59763 0.316586 9.59763 -0.316586 9.20711 -0.707107Z"
        fill={color}
      />
      <path
        transform="matrix(1 0 0 1 7.5 7.5)"
        d="M-1 0C-1 0.55228 -0.55228 1 0 1L8 1L8 9C8 9.55228 8.44772 10 9 10C9.55228 10 10 9.55228 10 9L10 0Q10 -0.0984914 9.98079 -0.19509Q9.96157 -0.291689 9.92388 -0.382683Q9.88619 -0.473678 9.83147 -0.55557Q9.77675 -0.637463 9.70711 -0.707107Q9.63746 -0.776751 9.55557 -0.831469Q9.47368 -0.886188 9.38268 -0.923879Q9.29169 -0.961571 9.19509 -0.980785Q9.09849 -1 9 -1L0 -1C-0.55228 -1 -1 -0.55228 -1 0Z"
        fill={color}
      />
    </svg>
  );
};

export default UpRightIcon;
