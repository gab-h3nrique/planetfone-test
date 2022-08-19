import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Section from '../components/Section'
import UserRow from '../components/UserRow'
import UserTbody from '../components/UserTbody'



const Home: NextPage = () => {
    // hook para fazer o data binding
    const [user, setUser] = useState<any[]>([]);
    const [busca, setBusca] = useState('');

    // hook para setar para pegar o array de usuario
    useEffect(() =>{


        // chamada de função anonima
        (async () => {
            //pegando a função do backend do sistema
            const response = await fetch('./api/users')
            const data = await response.json();

            // filtrando por nome 
            data.sort((a:any, b:any) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });  

            setUser(data);
        })();

    },[])

  return (
    <>
        <Section>
            <Head>
                <title>PlanetFone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="flex align-center justify-center px-5 py-4 border-b border-gray-100">
            <div className="flex justify-center align-center">
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input onChange={(event) =>{setBusca(event.target.value)}} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Filtre por nome"/>
                </div>
            </div>
            </header>
            <div className="p-3">
            </div>
            <UserTbody>
                {
                    user.filter((val)=> {// filtrando usuarios conforme o valor do input é alterado
                        if(busca == "") return val
                        else if(val.name.toLowerCase().includes(busca.toLocaleLowerCase())) return val
                    }).map(({id, name, username, email}, key) =>{//metodo map para fazer um loop em cada usuario e exibir apenas os 5
                        if(key < 5) {
                            return <UserRow id={id} name={name} userName={username} email={email} />
                        }
                    })
                }
            </UserTbody>
        </Section>
    </>

  )
}

export default Home

