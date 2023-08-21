let student_radio = document.getElementById('student_type')
let teacher_radio  = documnet.getElementById('teacher_type')
alert("hello world")
student_radio.addEventListenter('click', function (){
    if (student_radio.checked){
        let new_element  = document.createElement('div');
        new_element.classList.add('col-span-6');
        let label_element = document.createElement("label");
        label_element.setAttribute("for","level")
        label_element.innerHTML = "Level"
        label_element.classList.add("block text-sm font-medium text-gray-700")
        new_element.appendChild(label_element);
        let input_element = documnet.getElement()
        input_element.classList.add("mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border focus:ring-red-500 focus:border-red-500 block p-2.5 0")
        input_element.setAttribute('type', 'level')
        input_element.setAttribute('placeholder', 'what level are you in?')
        new_element.appendChild(input_element)
        var referenceElement = document.querySelector("adj");
        referenceElement.insertAdjacentElement('afterend', new_element);
    }


});

teacher_radio.addEventListener('click', function(){
    if (teacher_radio.checked) {
        let toRemove = document.getElementById('hello');
    }

})