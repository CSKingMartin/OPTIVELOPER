import React from 'react'

export const Button = (props) => {
  const {
    variant,
    children,
    ...attrs
  } = props;

  return (
    <button className={variant} {...attrs}>{children}</button>
  );
};

Button.defaultProps = {
  'variant': 'is-special'
}



export default Button;
