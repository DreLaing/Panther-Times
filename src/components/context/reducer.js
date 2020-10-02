const initialState = {
    articles:[

    ],
    // recentArticles:[

    // ],
    currentArticle:[

    ]
}

const reducer = (state, action) => {
    switch (action.type){
        case 'ALL_ARTICLES':
            return{
                ...state,
                articles: [...state.articles, action.article]
            };
        case 'ARTICLE':
            return{
                ...state,
                currentArticles:[action.currentArticle]
            }
        // case 'RECENT_ARTICLE':
        //     return{
        //         ...state,
        //         recentArticles:[state.articles[0], state.articles[1], state.articles[2]]
        //     }
        
        default:
            return{
                state
            }
            
    }
}

export { initialState, reducer}