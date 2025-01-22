import uniurl from '../assets/projects/uniurl.webp'
import cryptorank from '../assets/projects/cryptorank.jpg'
import notebook from '../assets/projects/notebook.jpg'
import portfolio from '../assets/projects/portfolio.webp'
import temp_message from '../assets/projects/temp_message.jpg'
import weatherapp from '../assets/projects/weatherapp.jpg'
import limostore from '../assets/projects/limostore.webp'
import websnippets from '../assets/projects/websnippets.webp'
import passwordVault from '../assets/projects/password_vault.png'

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
        translate_y_percent: 'translate-y-[-74%]',
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
                id: 'tailwind',
                tech: "tailwind",
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
                id: 'mongoDb',
                tech: "mongo db",
            },
            {
                id: 'zustand',
                tech: "zustand ",
            },
        ],
        id: "PASSWORDMAN",
        image: passwordVault,
        translate_y_percent: 'translate-y-[0%]',
        source_code: "https://github.com/iamsuryasonar/passwordman.git",
        build_info:
            "Built with NodeJs, MongoDb, React, Zustand and tailwind css",
        title: "PASSWORDvault",
        url: "https://passwordvault.netlify.app/",
        description:
            "PASSWORDvault is A secure and user-friendly password manager built with React, Node.js, Express and MongoDB. This application helps users store and manage their passwords safely by encrypting sensitive data using AES encryption.",
    },
    {
        techs: [
            {
                id: 'tailwind',
                tech: "tailwind",
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
                tech: "mongoDb",
            },
            {
                id: 'redux',
                tech: "reduxToolkit ",
            },
        ],
        id: "UNIURL",
        image: uniurl,
        translate_y_percent: 'translate-y-[-47%]',
        source_code: "https://github.com/iamsuryasonar/urlshare-react.git",
        build_info:
            "Built with NodeJs, MongoDb, React, Redux and CSS",
        title: "UNIURL",
        url: "https://uniurl.netlify.app",
        description:
            "UNIURL is a URL sharing platform, which enables users to share all of their URL's with a single URL. For example 'www.uniurl.com/username'.",
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
                id: 'tailwind',
                tech: "tailwindCSS",
            },
        ],
        id: "portfolio",
        image: portfolio,
        translate_y_percent: 'translate-y-[-82%]',
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
                id: 'nextJS',
                tech: "nextJS",
            },
        ],
        id: "WEBSNIPPETS",
        image: websnippets,
        translate_y_percent: 'translate-y-[-30%]',
        source_code: "https://github.com/iamsuryasonar/markdown_blog_app.git",
        title: "Web Snippets",
        url: "https://websnippets.vercel.app/",
        description:
            "This project is a static blog site implemented using Next.js, to generate static pages effortlessly from markdown files residing in the public folder.",
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

]

const miniProjects = [
    {
        id: "Group Chat",
        techs: [
            {
                id: 'tailwindcss',
                tech: "tailwind CSS",
            },
            {
                id: 'react',
                tech: "react",
            },
            {
                id: 'Socket io',
                tech: "socket IO",
            },
            {
                id: 'NodeJs',
                tech: "node js",
            },
            {
                id: 'ExpressJs',
                tech: "express js",
            },
        ],
        source_code: "https://github.com/iamsuryasonar/group_chat_app.git",
        title: "Group chat",
        url: "",
        description:
            "Single chat room - group chat application.",
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
        id: "news24x7",
        techs: [
            {
                id: 'tailwindcss',
                tech: "tailwind CSS",
            },
            {
                id: 'react',
                tech: "react",
            },
        ],
        source_code: "https://github.com/iamsuryasonar/news-app.git",
        title: "News 24x7",
        url: "https://news24x7app.netlify.app/",
        description:
            "Simple React app built with Tailwind CSS that displays news articles in a carousel format.",
    },
    {
        id: "Instagram non followers checker",
        techs: [
            {
                id: 'tailwindcss',
                tech: "tailwind CSS",
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
                id: 'expressJs',
                tech: "expressJs",
            },
        ],
        source_code: "https://github.com/iamsuryasonar/instagram_analytic.git",
        title: "Instagram non followers checker",
        url: "",
        description:
            "This web application allows users to check for Instagram non-followers by processing provided json file.",
    },
    {
        id: "Fancy todo app",
        techs: [
            {
                id: 'html',
                tech: "html",
            },
            {
                id: 'css',
                tech: "css",
            },
            {
                id: 'js',
                tech: "javascript",
            },
        ],
        source_code: "https://github.com/iamsuryasonar/fancy_todo.git",
        title: "Fancy todo app",
        url: "",
        description:
            "To-do list application built with Vanilla JavaScript, with the power of HTML localStorage.",
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
                tech: "volley library",
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
            "CryptoRank is a cryptocurrency ranking app, using the CoinCap REST API.",
    },
]

export {
    projects,
    miniProjects
};
