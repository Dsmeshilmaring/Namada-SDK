const NotificationIcon = ({ w, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={w}
      viewBox="0 0 24 24"
    >
      <path
        transform="matrix(1 0 0 1 4.5 2.50195)"
        d="M0 16.3828L0 14.8828L1.81055 14.8828L1.81055 7.42383C1.81055 6.07617 2.22461 4.88672 3.05273 3.85547C3.88477 2.82031 4.95117 2.1582 6.25195 1.86914L6.25195 1.24805C6.25195 0.900391 6.37305 0.605469 6.61523 0.363281C6.85742 0.121094 7.15234 0 7.5 0C7.84766 0 8.14258 0.121094 8.38477 0.363281C8.62695 0.605469 8.74805 0.900391 8.74805 1.24805L8.74805 1.86914C10.0488 2.1582 11.1133 2.82031 11.9414 3.85547C12.7734 4.88672 13.1895 6.07617 13.1895 7.42383L13.1895 14.8828L15 14.8828L15 16.3828L0 16.3828ZM7.5 19.1895C7 19.1895 6.57227 19.0137 6.2168 18.6621C5.86523 18.3066 5.68945 17.8809 5.68945 17.3848L9.31055 17.3848C9.31055 17.8809 9.13281 18.3066 8.77734 18.6621C8.42188 19.0137 7.99609 19.1895 7.5 19.1895ZM3.31055 14.8828L11.6895 14.8828L11.6895 7.42383C11.6895 6.26367 11.2793 5.27539 10.459 4.45898C9.64258 3.63867 8.65625 3.22852 7.5 3.22852C6.34375 3.22852 5.35547 3.63867 4.53516 4.45898C3.71875 5.27539 3.31055 6.26367 3.31055 7.42383L3.31055 14.8828Z"
        fill="rgb(231, 231, 231)"
      />
    </svg>
  );
};

export default NotificationIcon;
