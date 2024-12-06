import s from "./FormControls.module.scss";

export function FormControls(Element: string) {
  const WrappedComponent = function ({ input, meta, ...props }: { input: any; meta: any }) {
    const hasError = meta.touched && meta.error;

    return (
      <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
          <Element
            {...input}
            {...props}
          />
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
    );
  };

  WrappedComponent.displayName = `FormControl(${Element})`;

  return WrappedComponent;
}
