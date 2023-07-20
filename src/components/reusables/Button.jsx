const Button = ({ btnType, btnStyle, btnTitle }) => {
	return (
		<button type={btnType} className={btnStyle}>
			{btnTitle}
		</button>
	);
};

export default Button;
