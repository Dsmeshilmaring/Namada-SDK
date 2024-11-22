const SecurityBackupIcon = ({ w, color, fill }) => {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6 6.6C21.6 8.58823 17.302 10.2 12 10.2C6.69809 10.2 2.40002 8.58823 2.40002 6.6M21.6 6.6C21.6 4.61177 17.302 3 12 3C6.69809 3 2.40002 4.61177 2.40002 6.6M21.6 6.6V17.4C21.6 19.3882 17.302 21 12 21C6.69809 21 2.40002 19.3882 2.40002 17.4V6.6M21.6 12C21.6 13.9882 17.302 15.6 12 15.6C6.69809 15.6 2.40002 13.9882 2.40002 12"
        stroke={color}
      />
      <path
        d="M13.3 15.9431C13.3 14.4236 14.5043 13.2002 16 13.2002C17.4957 13.2002 18.7 14.4236 18.7 15.9431V16.4002C19.195 16.4002 19.6 16.8116 19.6 17.3145V21.8859C19.6 22.3888 19.195 22.8002 18.7 22.8002H13.3C12.805 22.8002 12.4 22.3888 12.4 21.8859V17.3145C12.4 16.8116 12.805 16.4002 13.3 16.4002V15.9431Z"
        fill={fill}
      />
      <path
        d="M13.3 16.4002V15.9431C13.3 14.4236 14.5043 13.2002 16 13.2002C17.4957 13.2002 18.7 14.4236 18.7 15.9431V16.4002M13.3 16.4002C12.805 16.4002 12.4 16.8116 12.4 17.3145V21.8859C12.4 22.3888 12.805 22.8002 13.3 22.8002H18.7C19.195 22.8002 19.6 22.3888 19.6 21.8859V17.3145C19.6 16.8116 19.195 16.4002 18.7 16.4002M13.3 16.4002H18.7M16 20.1002V18.9002"
        stroke={color}
        stroke-linecap="round"
      />
    </svg>
  );
};

export default SecurityBackupIcon;
