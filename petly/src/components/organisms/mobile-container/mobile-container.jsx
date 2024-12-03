import "./mobile-container.css";

const MobileContainer = ({ children }) => {
  return (
    <div id="mobile-wrapper">
      <main id="mobile-container">{children}</main>
    </div>
  );
};

export default MobileContainer;
