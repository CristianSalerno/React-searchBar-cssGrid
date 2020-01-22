import axios from 'axios';

let apiUrl = 'https://api.unsplash.com'


export default axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: 'Client-ID 24ca1eb1ec91e30ab740be616ae0c1ac738ae28f02fb006e5391fb1273b3bb4f'
    }
});
