import urls from "../utilities/urls";

const favoriteService = {

    saveFavorite: async data => {
        try {
            const res = await fetch(urls.users + 'favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return res.json()
        } catch (err) {
            console.log(err)
        }
    }

}

export default favoriteService