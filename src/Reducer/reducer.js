import data from '../components/data/projects.json'

export const initialState = {
    projects: data,
    currentProject: localStorage.getItem('currentProject') != null ? JSON.parse(localStorage.getItem('currentProject')) : data.topProjects[0]
}

function reducer(state, action){
    switch(action.type){
        case 'INITIAL':
            return { ...state, projects: action.projects }
        case 'SHOW_DETAILS':
            return {...state, currentProject: action.project}
        default:
            return state
    }
}

export default reducer;