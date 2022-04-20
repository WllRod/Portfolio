import { IoLogoPython, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { RiReactjsFill } from 'react-icons/ri'
import { 
    SiCsharp, 
    SiFlask, 
    SiDotnet, 
    SiMicrosoftsqlserver, 
    SiMysql, 
    SiPostgresql, 
    SiGit, 
    SiGithub, 
    SiAwsamplify, 
    SiAmazonaws, 
    SiVisualstudiocode, 
    SiVisualstudio,
    SiInsomnia,
    SiPostman
} from 'react-icons/si'

export const Data    = [
    {
        Title: 'Linguagens de Programação',
        SubCards: [
            {
                Icon: IoLogoPython,
                Title: 'Python',
                Width: 80
            },
            {
                Icon: IoLogoJavascript,
                Title: 'Javascript',
                Width: 70
            },
            {
                Icon: SiCsharp,
                Title: 'C#',
                Width: 30
            }
        ]
    },
    {
        Title: 'Front-End',
        SubCards: [
            {
                Icon: RiReactjsFill,
                Title: 'ReactJS',
                Width: 80
            },
            {
                Icon: IoLogoHtml5,
                Title: 'HTML',
                Width: 80
            },
            {
                Icon: IoLogoCss3,
                Title: 'CSS',
                Width: 80
            }
        ]
    },
    {
        Title: 'Back-End',
        SubCards: [
            {
                Icon: SiFlask,
                Title: 'Flask',
                Width: 68
            },
            {
                Icon: SiDotnet,
                Title: '.Net Core',
                Width: 30
            }
        ]
    },
    {
        Title: 'Bancos de Dados',
        SubCards: [
            {
                Icon: SiMicrosoftsqlserver,
                Title: 'SQL Server',
                Width: 85
            },
            {
                Icon: SiMysql,
                Title: 'MySQL',
                Width: 72
            },
            {
                Icon: SiPostgresql,
                Title: 'PostgreSQL',
                Width: 70
            }
        ]
    },
    {
        Title: 'DevOps',
        SubCards: [
            {
                Icon: SiGit,
                Title: 'Git',
                Width: 45
            },
            {
                Icon: SiGithub,
                Title: 'Github',
                Width: 67
            },
            {
                Icon: SiAwsamplify,
                Title: 'Amplify',
                Width: 65
            },
            {
                Icon: SiAmazonaws,
                Title: 'AWS',
                Width: 40
            }
        ]
    },
    {
        Title: 'Editores e utilitários',
        SubCards: [
            {
                Icon: SiVisualstudiocode,
                Title: 'VS Code',
                Width: 85
            },
            {
                Icon: SiVisualstudio,
                Title: 'Visual Studio',
                Width: 64
            },
            {
                Icon: SiAwsamplify,
                Title: 'Amplify',
                Width: 65
            },
            {
                Icon: SiInsomnia,
                Title: 'Insomnia',
                Width: 78
            },
            {
                Icon: SiPostman,
                Title: 'Postman',
                Width: 75
            }
        ]
    }
]