import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg';
import adminpage from '../assets/png/adminpage.png';
import home from '../assets/png/home.png';
import mealhome from '../assets/png/mealhome.png'
import todo from '../assets/png/todo.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Job Search App',
        projectDesc: 'A full stack project that enable users to view jobs, companies, apply for job.Admin has the functionality to approve/reject companies and job. Admin can view all the jobs , total open jobs,users etc. User authentication using firebase.',
        tags: ['Typescript', 'React', 'Material_ui' ,'PostgreSQL', 'NodeJs','Zustand'],
        code: 'https://github.com/RemyaManoharan/class-25-ironside',
        demo: 'https://ironside-webservice.onrender.com/',
        image: adminpage
    },
    {
        id: 2,
        projectName: 'Amazon Clone',
        projectDesc: 'This is a clone of an amazon. Tried to implement home page , product page and checkout page. State managent using Redux',
        tags: ['React', 'tailwind CSS','Javascript','redux'],
        code: 'https://github.com/RemyaManoharan/amazon_clone',
        demo: '',
        image: home
    },
    {
        id: 3,
        projectName: 'Meal Share App',
        projectDesc: 'Another full stack project for  viewing meals , making reservation, add reviews. Designed the database, writes routes for backend and created reusable components',
        tags: ['React', 'Javascript', 'Express', "PostgreSQL","NodeJS"],
        code: 'https://github.com/RemyaManoharan/meal_app',
        demo: 'https://meal-sharing-sywi.onrender.com/',
        image: mealhome
    },
    {
        id: 4,
        projectName: 'Todo App',
        projectDesc: 'Simple React app for adding todo, set deadlines with option to edit, delete. done as part of hobby project',
        tags: ['React', 'Javascript'],
        code: 'https://github.com/RemyaManoharan/Todo_App',
        demo: 'https://meal-sharing-sywi.onrender.com/',
        image: todo
    },
    // {
    //     id: 5,
    //     projectName: 'Reliance Digital Clone - Frontend',
    //     projectDesc: 'Todo list app , a REACTJS project with the ability to add new todo items with user inputted data and remove existing ones and a deadline and option to editfor the todo item.',
    //     tags: ['HTML', 'CSS', 'Javascript'],
    //     code: 'https://github.com/iamrituyadav/Reliance_digital',
    //     demo: '',
    //     image: "https://miro.medium.com/max/875/1*qRNfRbuHCDC1ct0chLZoWA.png"
    // },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/