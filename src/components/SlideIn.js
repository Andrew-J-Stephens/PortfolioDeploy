import './SlideIn.css';
const SlideIn = ({ children, startAnimation }) => {
  const transtionProperties = startAnimation
    ? { marginTop: '-250px', opacity: 0 }
    : {};
  return (
    <div className="slideBox">
    <div className="slide-in" style={transtionProperties}>
      {children}
    </div>
    </div>
  );
};
export default SlideIn;