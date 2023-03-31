export const AccountBtns = () => {
  return (
    <div className="flex gap-x-8">
      <button className="hover:cursor-default">
        <p className="nav-link text-white/75 hover:text-white transition-all duration-500 hover:cursor-pointer">
          Login
        </p>
      </button>
      <button className="btn">Sign Up</button>
    </div>
  );
};
