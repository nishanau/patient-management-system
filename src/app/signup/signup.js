'use client'
import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import '../styles/style.css';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Box, FormControl } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {/*<label htmlFor={props.name}>{label}</label> */}
            <TextField
                id="outlined-multiline-flexible"
                label={props.placeholder}
                className={`text-input m-2 ${meta.touched && meta.error ? 'error' : ''}`}
                {...field}
                {...props}
                error={meta.touched && meta.error ? true : false}
                helperText={meta.touched && meta.error ? meta.error : ''}

            />
        </>
    );
};



const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};



const MySelect = ({ label, children, ...props }) => {
    const [field, meta] = useField(props);
    return (


        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth error={meta.touched && meta.error}>
                    <InputLabel htmlFor={props.name}>{label}</InputLabel>
                    <Select
                        label={label}
                        id={props.name}
                        {...field}
                        {...props}
                        inputProps={{
                            name: props.name,
                            id: `${props.name}-outlined`,
                        }}
                        helperText={meta.touched && meta.error ? meta.error : ''}
                    >
                        {/* Placeholder as the first menu item */}
                        <MenuItem value="" disabled>
                            {label}
                        </MenuItem>
                        {/* Other options */}
                        {children}
                    </Select>
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
                </FormControl>
            </Box>
        </div>


    );
};

const SignupForm = () => {
    return (
        <>
            <div className="flex items-center  justify-center bg-custom">
                <Card className='flex-col m-2 md:m-32 md:flex'>

                    <CardContent>
                        <Formik
                            initialValues={{
                                username: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                streetNumber: '',
                                street: '',
                                suburb: '',
                                state: '',
                                country: '',
                                postCode: '',
                                gender: '',
                                acceptedTerms: false,


                            }}
                            validationSchema={Yup.object({
                                username: Yup.string()
                                    .matches(/^[a-zA-Z0-9]+$/, 'Only alphabets and numbers are allowed')
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Required'),

                                password: Yup.string()
                                    .min(8, 'Password must be at least 8 characters')
                                    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:<>?~])/, 'Must contain at least one uppercase letter and one special character')
                                    .required('Required'),

                                confirmPassword: Yup.string()
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                    .required('Required'),

                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Required'),
                                acceptedTerms: Yup.boolean()
                                    .required('Required')
                                    .oneOf([true, `"\"on"\"`], 'You must accept the terms and conditions.'),

                                streetNumber: Yup.number()
                                    .typeError('Must be a number')
                                    .integer('Must be an integer')
                                    .required('Required'),

                                street: Yup.string()
                                    .matches(/^[a-zA-Z\s]+$/, 'Only alphabets and spaces are allowed')
                                    .required('Required'),

                                suburb: Yup.string()
                                    .matches(/^[a-zA-Z\s]+$/, 'Only alphabets and spaces are allowed')
                                    .required('Required'),

                                country: Yup.string()
                                    .matches(/^[a-zA-Z\s]+$/, 'Only alphabets and spaces are allowed')
                                    .required('Required'),

                                postCode: Yup.number()
                                    .typeError('Must be a number')
                                    .integer('Must be an integer')
                                    .required('Required'),

                                state: Yup.string()
                                    .oneOf(
                                        ['Tasmania', 'Western Australia', 'Victoria', 'South Australia', 'Queensland', 'New South Wales'],
                                        'Invalid State'
                                    )
                                    .required('Required'),
                                gender: Yup.string()
                                        .required('required')
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            <Form>
                                <div className='flex'>
                                    <div className='w-1/3 m1 flex-1'>
                                        <p className='h-5 mb-3 font-bold'>Authorization</p>
                                        <MyTextInput
                                            label="Username"
                                            name="username"
                                            type="text"
                                            placeholder="Username"
                                        />

                                        <MyTextInput
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                        />

                                        <MyTextInput
                                            label="Password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                        />

                                        <MyTextInput
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="Confirm Password"
                                        />

                                    </div>

                                    <div className=' w-1/3 m-1 flex-1'>
                                        <p className='h-5 mb-3 font-bold'>Address</p>
                                        <div className='flex m-2'>
                                            <MyTextInput
                                                label="streetnumber"
                                                name="streetNumber"
                                                type="text"
                                                placeholder="Street Number"
                                                className="m-1"
                                            />

                                            <MyTextInput
                                                label="Street"
                                                name="street"
                                                type="text"
                                                placeholder="Street"
                                                className="w-full m-1"
                                            />
                                        </div>

                                        <div className='flex m-2'>
                                            <MyTextInput
                                                label="Suburb"
                                                name="suburb"
                                                type="text"
                                                placeholder="Suburb"
                                            />
                                            <MySelect label="State" name="state">
                                                <MenuItem value="Tasmania">TAS</MenuItem>
                                                <MenuItem value="Western Australia">WA</MenuItem>
                                                <MenuItem value="Queensland">QLD</MenuItem>
                                                <MenuItem value="Victoria">VIC</MenuItem>
                                                <MenuItem value="New South Wales">NSW</MenuItem>
                                                <MenuItem value="South Australia">SA</MenuItem>
                                            </MySelect>
                                        </div>

                                        <div className='flex m-2'>
                                            <MyTextInput
                                                label="Country"
                                                name="country"
                                                type="text"
                                                placeholder="Country"
                                            />
                                            <MyTextInput
                                                label="Post Code"
                                                name="postCode"
                                                type="text"
                                                placeholder="Post Code"
                                            />
                                        </div>


                                    </div>

                                    <div className='w-1/3 flex-1'>
                                        <p className='h-5 mb-3 font-bold'>Extra Information</p>
                                        <MySelect label="Gender" name="gender">
                                            <MenuItem value="M">Male</MenuItem>
                                            <MenuItem value="F">Female</MenuItem>
                                            <MenuItem value="O">Other</MenuItem>
                                        </MySelect>

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateCalendar />
                                        </LocalizationProvider>
                                    </div>

                                </div>

                                <div className="m-1">
                                    <MyCheckbox className="m-2" name="acceptedTerms" >
                                        Remember Me
                                    </MyCheckbox>
                                    <Button className="m-2" variant="outlined" type="submit">Submit</Button>
                                </div>

                            </Form>
                        </Formik>
                    </CardContent>

                </Card>
            </div>
        </>
    );
};

export default SignupForm;
