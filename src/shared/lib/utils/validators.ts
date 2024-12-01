type FieldValidatorType = (value: string) => string | undefined;

export const required: FieldValidatorType = (value) => {
  if (value) return undefined;
  return "Field is required";
};

type LengthValidatorType = (value: number) => FieldValidatorType;

export const minLengthCreator: LengthValidatorType = (minLength) => (value) => {
  if (value.length < minLength) {
    return `Min length is ${minLength} symbols`;
  }
  return undefined;
};

export const maxLengthCreator: LengthValidatorType = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  }
  return undefined;
};
