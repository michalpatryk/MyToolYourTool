import React from "react";
import axiosAPI from '../../API/ourAPI/API';
import {useLocation, Redirect} from "react-router-dom";
import queryString from 'query-string'

export default function Borrow() {
    const { search } = useLocation();
    const queryParams = queryString.parse(search);

    return (
        <Redirect to="/" />
    );
}

