import { initializeGallery } from '../../assets/js/loadImages.js';

const images = {
    'Stockholm Indoor Cup Day 1' : ['250201-Stockholm_Indoor_Cup_Dag_1-1', '250201-Stockholm_Indoor_Cup_Dag_1-2', '250201-Stockholm_Indoor_Cup_Dag_1-3', '250201-Stockholm_Indoor_Cup_Dag_1-4', '250201-Stockholm_Indoor_Cup_Dag_1-5', '250201-Stockholm_Indoor_Cup_Dag_1-6', '250201-Stockholm_Indoor_Cup_Dag_1-8', '250201-Stockholm_Indoor_Cup_Dag_1-9', '250201-Stockholm_Indoor_Cup_Dag_1-10', '250201-Stockholm_Indoor_Cup_Dag_1-11', '250201-Stockholm_Indoor_Cup_Dag_1-12', '250201-Stockholm_Indoor_Cup_Dag_1-7', '250201-Stockholm_Indoor_Cup_Dag_1-13', '250201-Stockholm_Indoor_Cup_Dag_1-14', '250201-Stockholm_Indoor_Cup_Dag_1-15', '250201-Stockholm_Indoor_Cup_Dag_1-16', '250201-Stockholm_Indoor_Cup_Dag_1-17', '250201-Stockholm_Indoor_Cup_Dag_1-18', '250201-Stockholm_Indoor_Cup_Dag_1-19', '250201-Stockholm_Indoor_Cup_Dag_1-21', '250201-Stockholm_Indoor_Cup_Dag_1-20', '250201-Stockholm_Indoor_Cup_Dag_1-22', '250201-Stockholm_Indoor_Cup_Dag_1-23', '250201-Stockholm_Indoor_Cup_Dag_1-24', '250201-Stockholm_Indoor_Cup_Dag_1-25', '250201-Stockholm_Indoor_Cup_Dag_1-26', '250201-Stockholm_Indoor_Cup_Dag_1-27', '250201-Stockholm_Indoor_Cup_Dag_1-28', '250201-Stockholm_Indoor_Cup_Dag_1-29', '250201-Stockholm_Indoor_Cup_Dag_1-30', '250201-Stockholm_Indoor_Cup_Dag_1-31', '250201-Stockholm_Indoor_Cup_Dag_1-32', '250201-Stockholm_Indoor_Cup_Dag_1-33', '250201-Stockholm_Indoor_Cup_Dag_1-35', '250201-Stockholm_Indoor_Cup_Dag_1-34', '250201-Stockholm_Indoor_Cup_Dag_1-36', '250201-Stockholm_Indoor_Cup_Dag_1-37', '250201-Stockholm_Indoor_Cup_Dag_1-38', '250201-Stockholm_Indoor_Cup_Dag_1-40', '250201-Stockholm_Indoor_Cup_Dag_1-39', '250201-Stockholm_Indoor_Cup_Dag_1-41', '250201-Stockholm_Indoor_Cup_Dag_1-42', '250201-Stockholm_Indoor_Cup_Dag_1-43', '250201-Stockholm_Indoor_Cup_Dag_1-44', '250201-Stockholm_Indoor_Cup_Dag_1-45']
};

const filterBtnContainer = document.getElementById("filter-container");
const imageContainer = document.getElementById('image-container')

const filterBtnFunction = (span, event) => {
    let activeFilter = document.getElementById('active');
    activeFilter.removeAttribute('id');
    span.setAttribute('id', 'active')
    imageContainer.innerHTML = '';
    initializeGallery(images[event], 'media/sports'); 
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGallery(images[Object.keys(images)[0]], 'media/sports')

    let flag = 0
    Object.keys(images).forEach(event => {
        const span = document.createElement("span");
        span.textContent = event;
        span.classList.add('filter')
        if (flag == 0 ) {
            span.setAttribute('id', 'active')
            flag = 1
        }

        span.addEventListener("click", () => {
            filterBtnFunction(span, event)
        });
        
        filterBtnContainer.appendChild(span);
    });

    window.updateButtonVisibility();

});