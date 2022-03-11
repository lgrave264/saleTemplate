const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskComepleteDOM = document.querySelector('.task-edit-complete')
const editDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-form')
const editFormDOM = document.querySelector('.single-task-form')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName
const showTask = async() => {
    try{
        const {data: {tasks},} = await axios.get(`/api/v1/tasks/${id}`)
        const { _id: taskID, completed, name } = tasks

        taskIDDOM.textContent = taskID
        taskNameDOM.value = name
        tempName = name

        if(completed){
            taskComepleteDOM.checked = true
        }
    }catch(error){
        console.log(error)
    }
}

showTask()

editFormDOM.addEventListener('submit', async (e) => {
    editBtnDOM.textContent = 'Loading...'
    e.preventDefault()
    try{
        const taskName = taskNameDOM.value
        const taskCompleted =  taskComepleteDOM.checked

        const{data: {task},} = await axios.patch(`/api/v1/tasks/${id}`,{
            name: taskName, completed:taskCompleted
        })
        
        const { _id: taskID, completed, name } = task
        taskIDDOM.textContent = taskID
        taskNameDOM.value = name
        tempName = name
        if(completed){
            taskComepleteDOM.checked = true
        }
        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = 'Success, edited task'
        formAlertDOM.classList.add('text-success')
    }catch(error){
        console.error(error)
        taskNameDOM.value = tempName
        formAlertDOM.style.display = 'block'
        formAlertDOM.innerHTML = 'Error, please try again'
    }
    editBtnDOM.textContent = 'Edit'
    setTimeout(() => {
        formAlertDOM.style.display = 'none'
        formAlertDOM.classList.remove('text-success')
    },3000)
})