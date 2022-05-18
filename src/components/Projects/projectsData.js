import { FaExternalLinkAlt, FaGit } from 'react-icons/fa'
import React from 'react'
import { GitHub } from '@material-ui/icons'

export const projectsData = [
    {
        id: "gorilla",
        title: "Gorilla",
        typeOfProject: "Profissional",
        url: "https://cda-teste.s3.amazonaws.com/gorilla_project_01.png",
        description: <>
            <p>
                &emsp;Projeto em desenvolvimento para a empresa Petro-Silk com o intuito de facilitar
                cadastros, possuir um controle de estoque com funções para emissões de ordens de serviço e lançamentos de NFe,
                funções para contas a pagar e receber ( ainda em desenvolvimento ) e emissões de relatórios ( ainda em desenvolvimento ).
            </p>
            <br />
            <p>
                &emsp;O Back-End foi desenvolvido em Python utilizando o framework Flask e o banco de dados NoSQL MongoDB, o deploy foi feito na AWS EC2,
                já o front-end foi desenvolvido em ReactJS e hospedado no Amplify da AWS.
            </p>
            <p>
                
                <br />
                <br />
                <p>&emsp;Usuário: admin</p>
                <p>&emsp;Senha: admin</p>
            </p>
        </>,
        github: null,
        redirect: 
            <a href="http://petrosilk-teste.s3-website-us-east-1.amazonaws.com/app" target={"_blank"}>
                <FaExternalLinkAlt style={{color: 'white', fontSize: '25px'}}/>
            </a>
    },
    {
        id: "NFSE",
        title: "Importador de NFSe",
        typeOfProject: "Profissional",
        url: "https://c.wallhere.com/photos/db/ac/1920x1080_px_abstract_abstraction_Engineering_Gear_gears_Machine_mechanical-1803255.jpg!d",
        github: <a href="https://github.com/WllRod/Importar-NFSe.git" target="_blank">
                    <GitHub style={{color: 'white', fontSize: '25px'}}/>
                </a>,
        description:
        <>
            <p>
                &emsp;API desenvolvida utilizando o Framework Flask e o banco de dados MongoDB
                com o intuito de facilitar os lançamentos das Notas Fiscais de Serviço no ERP que
                utilizamos.
            </p>
            <p>
                &emsp;Os dados dos XML's são enviados do cliente para o servidor, com isso, a API irá
                extrair os dados do arquivo enviado e irá retornar os dados padronizados, tendo em vista que,
                os XML's das NFSe podem possuir diversos layouts, pois, variam de município para município.
            </p>
        </>
    },
    {
        id: "spoolMonitor",
        title: "Monitorador de Spool de Impressão",
        typeOfProject: "Profissional",
        url: "https://c.wallhere.com/photos/db/ac/1920x1080_px_abstract_abstraction_Engineering_Gear_gears_Machine_mechanical-1803255.jpg!d",
        github: <a href="https://github.com/WllRod/Spool_Monitor" target={"_blank"}>
                    <GitHub style={{color: 'white', fontSize: '25px'}}/>
                </a>,
        description:
        <>
            <p>
                &emsp;Desenvolvido em Python, esta ferramenta serve para monitorar os arquivos que estão sendo impressos e 
                fazer a contagem da quantidade de cópias e impressões de uma determinada impressora. Projeto em uso interno na empresa.
            </p>
           
        </>
    }
]