
const div1 = document.createElement('div');
div1.innerText= 'div1'

const render = () => {
    

        let questions = [
            { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
            { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
            { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
        ]


        const App= document.createElement('div')
        App.innerHTML = ''


        const submitQuestion = question => {
            questions.push(question)
            generateQuestionList()
        }


        const deleteQuestion = _id => {

            questions = questions.filter(question => question._id !== _id)
            generateQuestionList()
        }

        const QuestionForm=document.createElement('form')
        const h1 = document.createElement('h1')
        h1.innerText='Ask a Question'
        const name = document.createElement('name')
        name.name = 'name'
        name.type = 'text'
        name.placeholder = 'Name'
        const content = document.createElement('content')
        content.rows = 3
        content.name = 'content'
        content.type = 'text'
        content.placeholder = 'Ask Anything'

        const submit = document.createElement('submit')
        submit.type = 'submit'
        submit.innerText = 'Submit'

        

        QuestionForm.append(h1);
        QuestionForm.append(name);
        QuestionForm.append(content);
        QuestionForm.append(submit);

        const Question = document.createElement('div')
        const generateQuestionList =  () => {
            if (!questions.length) return questions.innerHTML = 'No Questions';

            questions.reverse().map((question, i) => {
                const formattedQuestion = document.createElement('div')
                formattedQuestion.key = i;
                const h3 = document.createElement('h3')
                h3.innerText = question.content
                const span = document.createElement('span')
                span.innerText = question.name
                const button = document.createElement('button')
                button.innerText = 'Delete'

                formattedQuestion.append(h3, span, button)
            })
        }

        App.append(QuestionForm);
        App.append(Question)



        const root = document.getElementById('root');
        root.appendChild(App)

        // generateQuestionList()

}       

document.addEventListener('DOMcontentLoaded', () => {
    render();
})