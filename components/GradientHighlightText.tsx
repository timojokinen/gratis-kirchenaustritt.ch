export const GradientHighlightText = ({ children }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
      {children}
    </span>
  );
};

export default GradientHighlightText;
