interface GameWrapperProps {
  children: React.ReactNode;
}

const GameWrapper = ({ children }: GameWrapperProps) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {children}
    </div>
  );
};

export default GameWrapper;
