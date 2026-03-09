import { Spinner } from "#/shared/components/spinner/spinner.mod";
import { cn } from "#/shared/utils/classnames/classnames.mod";

interface ButtonRenderProps {
  isPending: boolean;
}

export interface ButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children" | "disabled" | "onClick"
> {
  children?:
    | React.ReactNode
    | ((renderProps: ButtonRenderProps) => React.ReactNode);
  isDisabled?: boolean;
  isPending?: boolean;
  onPress?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    isDisabled,
    isPending = false,
    onPress,
    ...buttonProps
  } = props;

  const buttonClasses = cn("btn", className);

  const renderProps = {
    isPending,
  } satisfies ButtonRenderProps;

  return (
    <button
      {...buttonProps}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={onPress}
    >
      {isPending ? <Spinner /> : null}

      {typeof children === "function" ? children(renderProps) : children}
    </button>
  );
};
