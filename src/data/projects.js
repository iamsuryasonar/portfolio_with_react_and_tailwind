import urlshare from '../assets/urlshare.png'
import cryptorank from '../assets/cryptorank.png'
import notebook from '../assets/notebook.jpg'
import portfolio from '../assets/portfolio.jpeg'
import tempmessage from '../assets/tempmessage.png'

const projects = [
    {
        icons: [
            {
                id: 'js',
                icon: "fab fa-js",
            },
            {
                id: 'react',
                icon: "fab fa-react",
            },
            {
                id: 'node-js',
                icon: "fab fa-node-js",
            },
            {
                id: 'css',
                icon: "fab fa-css3-alt",
            },
        ],
        id: "UNIURL",
        image: urlshare,
        source_code: "https://github.com/iamsuryasonar/URLshare.git",
        build_info:
            "Built with NodeJs, MongoDb, React, Redux and CSS",
        title: "UNIURL",
        url: "https://uniurl.netlify.app",
        description:
            "UNIURL is a URL sharing platform, which enables users to share all of their URL's with a single URL. For example 'www.uniurl.com/username'.",
    },
    {
        id: "cryptorank",
        icons: [
            {
                id: 'java',
                icon: "fab fa-java",
            },
            {
                id: 'android',
                icon: "fab fa-android",
            },
        ],
        image: cryptorank,
        source_code: "https://github.com/iamsuryasonar/CryptoRank.git",
        build_info: "Built with Java, XML, Volley library and Coincap Api.",
        title: "CryptoRank",
        url: "",
        description:
            "CryptoRank is a cryptocurrency ranking app, using the CoinCap REST API, I enabled all cryptocurrencies to be displayed rankwise with its current value in US dolars and change percentage of  it in 24 hours. I used the VOLLEY library to fetch data from CoinCap API.",
    },
    {
        id: "notebook",
        icons: [
            {
                id: 'java',
                icon: "fab fa-java",
            },
            {
                id: 'android',
                icon: "fab fa-android",
            },
        ],
        image: notebook,
        source_code: "https://www.github.com/iamsuryasonar/NoteBook.git",
        build_info: "Built with Java, XML and Firebase Database.",
        title: "NoteBook",
        url: "",
        description:
            "An android app to take important notes, I used firebase database for authentication, authorisation and storage of user data.",
    },
    {
        icons: [
            {
                id: 'js',
                icon: "fab fa-js",
            },
            {
                id: 'react',
                icon: "fab fa-react",
            },
            {
                id: 'css',
                icon: "fab fa-css3-alt",
            },
            {
                id: 'node-js',
                icon: "fab fa-node-js",
            },
        ],
        id: "portfolio",
        image: portfolio,
        source_code: "https://github.com/iamsuryasonar/portfolio-with-react.git",
        build_info: "Built with NodeJs, HTML, CSS, React.",
        title: "Portfolio",
        url: "https://iamsuryasonar.netlify.app",
        description:
            "It is a responsive portfolio website to showcase my beliefs, skills, qualifications and experiences.",
    },
    {
        icons: [
            {
                id: 'js',
                icon: "fab fa-js",
            },
            {
                id: 'css',
                icon: "fab fa-css3-alt",
            },
            {
                id: 'node-js',
                icon: "fab fa-node-js",
            },
        ],
        id: "tempmessage",
        image: tempmessage,
        source_code: "https://github.com/iamsuryasonar/tempmessage.git",
        build_info: "Built with NodeJs, ExpressJs, EJS, CSS and MongoDB",
        title: "Temp Message",
        url: "https://tempmessage-service.onrender.com/",
        description:
            "Temp message is a self destructing link(url) generated by authenticated user contains an image and a caption, when visited expires in 4 minutes or 30 minutes otherwise.",
    },
]

export default projects;