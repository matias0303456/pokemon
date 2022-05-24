import urls from "../utilities/urls"

const authService = {

    register: async newUser => {
        try {
            const res = await fetch(urls.users + 'register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            return res.json()
        } catch (err) {
            console.log(err)
        }
    },

    login: async user => {
        try {
            const res = await fetch(urls.users + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            return res.json()
        } catch (err) {
            console.log(err)
        }
    }

}

export default authService