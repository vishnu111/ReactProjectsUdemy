import PropTypes from "prop-types";
import className from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
  //Here, the "rest" collects all the props passed other than the props mentioned here. Either they may be button click events, mouse event or anything that might be passed as prop and not mentioned in the above list.
}) {
  //Here, we are passing "rest.className" to className because any className prop will be included here. If we pass the className prop directly to button element. It would conflict because the below one ("classes") is also passed to button element with name "className"
  const classes = className(
    rest.className,
    "flex items-center px-2 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-grey-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-grey-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    //Here, the "...rest" passes all the props it has captured to button
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    //Here, we are using the "!!" becasue when any of the above props are not passed they will read as "undefined". And "Number(undefined)" is "NaN". But, the Number(!!undefined) is "false".
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger should be passed"
      );
    }
  },
};
export default Button;
