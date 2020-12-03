import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user}) => {
    return(
        <div className='container mx-auto px-4' >
            <h1 className='text-3xl' >Meus repositórios</h1>
            
            <h2 className='font-bold text-2xl' >Meus repositórios no GitHub</h2>
            <p>GitHub stats: repositorios: {user.public_repos} / seguidores: {user.followers} </p>
            <pre> 
                {repos.map(
                    repo => {
                        return(
                            <div key={repo.id} className='rounded-lg bg-gray-200 mx-8 my-4 p-4 hover:shadow-md' >
                                <h3 className='font-bold' > Projeto: {repo.full_name} </h3>
                                <p> Language: {repo.language} </p>
                                <p> Descrição: {repo.description} </p>
                            </div>
                        )
                    }
                )} 
            </pre>
        </div>
    )
}
export async function getServerSideProps(context){

    const { repos, user } = await getUser('marcosgray')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index