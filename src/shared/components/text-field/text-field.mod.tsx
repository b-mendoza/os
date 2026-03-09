import { useId } from "react";

import { cn } from "#/shared/utils/classnames/classnames.mod";

const getElementId = (inputId: string, shouldRender: boolean, suffix: string) =>
  shouldRender ? `${inputId}-${suffix}` : undefined;

const getDescribedBy = (...ids: Array<string | undefined>) => {
  const validIds = ids.filter((id): id is string => id !== undefined);
  const [firstValidId] = validIds;

  return firstValidId === undefined ? undefined : validIds.join(" ");
};

interface TextFieldLabelProps {
  inputId: string;
  label?: string;
  labelId?: string;
}

const TextFieldLabel = (props: TextFieldLabelProps) => {
  const { inputId, label, labelId } = props;

  return label === undefined ? null : (
    <label className="label" htmlFor={inputId} id={labelId}>
      {label}
    </label>
  );
};

interface TextFieldDescriptionProps {
  description?: string;
  descriptionId?: string;
}

const TextFieldDescription = (props: TextFieldDescriptionProps) => {
  const { description, descriptionId } = props;

  return description === undefined ? null : (
    <p id={descriptionId}>{description}</p>
  );
};

interface TextFieldErrorProps {
  errorId?: string;
  errorMessage?: string;
}

const TextFieldError = (props: TextFieldErrorProps) => {
  const { errorId, errorMessage } = props;

  return errorMessage === undefined ? null : (
    <p className="validator-hint" id={errorId}>
      {errorMessage}
    </p>
  );
};

export interface TextFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"input">,
  "children" | "className" | "disabled" | "readOnly" | "required"
> {
  description?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  label?: string;
  slotProps?: Partial<{
    input: React.ComponentPropsWithRef<"input">;
  }>;
  className?: string;
}

export const TextField = (props: TextFieldProps) => {
  const {
    className,
    description,
    errorMessage,
    id,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    label,
    slotProps,
    ...inputProps
  } = props;

  const fallbackId = useId();
  const inputId = id ?? fallbackId;
  const hasLabel = label !== undefined;
  const hasDescription = description !== undefined;
  const hasErrorMessage = errorMessage !== undefined;
  const labelId = getElementId(inputId, hasLabel, "label");
  const descriptionId = getElementId(inputId, hasDescription, "description");
  const errorId = getElementId(inputId, hasErrorMessage, "error");
  const describedBy = getDescribedBy(descriptionId, errorId);

  return (
    <div
      className={cn(
        // Layout classes
        "flex flex-col",
        className,
      )}
    >
      <TextFieldLabel inputId={inputId} label={label} labelId={labelId} />

      <input
        {...inputProps}
        {...slotProps?.input}
        className={cn(
          // Base classes
          "input validator",
          // Layout classes
          "w-full",
          slotProps?.input?.className,
        )}
        aria-describedby={describedBy}
        aria-invalid={isInvalid ?? undefined}
        aria-labelledby={labelId}
        aria-required={isRequired ?? undefined}
        disabled={isDisabled}
        id={inputId}
        readOnly={isReadOnly}
        required={isRequired}
      />

      <TextFieldDescription
        description={description}
        descriptionId={descriptionId}
      />

      <TextFieldError errorId={errorId} errorMessage={errorMessage} />
    </div>
  );
};
