import getUser from '../../utils/getUser'

const apiGetUser = async(req, res) => {
    const data = await getUser('marcosgray')
    return res.send(data)
}

export default apiGetUser