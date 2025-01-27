import React, { Suspense } from 'react';
import {
    Form,
    Formik,
    FormikHelpers,
    FormikProps,
} from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './FeedbackForm.css';

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

const FeedbackForm: React.FC<{}> = () => {

    // function handleOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        
    // }

    return (
        <div className="feedback-form-container">
            <div className="feedback-form-block">
                <div className='feedback-header'>
                    <h1>Feedback</h1>
                </div>
                <div>
                    <center>
                        <p>Please feel free to let me know what you think of the website!</p>
                        <p>Any feedback is appreciated -</p>
                        <p>I am always looking for ways to improve!</p>
                    </center>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(
                        values: FeedbackFormValues,
                        { setSubmitting }: FormikHelpers<FeedbackFormValues>
                    ) => {
                        axios.post('http://localhost:5000/submit-feedback', values)
                            .then(response => {
                                alert('Feedback submitted successfully');
                            })
                            .catch(error => {
                                alert('Error submitting feedback');
                            })
                            .finally(() => {
                                setSubmitting(false);
                            });
                    }}
                >
                    {(props: FormikProps<FeedbackFormValues>) => (
                        <Form>
                            <div className="form-field form-field-name">
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Name"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.name}
                                />
                            </div>
                            <div className="form-field form-field-email">
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}

                                />
                            </div>
                            <div className="form-field form-field-feedback">
                                <TextField
                                    id="feedback"
                                    name="feedback"
                                    label="Feedback"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.feedback}
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <div className="feedback-submit-button">
                                <Button color="primary" variant="contained" type="submit">Submit</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default FeedbackForm;

// Resources used for this component:
// formik library for form - https://formik.org/docs/overview
// https://create-react-app.dev/docs/code-splitting/
//  - this was needed since there were a lot of libraries getting used and
//    it was taking up too much space which will cause an issue with loading.
//    This code splitting technique allows for the component to "lazy" load.