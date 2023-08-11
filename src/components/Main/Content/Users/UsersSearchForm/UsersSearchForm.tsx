import React from 'react';
import { Formik, Form, Field } from 'formik';
// import Loader from './../../../../Common/Loader/Loader';
// import { DebounceInput } from 'react-debounce-input';
import s from './UsersSearchForm.module.scss';
import { filterType } from '../../../../../redux/users-reducer';

type propsType = {
  isFetching: boolean;
  onFilterChanged: (filter: filterType) => void;
};

const UsersSearchForm: React.FC<propsType> = React.memo(function UsersSearchForm(props: propsType) {
  // const changeInvoiceInput = (e: any) => {
  //     if (e.target.value > 0) {
  //         dispatch(getInvoice(e.target.value))
  //     } else {
  //         dispatch(toggleIsExchangeСompleted(false))
  //     }
  // }

  return (
    <div className={s.wrapper}>
      <h1>Пошук серед велосипедистів</h1>
      <Formik
        initialValues={{ term: '', friend: null }}
        onSubmit={(values, { setSubmitting }) => {
          props.onFilterChanged(values);
          setSubmitting(false);

          // props.isFetching && setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="friend"
              as="select"
              className={s.method_input}
            >
              <option value="null">всі</option>
              <option value="true">на кого підписаний</option>
              <option value="false">на кого не підписаний</option>
            </Field>
            <Field
              type="text"
              name="term"
              className={s.method_input}
              // onChange={changeInvoiceInput}
            />

            {/* <DebounceInput
                                className={s.method_input}
                                type="number"
                                minLength={1}
                                value={withdrawAmount}
                                debounceTimeout={1000}
                                readOnly={isInputFetching}
                                onChange={changeWithdrawInput}
                            /> */}

            <button
              type="submit"
              disabled={isSubmitting}
            >
              пошук
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default UsersSearchForm;
