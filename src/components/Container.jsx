const Container = ({ children, className = "relative w-full" }) => {
  return (
    <div className={`max-w-375 mx-auto px-5 py-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;