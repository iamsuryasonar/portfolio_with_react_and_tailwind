import uniurl from '../assets/projects/uniurl.jpg'
import cryptorank from '../assets/projects/cryptorank.jpg'
import notebook from '../assets/projects/notebook.jpg'
import portfolio from '../assets/projects/portfolio.jpg'
import temp_message from '../assets/projects/temp_message.jpg'
import weatherapp from '../assets/projects/weatherapp.jpg'
import limostore from '../assets/projects/limostore.png'

const projects = [
    {
        techs: [
            {
                id: 's3',
                tech: "s3 ",
            },
            {
                id: 'react',
                tech: "react",
            },
            {
                id: 'nodejs',
                tech: "nodeJs",
            },
            {
                id: 'express',
                tech: "express",
            },
            {
                id: 'MongoDb',
                tech: "MongoDb",
            },
            {
                id: 'tailwind',
                tech: "tailwind",
            },
            {
                id: 'redux',
                tech: "reduxToolkit ",
            },

        ],
        id: "LIMOSTORE",
        image: limostore,
        translate_y_percent: 'translate-y-[-35%]',
        source_code: "https://github.com/iamsuryasonar/Apparel-store-limo.git",
        build_info:
            "Built with NodeJs,Express, MongoDb, React, Redux and Tailwind",
        title: "LIMO STORE",
        url: "https://limo-store.netlify.app",
        description:
            "A single-vendor clothing e-commerce platform with essential features such as user authentication, a robust add-to-cart system, and a seamless checkout process.",
    },
    {
        techs: [
            {
                id: 'css',
                tech: "CSS",
            },
            {
                id: 'react',
                tech: "react",
            },
            {
                id: 'nodejs',
                tech: "nodeJs",
            },
            {
                id: 'expressjs',
                tech: "expressJs",
            },
            {
                id: 'MongoDb',
                tech: "MongoDb",
            },
            {
                id: 'redux',
                tech: "reduxToolkit ",
            },
        ],
        id: "UNIURL",
        image: uniurl,
        translate_y_percent: 'translate-y-[-50%]',
        source_code: "https://github.com/iamsuryasonar/URLshare.git",
        build_info:
            "Built with NodeJs, MongoDb, React, Redux and CSS",
        title: "UNIURL",
        url: "https://uniurl.netlify.app",
        description:
            "UNIURL is a URL sharing platform, which enables users to share all of their URL's with a single URL. For example 'www.uniurl.com/username'.",
    },

    {
        id: "notebook",
        techs: [
            {
                id: 'dart',
                tech: "dart",
            },
            {
                id: 'flutter',
                tech: "flutter",
            },
            {
                id: 'firebaseDb',
                tech: "firebaseRTDb",
            },
        ],
        image: notebook,
        translate_y_percent: 'translate-y-[-48%]',
        source_code: "https://github.com/iamsuryasonar/flutterNotes.git",
        build_info: "Built with flutter, Dart and Firebase realtime database.",
        title: "NoteBook",
        url: "",
        description:
            "An android app to take important notes, I used firebase for authentication, authorisation and storage of user data and notes.",
    },
    {
        techs: [
            {
                id: 'js',
                tech: "js",
            },
            {
                id: 'react',
                tech: "react",
            },
            {
                id: 'nodejs',
                tech: "nodeJs",
            },
            {
                id: 'css',
                tech: "tailwindCSS",
            },
        ],
        id: "portfolio",
        image: portfolio,
        translate_y_percent: 'translate-y-[-73%]',
        source_code: "https://github.com/iamsuryasonar/portfolio_with_react_and_tailwind.git",
        build_info: "Built with Tailwind CSS, React.",
        title: "Portfolio",
        url: "https://iamsuryasonar.netlify.app",
        description:
            "It is a responsive portfolio website to showcase my beliefs, skills, qualifications and experiences.",
    },
    {
        techs: [
            {
                id: 'ejs',
                tech: "EJS",
            },
            {
                id: 'css',
                tech: "CSS",
            },
            {
                id: 'nodejs',
                tech: "nodeJs",
            },
            {
                id: 'MongoDb',
                tech: "mongoDb",
            },
            {
                id: 'expressJs',
                tech: "expressJs",
            },
        ],
        id: "tempmessage",
        image: temp_message,
        translate_y_percent: 'translate-y-[0%]',
        source_code: "https://github.com/iamsuryasonar/tempmessage.git",
        build_info: "Built with NodeJs, ExpressJs, EJS, CSS and MongoDB",
        title: "Temp Message",
        url: "https://tempmessage-service.onrender.com/",
        description:
            "Temp message is a self destructing link(url) generated by authenticated user contains an image and a caption, when visited expires in 4 minutes or 30 minutes otherwise.",
    },
    {
        id: "weatherapp",
        techs: [
            {
                id: 'dart',
                tech: "dart",
            },
            {
                id: 'flutter',
                tech: "flutter",
            },

            {
                id: 'openWeatherAPI',
                tech: "openWeatherAPI",
            },
        ],
        image: weatherapp,
        translate_y_percent: 'translate-y-[-48%]',
        source_code: "https://github.com/iamsuryasonar/weatherApp.git",
        build_info: "Built with flutter, dart, open weather API",
        title: "Weather app",
        url: "",
        description:
            "Weather app, using the open weather REST API.",
    },
    {
        id: "cryptorank",
        techs: [
            {
                id: 'java',
                tech: "java",
            },
            {
                id: 'android',
                tech: "android",
            },
            {
                id: 'volleyLibrary',
                tech: "volleyLibrary",
            },
            {
                id: 'coinCapAPI',
                tech: "coinCapAPI",
            },
        ],
        image: cryptorank,
        translate_y_percent: 'translate-y-[-38%]',
        source_code: "https://github.com/iamsuryasonar/CryptoRank.git",
        build_info: "Built with Java, XML, Volley library and Coincap Api.",
        title: "CryptoRank",
        url: "",
        description:
            "CryptoRank is a cryptocurrency ranking app, using the CoinCap REST API, I enabled all crypto currencies to be displayed rankwise with its current value in US dolars and change percentage of  it in 24 hours. I used the VOLLEY library to fetch data from CoinCap API.",
    },
]

export default projects;
