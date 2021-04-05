import budgetApp from '../../assets/projects_images/budgetApp.jpg'
import recipe from '../../assets/projects_images/recipe.jpg'
import drumkit from '../../assets/projects_images/drumkit.jpg'
import Todolist from '../../assets/projects_images/Todolist.jpg'
import login from '../../assets/projects_images/login.jpg'
import signup from '../../assets/projects_images/signup.jpg'

const projectsdata = [
{
        name: 'Recipe App',
        image: recipe,
        deployed_url:'https://ushprakash.github.io/Recipe/',
        github_url: 'https://github.com/ushprakash/Recipe',
        category: ['React']
    },

    {
        name: 'Budget App',
        image: budgetApp,
        deployed_url:'https://ushprakash.github.io/BudgetApp/',
        github_url: 'https://github.com/ushprakash/BudgetApp',
        category: ['React']
    },

    {
        name: 'DrumKit app',
        image: drumkit,
        deployed_url:'https://ushprakash.github.io/DrumKit/',
        github_url: 'https://github.com/ushprakash/DrumKit',
        category: ['JavaScript']
    },

    {
        name: 'Todo List',
        image: Todolist,
        deployed_url:'https://ushprakash.github.io/React-TodoApp/',
        github_url:'https://github.com/ushprakash/React-TodoApp',
        category: ['React']
    },

    {
        name: 'Form animation',
        image: login,
        deployed_url:'https://ushprakash.github.io/Form-Animation/',
        github_url: 'https://github.com/ushprakash/Form-Animation',
        category: ['JavaScript']
    },

    {
        name: 'Login&signup ',
        image: signup,
        deployed_url:'https://ushprakash.github.io/login-signup/',
        github_url: 'https://github.com/ushprakash/login-signup',
        category: ['JQuery']
    }
]

export default projectsdata;