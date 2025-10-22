interface MySimpleButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const MySimpleButton = ({
  onClick,
  children,
}: MySimpleButtonProps) => {
  return (
    <button onClick={onClick ? onClick : undefined}>
      {children}
    </button>
  );
};

export default MySimpleButton;
