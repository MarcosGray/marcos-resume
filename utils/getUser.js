
const getUser = async(username) =>{
    const resUser = await fetch('https://api.github.com/users/'+username)
    const user = await resUser.json()

    const resRepo = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    const originalRepos = await resRepo.json()

    const dontShowRepos = ['MarcosGray/exemplovue', 'MarcosGray/Sistema_seguros_php']

    const ifJavaScript = repo => repo.language !== 'CSS'
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language
    })

    const repos = originalRepos.filter(ifJavaScript).filter(dontShowFilter).map(extractData)
    

    return {        
        repos,
        user        
    }


}

export default getUser