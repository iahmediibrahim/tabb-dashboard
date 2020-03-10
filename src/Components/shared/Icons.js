import { Icon } from 'antd';
import React from 'react';
const Menu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
        <defs>
            <filter id="Rectangle_292" x="0" y="0" width="24" height="8" filterUnits="userSpaceOnUse">
                <feOffset dy="2" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feFlood floodColor="#002f23" floodOpacity="0.078" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
            </filter>
            <filter id="Rectangle_294" x="0" y="14" width="24" height="8" filterUnits="userSpaceOnUse">
                <feOffset dy="2" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="1" result="blur-2" />
                <feFlood floodColor="#002f23" floodOpacity="0.078" />
                <feComposite operator="in" in2="blur-2" />
                <feComposite in="SourceGraphic" />
            </filter>
            <filter id="Rectangle_293" x="0" y="7" width="24" height="8" filterUnits="userSpaceOnUse">
                <feOffset dy="2" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="1" result="blur-3" />
                <feFlood floodColor="#002f23" floodOpacity="0.078" />
                <feComposite operator="in" in2="blur-3" />
                <feComposite in="SourceGraphic" />
            </filter>
        </defs>
        <g id="Burger_menu" data-name="Burger menu" transform="translate(3 1)">
            <g transform="matrix(1, 0, 0, 1, -3, -1)" filter="url(#Rectangle_292)">
                <rect
                    id="Rectangle_292-2"
                    data-name="Rectangle 292"
                    width="18"
                    height="2"
                    transform="translate(3 1)"
                    fill="#fff"
                />
            </g>
            <g transform="matrix(1, 0, 0, 1, -3, -1)" filter="url(#Rectangle_294)">
                <rect
                    id="Rectangle_294-2"
                    data-name="Rectangle 294"
                    width="18"
                    height="2"
                    transform="translate(3 15)"
                    fill="#fff"
                />
            </g>
            <g transform="matrix(1, 0, 0, 1, -3, -1)" filter="url(#Rectangle_293)">
                <rect
                    id="Rectangle_293-2"
                    data-name="Rectangle 293"
                    width="18"
                    height="2"
                    transform="translate(3 8)"
                    fill="#fff"
                />
            </g>
        </g>
    </svg>
);

const Notification = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16">
        <path
            id="ic_notifications_24px"
            d="M10.5,18.5a1.638,1.638,0,0,0,1.625-1.641H8.875A1.633,1.633,0,0,0,10.5,18.5Zm4.875-4.923v-4.1c0-2.519-1.332-4.628-3.656-5.186V3.731a1.219,1.219,0,1,0-2.437,0v.558c-2.332.558-3.656,2.658-3.656,5.186v4.1L4,15.218v.821H17v-.821Z"
            transform="translate(-4 -2.5)"
            fill="#abb3c9"
        />
    </svg>
);
const Alert = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19">
        <path
            id="ic_warning_24px"
            d="M1,21H23L12,2Zm12-3H11V16h2Zm0-4H11V10h2Z"
            transform="translate(-1 -2)"
            fill="#6dd3f9"
        />
    </svg>
);
const ArrowDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
        <path
            id="ic_code_24px"
            d="M14.6,16.6l1.892-2L18.951,12,14.6,7.4,15.924,6l1.324,1.4L21.6,12l-5.676,6L14.6,16.6Z"
            transform="translate(18 -14.6) rotate(90)"
            fill="#8992ad"
        />
    </svg>
);
const Assign = () => (
    <svg id="Assign_icon" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
        <path
            id="ic_next_week_24px"
            d="M20,7H16V5a2.015,2.015,0,0,0-2-2H10A2.006,2.006,0,0,0,8,5V7H4A2.006,2.006,0,0,0,2,9V20a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V9A2.006,2.006,0,0,0,20,7ZM10,5h4V7H10Zm1,13.5-1-1,3-3-3-3,1-1,4,4Z"
            transform="translate(-2 -3)"
            fill="#8992ad"
        />
    </svg>
);
const Bill = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16">
        <path
            id="ic_notifications_24px"
            d="M10.5,18.5a1.638,1.638,0,0,0,1.625-1.641H8.875A1.633,1.633,0,0,0,10.5,18.5Zm4.875-4.923v-4.1c0-2.519-1.332-4.628-3.656-5.186V3.731a1.219,1.219,0,1,0-2.437,0v.558c-2.332.558-3.656,2.658-3.656,5.186v4.1L4,15.218v.821H17v-.821Z"
            transform="translate(-4 -2.5)"
            fill="#abb3c9"
        />
    </svg>
);

const BloodGlucose = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17">
        <path
            id="blood-drop"
            d="M9.145,4.141C7.76,1.963,6.356.188,6.342.171a.427.427,0,0,0-.683,0c-.014.018-1.419,1.792-2.8,3.97C.961,7.121,0,9.416,0,10.963a5.946,5.946,0,0,0,1.782,4.451A6.078,6.078,0,0,0,6,17a6.077,6.077,0,0,0,4.218-1.586A5.946,5.946,0,0,0,12,10.963C12,9.416,11.039,7.121,9.145,4.141ZM9.035,13.9a.428.428,0,0,1-.3.121.436.436,0,0,1-.344-.173.533.533,0,0,1,.048-.7,2.879,2.879,0,0,0,.837-2.187.455.455,0,1,1,.907,0A3.874,3.874,0,0,1,9.035,13.9Zm0,0"
            transform="translate(0 0)"
            fill="#5c6d96"
        />
    </svg>
);
const Cardiac = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">
        <path
            id="icons8-heart_with_pulse"
            d="M7.636,4A4.7,4.7,0,0,0,3,8.76a6.415,6.415,0,0,0,.1,1.058H4.534A2.052,2.052,0,0,1,6,10.436l.342.344L8.033,7.311a.691.691,0,0,1,.683-.4.709.709,0,0,1,.621.494l1.515,4.662.347-.893a2.093,2.093,0,0,1,1.952-1.357H14.53a1.4,1.4,0,0,1,1.22-.727,1.455,1.455,0,0,1,0,2.909,1.406,1.406,0,0,1-1.22-.727H13.152a.682.682,0,0,0-.636.442L11.45,14.452a.71.71,0,0,1-.659.457h-.021a.71.71,0,0,1-.65-.5L8.535,9.531l-1.36,2.794a.714.714,0,0,1-.517.392.7.7,0,0,1-.611-.2L5.01,11.473a.668.668,0,0,0-.476-.2H3.487c1.341,3.6,5.121,6.788,7.089,8.375l.032.027.04.033h0a1.38,1.38,0,0,0,1.7,0h0l.017-.013.012-.01.014-.013C14.8,17.732,20,13.347,20,8.76A4.7,4.7,0,0,0,15.364,4,5.037,5.037,0,0,0,11.5,6.182,5.037,5.037,0,0,0,7.636,4Z"
            transform="translate(-3 -4)"
            fill="#ffffff"
        />
    </svg>
);
const Dashboard = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path
            id="ic_donut_large_24px"
            d="M10.1,4.772V2a9.05,9.05,0,0,0,0,18V17.228A6.625,6.625,0,0,1,4.7,11,6.625,6.625,0,0,1,10.1,4.772ZM17.273,10.1H20A8.667,8.667,0,0,0,11.9,2V4.772A6.448,6.448,0,0,1,17.273,10.1ZM11.9,17.228V20A8.667,8.667,0,0,0,20,11.9H17.273A6.448,6.448,0,0,1,11.9,17.228Z"
            transform="translate(-2 -2)"
            fill="#6dd3f9"
        />
    </svg>
);
const DiagBlood = () => (
    <svg
        id="blood-donation_2_"
        data-name="blood-donation (2)"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
    >
        <path
            id="Path_874"
            data-name="Path 874"
            d="M109.118,6.093,109.9,9.02,110.9,4.468l1.026,3.6.753-1.43.723,1.856h1.961a28.424,28.424,0,0,0-1.889-4.105C112.387,2.36,110.9,0,110.9,0s-1.489,2.36-2.579,4.387a30.277,30.277,0,0,0-1.8,3.85h1.73Zm0,0"
            transform="translate(-103.399)"
            fill="#5c6d96"
        />
        <path
            id="Path_875"
            data-name="Path 875"
            d="M15,275.345H11.982a8.434,8.434,0,0,1,.243.86H9.407l-.243-.622-.878,1.666-.673-2.362-1.033,4.678-1.033-3.873-.1.257H2.837q.1-.393.269-.859H0v.878H2.837a4.277,4.277,0,0,0-.161,1.047,4.824,4.824,0,0,0,9.648,0,3.771,3.771,0,0,0-.1-.792H15Zm0,0"
            transform="translate(0 -266.833)"
            fill="#5c6d96"
        />
    </svg>
);
const DiagHeart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
        <path
            id="icons8-heart_with_pulse"
            d="M7.091,4A4.128,4.128,0,0,0,3,8.165a5.568,5.568,0,0,0,.088.926H4.354a1.818,1.818,0,0,1,1.3.541l.3.3L7.441,6.9a.61.61,0,0,1,.6-.349.625.625,0,0,1,.548.433L9.929,11.06l.306-.782a1.846,1.846,0,0,1,1.722-1.187h1.216a1.241,1.241,0,0,1,1.077-.636,1.273,1.273,0,0,1,0,2.545,1.242,1.242,0,0,1-1.077-.636H11.958a.6.6,0,0,0-.562.387l-.94,2.4a.626.626,0,0,1-.581.4H9.857a.625.625,0,0,1-.574-.435L7.884,8.84l-1.2,2.445a.629.629,0,0,1-.457.343.62.62,0,0,1-.54-.174l-.914-.915a.592.592,0,0,0-.42-.175H3.43c1.183,3.151,4.518,5.939,6.255,7.328l.028.024.035.029h0a1.226,1.226,0,0,0,1.5,0h0l.015-.011.011-.009.012-.011c2.125-1.7,6.71-5.534,6.71-9.548A4.128,4.128,0,0,0,13.909,4,4.448,4.448,0,0,0,10.5,5.909,4.448,4.448,0,0,0,7.091,4Z"
            transform="translate(-3 -4)"
            fill="#5c6d96"
        />
    </svg>
);
const HeartChecked = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
        <path
            id="icons8-heart_with_pulse"
            d="M9.545,4A6.544,6.544,0,0,0,3,10.545,8.6,8.6,0,0,0,3.141,12H5.166a2.936,2.936,0,0,1,2.072.85l.482.473,2.385-4.77A.979.979,0,0,1,11.07,8a1,1,0,0,1,.877.68l2.139,6.41.49-1.229A2.953,2.953,0,0,1,17.332,12h1.945a2,2,0,1,1,0,2H17.332a.962.962,0,0,0-.9.607l-1.5,3.764A1,1,0,0,1,14,19h-.029a1,1,0,0,1-.918-.684l-2.238-6.711-1.92,3.842a1,1,0,0,1-1.594.266L5.838,14.275A.956.956,0,0,0,5.166,14H3.687c1.893,4.952,7.229,9.333,10.008,11.516l.045.037.057.045,0,0a1.989,1.989,0,0,0,2.4,0v0l.023-.018.018-.014.02-.018c3.4-2.668,10.736-8.7,10.736-15A6.544,6.544,0,0,0,20.455,4,7.131,7.131,0,0,0,15,7,7.131,7.131,0,0,0,9.545,4Z"
            transform="translate(-3 -4)"
            fill="#0070b9"
        />
    </svg>
);
const HeartAlert = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32">
        <path
            id="icons8-heart_with_pulse"
            d="M12.545,4A9.532,9.532,0,0,0,3,13.52a12.475,12.475,0,0,0,.205,2.116H6.159a4.288,4.288,0,0,1,3.022,1.236l.7.688,3.478-6.938a1.429,1.429,0,0,1,1.407-.8,1.453,1.453,0,0,1,1.279.989l3.119,9.324.715-1.787A4.306,4.306,0,0,1,23.9,15.636h2.837a2.909,2.909,0,1,1,0,2.909H23.9a1.4,1.4,0,0,0-1.31.884L20.4,24.9a1.461,1.461,0,0,1-1.356.915H19a1.455,1.455,0,0,1-1.339-.994L14.4,15.063l-2.8,5.588a1.458,1.458,0,0,1-2.324.386L7.139,18.946a1.4,1.4,0,0,0-.98-.4H4C6.764,25.748,14.545,32.12,18.6,35.3l.066.054.083.065,0,0a2.907,2.907,0,0,0,3.506,0v0l.034-.026.026-.02.028-.026C27.3,31.463,38,22.694,38,13.52A9.532,9.532,0,0,0,28.455,4C23.417,4,20.5,8.364,20.5,8.364S17.583,4,12.545,4Z"
            transform="translate(-3 -4)"
            fill="#0070b9"
        />
    </svg>
);
const HeartDynamic = () => (
    <svg
        id="blood-donation_2_"
        data-name="blood-donation (2)"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
    >
        <path
            id="Path_874"
            data-name="Path 874"
            d="M109.465,6.906l.885,3.317,1.14-5.16,1.162,4.078.854-1.62.82,2.1h2.222a32.212,32.212,0,0,0-2.141-4.653C113.17,2.674,111.483,0,111.483,0s-1.687,2.674-2.923,4.972a34.314,34.314,0,0,0-2.04,4.363h1.961Zm0,0"
            transform="translate(-102.983)"
            fill="#5c6d96"
        />
        <path
            id="Path_875"
            data-name="Path 875"
            d="M17,275.406H13.579a9.552,9.552,0,0,1,.275.974H10.662l-.275-.705-.995,1.888-.763-2.677-1.171,5.3L6.287,275.8l-.118.292H3.216q.116-.445.305-.974H0v.995H3.216a4.847,4.847,0,0,0-.183,1.187,5.467,5.467,0,0,0,10.935,0,4.275,4.275,0,0,0-.113-.9H17Zm0,0"
            transform="translate(0 -265.76)"
            fill="#5c6d96"
        />
    </svg>
);
const HemoDynamic = () => (
    <svg
        id="blood-donation_2_"
        data-name="blood-donation (2)"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
    >
        <path
            id="Path_874"
            data-name="Path 874"
            d="M109.465,6.906l.885,3.317,1.14-5.16,1.162,4.078.854-1.62.82,2.1h2.222a32.212,32.212,0,0,0-2.141-4.653C113.17,2.674,111.483,0,111.483,0s-1.687,2.674-2.923,4.972a34.314,34.314,0,0,0-2.04,4.363h1.961Zm0,0"
            transform="translate(-102.983)"
            fill="#5c6d96"
        />
        <path
            id="Path_875"
            data-name="Path 875"
            d="M17,275.406H13.579a9.552,9.552,0,0,1,.275.974H10.662l-.275-.705-.995,1.888-.763-2.677-1.171,5.3L6.287,275.8l-.118.292H3.216q.116-.445.305-.974H0v.995H3.216a4.847,4.847,0,0,0-.183,1.187,5.467,5.467,0,0,0,10.935,0,4.275,4.275,0,0,0-.113-.9H17Zm0,0"
            transform="translate(0 -265.76)"
            fill="#5c6d96"
        />
    </svg>
);

const AllergiesMedication = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path
            id="Union_26"
            data-name="Union 26"
            d="M12.036,18H0V7A1.516,1.516,0,0,1,1.321,5.53V4.944H0V0H12.672V4.944H11.351V5.53A1.516,1.516,0,0,1,12.672,7v4.322a2.228,2.228,0,0,1,1.11.571,2.027,2.027,0,0,1,.594,1.919H15.8A2.1,2.1,0,1,1,15.8,18Zm2.435-1.055H15.8a1.041,1.041,0,1,0,0-2.078H14.472Zm-2.818-.066.03.01.013,0,.051.015.012,0,.04.009.019,0,.034.006.021,0,.034,0,.02,0,.037,0h1.4V15.252ZM8.792,15.17l-.036.036-.035.039-.008.008a1,1,0,0,0,0,1.309,1.079,1.079,0,0,0,.075.078l.04.036a1.132,1.132,0,0,0,1.505-.036l.938-.893L9.731,14.277ZM7.654,16.945,7.628,16.9l-.014-.024c-.015-.028-.03-.056-.044-.085l-.008-.018c-.011-.022-.021-.045-.031-.069l-.014-.031c-.008-.019-.015-.038-.022-.057s-.009-.023-.013-.034-.013-.038-.019-.057-.008-.022-.011-.034-.012-.041-.018-.062-.006-.019-.008-.028c-.007-.03-.014-.06-.021-.091,0-.006,0-.012,0-.018,0-.024-.009-.049-.013-.074s0-.022,0-.034-.005-.04-.007-.06,0-.025,0-.036,0-.039,0-.058,0-.024,0-.036,0-.041,0-.062,0-.02,0-.031c0-.031,0-.062,0-.092,0-.006,0-.011,0-.017,0-.026,0-.051.006-.076s0-.022,0-.034,0-.04.007-.06,0-.024.006-.036.006-.039.01-.057l.007-.036c0-.019.008-.037.013-.055H1.108v1.509Zm4.525-4.61h-.025a1.121,1.121,0,0,0-.588.209l-.007,0-.031.024-.017.014-.021.017-.037.034-.938.893L12.059,15,13,14.108a.963.963,0,0,0,.087-.1l.009-.01a1,1,0,0,0-.1-1.365,1.117,1.117,0,0,0-.772-.3ZM2.429,5.512h7.814V4.944H2.429ZM1.108,3.89H11.563V1.055H1.108Z"
            fill="#5c6d96"
        />
    </svg>
);

const Settings = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path
            id="ic_settings_24px"
            d="M18.147,11.882A6.826,6.826,0,0,0,18.212,11a6.826,6.826,0,0,0-.065-.882L20.1,8.633a.446.446,0,0,0,.111-.576L18.36,4.943a.471.471,0,0,0-.564-.2l-2.3.9a6.808,6.808,0,0,0-1.564-.882l-.352-2.385A.447.447,0,0,0,13.123,2h-3.7a.447.447,0,0,0-.453.378L8.617,4.763a7.159,7.159,0,0,0-1.564.882l-2.3-.9a.457.457,0,0,0-.564.2L2.335,8.057a.436.436,0,0,0,.111.576L4.4,10.118A6.946,6.946,0,0,0,4.333,11a6.946,6.946,0,0,0,.065.882L2.446,13.367a.446.446,0,0,0-.111.576l1.85,3.114a.471.471,0,0,0,.564.2l2.3-.9a6.808,6.808,0,0,0,1.564.882l.352,2.385A.447.447,0,0,0,9.422,20h3.7a.447.447,0,0,0,.453-.378l.352-2.385a7.159,7.159,0,0,0,1.564-.882l2.3.9a.457.457,0,0,0,.564-.2l1.85-3.114a.446.446,0,0,0-.111-.576ZM11.273,14.15A3.151,3.151,0,1,1,14.511,11,3.2,3.2,0,0,1,11.273,14.15Z"
            transform="translate(-2.271 -2)"
            fill="#6dd3f9"
        />
    </svg>
);

const Refer = () => (
    <svg id="Rfer" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16">
        <path
            id="ic_reply_24px"
            d="M14,9.267V5l7,7.467-7,7.467V15.56c-5,0-8.5,1.707-11,5.44C4,15.667,7,10.333,14,9.267Z"
            transform="translate(-3 -5)"
            fill="#8992ad"
        />
    </svg>
);

const Patient = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path
            className="a"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,3A3,3,0,1,1,9,8,3,3,0,0,1,12,5Zm0,14.2a7.2,7.2,0,0,1-6-3.22c.03-1.99,4-3.08,6-3.08s5.97,1.09,6,3.08A7.2,7.2,0,0,1,12,19.2Z"
            transform="translate(-2 -2)"
            fill="#6dd3f9"
        />
    </svg>
);
const MonitoredPatient = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20.001" height="16" viewBox="0 0 20.001 16">
        <path
            id="Union_34"
            data-name="Union 34"
            d="M560.364-1551v-1.779h-4.545a1.8,1.8,0,0,1-1.819-1.777v-10.667a1.8,1.8,0,0,1,1.819-1.778h16.364a1.8,1.8,0,0,1,1.818,1.778l-.009,10.667a1.8,1.8,0,0,1-1.809,1.777h-4.546V-1551Zm-4.545-3.556h16.364v-10.667H555.819Zm4.545-1.441v-1.4c0-1.136,2.33-1.707,3.491-1.707s3.492.571,3.492,1.707v1.4Zm1.9-5.9a1.571,1.571,0,0,1,1.587-1.552,1.565,1.565,0,0,1,1.581,1.552,1.565,1.565,0,0,1-1.581,1.552A1.571,1.571,0,0,1,562.268-1561.892Z"
            transform="translate(-554 1567)"
            fill="#6dd3f9"
        />
    </svg>
);

const BloodDrop = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17">
        <path
            id="blood-drop"
            d="M9.145,4.141C7.76,1.963,6.356.188,6.342.171a.427.427,0,0,0-.683,0c-.014.018-1.419,1.792-2.8,3.97C.961,7.121,0,9.416,0,10.963a5.946,5.946,0,0,0,1.782,4.451A6.078,6.078,0,0,0,6,17a6.077,6.077,0,0,0,4.218-1.586A5.946,5.946,0,0,0,12,10.963C12,9.416,11.039,7.121,9.145,4.141ZM9.035,13.9a.428.428,0,0,1-.3.121.436.436,0,0,1-.344-.173.533.533,0,0,1,.048-.7,2.879,2.879,0,0,0,.837-2.187.455.455,0,1,1,.907,0A3.874,3.874,0,0,1,9.035,13.9Zm0,0"
            transform="translate(0 0)"
            fill="#5c6d96"
        />
    </svg>
);
const QuestionMark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path
            id="ic_help_24px"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,17H11V17h2Zm2.07-7.75-.9.92A3.4,3.4,0,0,0,13,15H11v-.5a4.025,4.025,0,0,1,1.17-2.83l1.24-1.26A1.955,1.955,0,0,0,14,9a2,2,0,0,0-4,0H8a4,4,0,0,1,8,0A3.182,3.182,0,0,1,15.07,11.25Z"
            transform="translate(-2 -2)"
            fill="#8992ad"
        />
    </svg>
);
const MegaPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18.381" height="16.156" viewBox="0 0 18.381 16.156">
        <g transform="translate(0 0)">
            <path
                className="a"
                d="M2.155,1.616V4.363a3.733,3.733,0,0,1,.539-.055H5.386V1.616a1.616,1.616,0,1,0-3.231,0Zm9.729,1.617V15.079a1.077,1.077,0,1,0,2.154,0V3.232a1.077,1.077,0,1,0-2.154,0Zm-5.42,1.9v8.053L10.806,14.9V3.406Zm9.544.218-.761.761a.538.538,0,1,0,.761.761l.761-.761a.538.538,0,0,0-.761-.761ZM2.693,5.386A2.7,2.7,0,0,0,.055,7.54H2.693a.538.538,0,1,1,0,1.077H0V9.693H2.693a.539.539,0,1,1,0,1.078H.055a2.7,2.7,0,0,0,2.638,2.154H5.385V5.386ZM16.73,8.617a.538.538,0,1,0,0,1.077h1.112a.538.538,0,1,0,0-1.077ZM15.245,11.44a.537.537,0,0,0,0,.761l.761.762a.539.539,0,0,0,.761-.762l-.761-.761a.538.538,0,0,0-.761,0Z"
                transform="translate(18.381 16.156) rotate(180)"
            />
        </g>
    </svg>
);

const Edit = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.002" viewBox="0 0 16 16.002">
        <g id="Group_1133" data-name="Group 1133" transform="translate(-5 0.002)">
            <path
                id="Path_81"
                data-name="Path 81"
                d="M13.167,4.666l-2.5-2.5L4,8.833v2.5H6.5ZM15.14,2.693a.664.664,0,0,0,0-.94L13.58.193a.664.664,0,0,0-.94,0L11.333,1.5l2.5,2.5Z"
                transform="translate(3.667 0)"
                fill="#fff"
            />
            <path id="Path_82" data-name="Path 82" d="M0,20H16v2.667H0Z" transform="translate(5 -6.668)" fill="#fff" />
        </g>
    </svg>
);
const Cancel = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path
            className="a"
            d="M11,2a9,9,0,1,0,9,9A9,9,0,0,0,11,2ZM3.8,11A7.2,7.2,0,0,1,11,3.8a7.112,7.112,0,0,1,4.41,1.521L5.321,15.41A7.112,7.112,0,0,1,3.8,11ZM11,18.2a7.112,7.112,0,0,1-4.41-1.521L16.679,6.59A7.112,7.112,0,0,1,18.2,11,7.2,7.2,0,0,1,11,18.2Z"
            transform="translate(-2 -2)"
            fill="#fff"
        />
    </svg>
);

const Save = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        {' '}
        <path
            className="a"
            d="M15.444,3H4.778A1.777,1.777,0,0,0,3,4.778V17.222A1.777,1.777,0,0,0,4.778,19H17.222A1.783,1.783,0,0,0,19,17.222V6.556ZM11,17.222a2.667,2.667,0,1,1,2.667-2.667A2.663,2.663,0,0,1,11,17.222Zm2.667-8.889H4.778V4.778h8.889Z"
            transform="translate(-3 -3)"
            fill="#fff"
        />
    </svg>
);

const Call = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path
            id="ic_call_24px"
            d="M6.62,10.79a15.149,15.149,0,0,0,6.59,6.59l2.2-2.2a.994.994,0,0,1,1.02-.24,11.407,11.407,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.25,1.02Z"
            transform="translate(-3 -3)"
            fill="#79caff"
        />
    </svg>
);
const RecentVisits = () => (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17">
        <path
            id="Subtraction_1"
            data-name="Subtraction 1"
            d="M13.572,17h-10a2.137,2.137,0,0,1-2.143-2.125V12.75H2.857v-.708H.715a.709.709,0,1,1,0-1.417h.714V9.917H2.857V9.208H.715a.708.708,0,1,1,0-1.416h.714V7.083H2.857V6.375H.715A.674.674,0,0,1,0,5.667a.674.674,0,0,1,.715-.709h.714V4.25H2.857V3.542H.715A.674.674,0,0,1,0,2.833a.673.673,0,0,1,.715-.708h.714V1.416A1.424,1.424,0,0,1,2.857,0h8.572a1.424,1.424,0,0,1,1.428,1.416h.715a1.461,1.461,0,0,1,1.027.4A1.436,1.436,0,0,1,15,2.833V15.584a1.435,1.435,0,0,1-.4,1.018A1.461,1.461,0,0,1,13.572,17ZM2.857,14.875a.712.712,0,0,0,.715.709h10V2.833h-.715V13.458a1.424,1.424,0,0,1-1.428,1.416ZM8.31,5.607H8.245a2.992,2.992,0,0,0,0,5.984h.03a2.881,2.881,0,0,0,2.605-1.686,2.222,2.222,0,0,1-.9.191H9.931A2.342,2.342,0,0,1,7.612,7.745a2.444,2.444,0,0,1,1.25-2.1A4.321,4.321,0,0,0,8.31,5.607Z"
            fill="#5c6d96"
        />
    </svg>
);
const Contact = () => (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="16.03" viewBox="0 0 15 16.03">
        <path
            id="XMLID_4_"
            d="M24.274,0H14.6a3.155,3.155,0,0,0-3.145,3.157v.729h-.726a.729.729,0,0,0,0,1.457h.726V7.286h-.726a.729.729,0,0,0,0,1.457h.726v1.943h-.726a.729.729,0,0,0,0,1.457h.726v.729A3.155,3.155,0,0,0,14.6,16.03h9.677A.727.727,0,0,0,25,15.3V.729A.727.727,0,0,0,24.274,0ZM14.839,11.9a3.394,3.394,0,0,1,3.387-3.4A2.186,2.186,0,1,1,20.4,6.315,2.182,2.182,0,0,1,18.226,8.5a3.394,3.394,0,0,1,3.387,3.4Z"
            transform="translate(-10 0)"
            fill="#5c6d96"
        />
    </svg>
);
const HospitalVisits = () => (
    <svg id="hospital" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <path
            id="Path_877"
            data-name="Path 877"
            d="M443.784,266.9a1.207,1.207,0,0,0-1.206-1.206h-.707l0,6.732h1.915Zm0,0"
            transform="translate(-429.789 -258.426)"
            fill="#5c6d96"
        />
        <path
            id="Path_878"
            data-name="Path 878"
            d="M1.916,265.691H1.1A1.185,1.185,0,0,0,0,266.9l0,5.528H1.92l0-6.732Zm0,0"
            transform="translate(0 -258.426)"
            fill="#5c6d96"
        />
        <path
            id="Path_879"
            data-name="Path 879"
            d="M227.44,396.281h-.991a.32.32,0,0,0-.32.32l0,2.842h1.631l0-2.843A.32.32,0,0,0,227.44,396.281Zm0,0"
            transform="translate(-219.946 -385.445)"
            fill="#5c6d96"
        />
        <path
            id="Path_880"
            data-name="Path 880"
            d="M106.924,0h-5.253a1.637,1.637,0,0,0-1.636,1.635l0,12.363h2.627l0-3.573a.41.41,0,0,1,.41-.41h2.451a.41.41,0,0,1,.41.41l0,3.573h2.627l0-12.363A1.637,1.637,0,0,0,106.924,0Zm-3.6,9.021h-.931a.419.419,0,0,1-.423-.392.41.41,0,0,1,.41-.429h.931a.419.419,0,0,1,.423.392A.41.41,0,0,1,103.32,9.021Zm0-1.641h-.931a.419.419,0,0,1-.423-.392.41.41,0,0,1,.41-.429h.931a.419.419,0,0,1,.423.392A.41.41,0,0,1,103.32,7.381Zm0-1.641h-.931a.419.419,0,0,1-.423-.392.41.41,0,0,1,.41-.429h.931a.419.419,0,0,1,.423.392A.41.41,0,0,1,103.32,5.74Zm2.9,3.281h-.931a.419.419,0,0,1-.423-.392.41.41,0,0,1,.41-.429h.931a.419.419,0,0,1,.423.392A.41.41,0,0,1,106.219,9.021Zm0-1.641h-.931a.419.419,0,0,1-.423-.392.41.41,0,0,1,.41-.429h.931a.419.419,0,0,1,.423.392A.41.41,0,0,1,106.219,7.381Zm0-1.641h-.931a.419.419,0,0,1-.423-.392.41.41,0,0,1,.41-.429h.931a.419.419,0,0,1,.423.392A.41.41,0,0,1,106.219,5.74Zm0,0"
            transform="translate(-97.3)"
            fill="#5c6d96"
        />
    </svg>
);
const Weight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
        <path
            id="icons8-fat_man"
            d="M17,2a3.677,3.677,0,0,0-3.75,3.6,3.753,3.753,0,0,0,7.5,0A3.677,3.677,0,0,0,17,2Zm-2.412,9.6a3.8,3.8,0,0,0-3.12,1.6L7.21,19.334A1.171,1.171,0,0,0,7.557,21a1.282,1.282,0,0,0,1.734-.333l1.76-2.534A7.711,7.711,0,0,0,10.75,20c0,1.466,1.08,2.4,2.5,2.948V30.76a1.294,1.294,0,0,0,2.581.082l.547-6.684a.626.626,0,0,1,1.245,0l.547,6.684a1.294,1.294,0,0,0,2.581-.082V22.948c1.42-.552,2.5-1.483,2.5-2.948a7.71,7.71,0,0,0-.3-1.868l1.76,2.534A1.282,1.282,0,0,0,26.443,21a1.171,1.171,0,0,0,.347-1.664L22.532,13.2a3.8,3.8,0,0,0-3.12-1.6Z"
            transform="translate(-7 -2)"
        />
    </svg>
);
const Temp = () => (
    <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="9.75" height="18" viewBox="0 0 9.75 18">
        <path
            id="Path_873"
            data-name="Path 873"
            d="M11,.094a2.81,2.81,0,0,0-2.824,2.8V9.476a4.73,4.73,0,0,0-1.985,3.849,4.809,4.809,0,0,0,9.618,0A4.734,4.734,0,0,0,13.82,9.476V7.027h2.118v-1.4H13.82v-2.1h2.118v-1.4h-2.25A2.794,2.794,0,0,0,11,.094Zm0,1.4a1.409,1.409,0,0,1,1.412,1.4V4.227H10.29V9.892c0,.653-.284.817-.419.875a2.794,2.794,0,0,0-1.7,2.559.353.353,0,0,1-.706,0,3.468,3.468,0,0,1,1.7-2.974.826.826,0,0,0,.4-.525h.022V2.893A1.409,1.409,0,0,1,11,1.494Z"
            transform="translate(-6.188 -0.094)"
            fill="#8992ad"
        />
    </svg>
);
const Motion = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="11.61" height="17.5" viewBox="0 0 11.61 17.5">
        <path
            id="Path_870"
            data-name="Path 870"
            d="M16.772,2a1.712,1.712,0,1,0,1.742,1.712A1.727,1.727,0,0,0,16.772,2Zm-1.66,4.185a1.567,1.567,0,0,0-.942.314l-2.63,1.7-.056.036,0,0a.755.755,0,0,0-.263.33l0,.006L10.121,11.1a.751.751,0,0,0-.121.407.775.775,0,0,0,1.522.19l.986-2.171,1.766-.993c-.254,1.162-.73,3.327-.73,3.327v.007a1.514,1.514,0,0,0-.06.4,1.49,1.49,0,0,0,.248.822l0,0,0,0a1.484,1.484,0,0,0,.333.352l1.779,1.89.73,3.22a.952.952,0,0,0,.085.37l0,.018h0a.97.97,0,0,0,1.843-.4.938.938,0,0,0-.106-.432l-.772-3.428-1.444-2.415L17.3,7.9h0A1.33,1.33,0,0,0,16,6.185h-.886Zm3,1.456a1.62,1.62,0,0,1-.014.174l-.464,1.858.724.788,2.171.611h0l.023.007h0a.753.753,0,0,0,.278.054.758.758,0,0,0,.254-1.477v0l-1.93-.557Zm-4.85,6.1L12.9,15.535,11.06,17.873a.947.947,0,0,0-.286.676.968.968,0,0,0,1.8.481h0L14.5,16.568l.346-1.275Z"
            transform="translate(-10 -2)"
            fill="#8992ad"
        />
    </svg>
);
const MonitorView = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
        <path
            className="a"
            d="M3,10.222H9.667V3H3ZM3,16H9.667V11.667H3Zm8.333,0H18V8.778H11.333Zm0-13V7.333H18V3Z"
            transform="translate(-3 -3)"
        />
    </svg>
);
const ListView = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
        <path
            className="a"
            d="M3,14.8H4.667V12.2H3ZM3,20H4.667V17.4H3ZM3,9.6H4.667V7H3Zm3.333,5.2H18V12.2H6.333Zm0,5.2H18V17.4H6.333Zm0-13V9.6H18V7Z"
            transform="translate(-3 -7)"
        />
    </svg>
);
const Active = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path
            fill="#2187ff"
            className="a"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z"
            transform="translate(-2 -2)"
        />
    </svg>
);
const NotAssigned = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path
            fill="#8e3188"
            className="a"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15H11V15h2Zm0-4H11V7h2Z"
            transform="translate(-2 -2)"
        />
    </svg>
);
const Disabled = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path
            fill="#8992ad"
            className="a"
            d="M12,2A10,10,0,1,0,22,12,9.991,9.991,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z"
            transform="translate(-2 -2)"
        />
    </svg>
);

const Devices = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18">
        <path
            id="ic_dvr_24px"
            d="M21,3H3A2.006,2.006,0,0,0,1,5V17a2.006,2.006,0,0,0,2,2H8v2h8V19h5a2,2,0,0,0,1.99-2L23,5A2.006,2.006,0,0,0,21,3Zm0,14H3V5H21ZM19,8H8v2H19Zm0,4H8v2H19ZM7,8H5v2H7Zm0,4H5v2H7Z"
            transform="translate(-1 -3)"
            fill="#6dd3f9"
        />
    </svg>
);
const Qr = () => (
    <svg id="commerce-and-shopping" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path
            id="Union_42"
            data-name="Union 42"
            d="M6.625,17.565a1.486,1.486,0,0,1,0-2.1l.514-.515,2.1,2.1-.514.514a1.489,1.489,0,0,1-2.1,0Zm1.314-3.31.79-.066.574-.048.375-.374a3.568,3.568,0,1,1,.747.747l-.375.375L10,15.463l-.066.789Zm2.832-4.4a2.525,2.525,0,1,0,1.782-.736A2.522,2.522,0,0,0,10.771,9.859Zm6.306,2.584a4.721,4.721,0,0,0,.069-.8A4.565,4.565,0,0,0,15.84,8.43v-6.3H14.783V7.622a4.571,4.571,0,0,0-1.024-.415V2.133H12.7V7.051l-.149,0a4.56,4.56,0,0,0-.907.089V2.133H10.589V7.485a4.582,4.582,0,0,0-1.056.693V2.133H8.476V8.263h.963c-.046.042-.091.085-.134.129A4.559,4.559,0,0,0,7.96,11.641a4.721,4.721,0,0,0,.069.8H0V0H18V12.443ZM6.363,10.192H7.419V9.171H6.363Zm-2.114,0H5.306V9.171H4.249Zm-2.113,0H3.193V2.133H2.137ZM6.363,8.263H7.419V2.133H6.363Zm-2.114,0H5.306V2.133H4.249Z"
            fill="#abb3c9"
        />
    </svg>
);

export const MenuIcon = (props) => <Icon component={Menu} {...props} />;
export const NotificationIcon = (props) => <Icon component={Notification} {...props} />;
export const AlertIcon = (props) => <Icon component={Alert} {...props} />;
export const ArrowDownIcon = (props) => <Icon component={ArrowDown} {...props} />;
export const AssignIcon = (props) => <Icon component={Assign} {...props} />;
export const BillIcon = (props) => <Icon component={Bill} {...props} />;
export const BloodGlucoseIcon = (props) => <Icon component={BloodGlucose} {...props} />;
export const CardiacIcon = (props) => <Icon component={Cardiac} {...props} />;
export const DashboardIcon = (props) => <Icon component={Dashboard} {...props} />;
export const DiagBloodIcon = (props) => <Icon component={DiagBlood} {...props} />;
export const DiagHeartIcon = (props) => <Icon component={DiagHeart} {...props} />;
export const HeartCheckedIcon = (props) => <Icon component={HeartChecked} {...props} />;
export const HeartAlertIcon = (props) => <Icon component={HeartAlert} {...props} />;
export const HeartDynamicIcon = (props) => <Icon component={HeartDynamic} {...props} />;
export const HemoDynamicIcon = (props) => <Icon component={HemoDynamic} {...props} />;
export const AllergiesMedicationIcon = (props) => <Icon component={AllergiesMedication} {...props} />;
export const SettingsIcon = (props) => <Icon component={Settings} {...props} />;
export const ReferIcon = (props) => <Icon component={Refer} {...props} />;
export const PatientIcon = (props) => <Icon component={Patient} {...props} />;
export const MonitoredPatientIcon = (props) => <Icon component={MonitoredPatient} {...props} />;
export const BloodDropIcon = (props) => <Icon component={BloodDrop} {...props} />;
export const QuestionMarkIcon = (props) => <Icon component={QuestionMark} {...props} />;
export const EditIcon = (props) => <Icon component={Edit} {...props} />;
export const CallIcon = (props) => <Icon component={Call} {...props} />;
export const MegaPhoneIcon = (props) => <Icon component={MegaPhone} {...props} />;
export const RecentVisitsIcon = (props) => <Icon component={RecentVisits} {...props} />;
export const ContactIcon = (props) => <Icon component={Contact} {...props} />;
export const HospitalVisitsIcon = (props) => <Icon component={HospitalVisits} {...props} />;
export const WeightIcon = (props) => <Icon component={Weight} {...props} />;
export const TempIcon = (props) => <Icon component={Temp} {...props} />;
export const MotionIcon = (props) => <Icon component={Motion} {...props} />;
export const CancelIcon = (props) => <Icon component={Cancel} {...props} />;
export const SaveIcon = (props) => <Icon component={Save} {...props} />;
export const MonitorViewIcon = (props) => <Icon component={MonitorView} {...props} />;
export const ListViewIcon = (props) => <Icon component={ListView} {...props} />;
export const NotAssignedIcon = (props) => <Icon component={NotAssigned} {...props} />;
export const ActiveIcon = (props) => <Icon component={Active} {...props} />;
export const DisabledIcon = (props) => <Icon component={Disabled} {...props} />;
export const DevicesIcon = (props) => <Icon component={Devices} {...props} />;
export const QrIcon = (props) => <Icon component={Qr} {...props} />;
