import * as contentful from 'contentful'

export const client = contentful.createClient({
    // space: process.env.REACT_APP_SPACE_ID,
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
    space: 'cemul51qm2h3',
    accessToken: 'zNP3XhAIuqzzWPMY3wOixTwvlq5nsqOvKICjcx3l_pY'
})