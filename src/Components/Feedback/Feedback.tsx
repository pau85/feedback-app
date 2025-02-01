import React, { Suspense } from 'react';
import {
    useFormik
} from 'formik';
import * as Yup from 'yup';

const FeedbackForm = React.lazy(() => import('./FeedbackForm'));

interface FeedbackFormValues {
    name: string;
    email: string;
    feedback: string;
}

const initialValues: FeedbackFormValues = {
    name: '',
    email: '',
    feedback: ''
}

const validationSchema = Yup.object({
    email: Yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    name: Yup
        .string()
        .required('Name is required'),
    feedback: Yup
        .string()
        .required('Feedback is required'),
})

const Feedback: React.FC<{}> = () => {
    const formik = useFormik<FeedbackFormValues>({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="feedback-form">
            <Suspense fallback={<div>Loading...</div>}>
                <FeedbackForm />
            </Suspense>
        </div>
    )
}

export default Feedback;

// Resources used for this component:
// formik library for form - https://formik.org/docs/overview
// https://create-react-app.dev/docs/code-splitting/
//  - this was needed since there were a lot of libraries getting used and
//    it was taking up too much space which will cause an issue with loading.
//    This code splitting technique allows for the component to "lazy" load.