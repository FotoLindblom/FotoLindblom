import { initializeGallery } from '../../assets/js/loadImages.js';

const images = {
    'Måsenstafetten' : ['250329-Masen_Staffeten-1', '250329-Masen_Staffeten-2', '250329-Masen_Staffeten-3', '250329-Masen_Staffeten-4', '250329-Masen_Staffeten-5', '250329-Masen_Staffeten-6', '250329-Masen_Staffeten-7', '250329-Masen_Staffeten-9', '250329-Masen_Staffeten-8', '250329-Masen_Staffeten-10', '250329-Masen_Staffeten-11', '250329-Masen_Staffeten-12', '250329-Masen_Staffeten-13', '250329-Masen_Staffeten-14', '250329-Masen_Staffeten-15', '250329-Masen_Staffeten-16', '250329-Masen_Staffeten-17', '250329-Masen_Staffeten-18', '250329-Masen_Staffeten-19', '250329-Masen_Staffeten-20', '250329-Masen_Staffeten-21', '250329-Masen_Staffeten-22', '250329-Masen_Staffeten-23', '250329-Masen_Staffeten-24', '250329-Masen_Staffeten-25', '250329-Masen_Staffeten-26', '250329-Masen_Staffeten-27', '250329-Masen_Staffeten-28', '250329-Masen_Staffeten-29', '250329-Masen_Staffeten-30', '250329-Masen_Staffeten-31', '250329-Masen_Staffeten-32', '250329-Masen_Staffeten-33', '250329-Masen_Staffeten-34', '250329-Masen_Staffeten-35', '250329-Masen_Staffeten-36', '250329-Masen_Staffeten-37', '250329-Masen_Staffeten-38', '250329-Masen_Staffeten-40', '250329-Masen_Staffeten-41', '250329-Masen_Staffeten-39', '250329-Masen_Staffeten-42', '250329-Masen_Staffeten-43', '250329-Masen_Staffeten-44', '250329-Masen_Staffeten-45', '250329-Masen_Staffeten-46', 
                        '250329-Masen_Staffeten-47', '250329-Masen_Staffeten-48', '250329-Masen_Staffeten-50', '250329-Masen_Staffeten-49', '250329-Masen_Staffeten-51', '250329-Masen_Staffeten-52', '250329-Masen_Staffeten-53', '250329-Masen_Staffeten-54', '250329-Masen_Staffeten-55', '250329-Masen_Staffeten-56', '250329-Masen_Staffeten-57', '250329-Masen_Staffeten-58', '250329-Masen_Staffeten-59', '250329-Masen_Staffeten-60', '250329-Masen_Staffeten-61', '250329-Masen_Staffeten-62', '250329-Masen_Staffeten-63', '250329-Masen_Staffeten-64', '250329-Masen_Staffeten-65', '250329-Masen_Staffeten-66', '250329-Masen_Staffeten-67', '250329-Masen_Staffeten-68', '250329-Masen_Staffeten-69', '250329-Masen_Staffeten-70', '250329-Masen_Staffeten-71', '250329-Masen_Staffeten-72', '250329-Masen_Staffeten-73', '250329-Masen_Staffeten-74', '250329-Masen_Staffeten-75', '250329-Masen_Staffeten-76', '250329-Masen_Staffeten-77', '250329-Masen_Staffeten-79', '250329-Masen_Staffeten-78', '250329-Masen_Staffeten-80', '250329-Masen_Staffeten-81', '250329-Masen_Staffeten-82', '250329-Masen_Staffeten-83', '250329-Masen_Staffeten-84', '250329-Masen_Staffeten-85', '250329-Masen_Staffeten-86', '250329-Masen_Staffeten-87', '250329-Masen_Staffeten-88', '250329-Masen_Staffeten-89', '250329-Masen_Staffeten-90', '250329-Masen_Staffeten-91'],
    'Stockholm Indoor Cup Day 2' : ['250202-Stockholm_Indoor_Cup_Dag_2-1', '250202-Stockholm_Indoor_Cup_Dag_2-2', '250202-Stockholm_Indoor_Cup_Dag_2-3', '250202-Stockholm_Indoor_Cup_Dag_2-4', '250202-Stockholm_Indoor_Cup_Dag_2-5', '250202-Stockholm_Indoor_Cup_Dag_2-6', '250202-Stockholm_Indoor_Cup_Dag_2-8', '250202-Stockholm_Indoor_Cup_Dag_2-9', '250202-Stockholm_Indoor_Cup_Dag_2-10', '250202-Stockholm_Indoor_Cup_Dag_2-11', '250202-Stockholm_Indoor_Cup_Dag_2-12', '250202-Stockholm_Indoor_Cup_Dag_2-13', '250202-Stockholm_Indoor_Cup_Dag_2-14', '250202-Stockholm_Indoor_Cup_Dag_2-15', '250202-Stockholm_Indoor_Cup_Dag_2-16', '250202-Stockholm_Indoor_Cup_Dag_2-17', '250202-Stockholm_Indoor_Cup_Dag_2-18', '250202-Stockholm_Indoor_Cup_Dag_2-19', '250202-Stockholm_Indoor_Cup_Dag_2-20', '250202-Stockholm_Indoor_Cup_Dag_2-21', '250202-Stockholm_Indoor_Cup_Dag_2-22', '250202-Stockholm_Indoor_Cup_Dag_2-23', '250202-Stockholm_Indoor_Cup_Dag_2-24', '250202-Stockholm_Indoor_Cup_Dag_2-25', '250202-Stockholm_Indoor_Cup_Dag_2-26', '250202-Stockholm_Indoor_Cup_Dag_2-27', '250202-Stockholm_Indoor_Cup_Dag_2-7'],
    'Stockholm Indoor Cup Day 1' : ['250201-Stockholm_Indoor_Cup_Dag_1-1', '250201-Stockholm_Indoor_Cup_Dag_1-2', '250201-Stockholm_Indoor_Cup_Dag_1-3', '250201-Stockholm_Indoor_Cup_Dag_1-4', '250201-Stockholm_Indoor_Cup_Dag_1-5', '250201-Stockholm_Indoor_Cup_Dag_1-6', '250201-Stockholm_Indoor_Cup_Dag_1-8', '250201-Stockholm_Indoor_Cup_Dag_1-9', '250201-Stockholm_Indoor_Cup_Dag_1-10', '250201-Stockholm_Indoor_Cup_Dag_1-11', '250201-Stockholm_Indoor_Cup_Dag_1-12', '250201-Stockholm_Indoor_Cup_Dag_1-7', '250201-Stockholm_Indoor_Cup_Dag_1-13', '250201-Stockholm_Indoor_Cup_Dag_1-14', '250201-Stockholm_Indoor_Cup_Dag_1-15', '250201-Stockholm_Indoor_Cup_Dag_1-16', '250201-Stockholm_Indoor_Cup_Dag_1-17', '250201-Stockholm_Indoor_Cup_Dag_1-18', '250201-Stockholm_Indoor_Cup_Dag_1-19', '250201-Stockholm_Indoor_Cup_Dag_1-21', '250201-Stockholm_Indoor_Cup_Dag_1-20', '250201-Stockholm_Indoor_Cup_Dag_1-22', '250201-Stockholm_Indoor_Cup_Dag_1-23', '250201-Stockholm_Indoor_Cup_Dag_1-24', '250201-Stockholm_Indoor_Cup_Dag_1-25', '250201-Stockholm_Indoor_Cup_Dag_1-26', '250201-Stockholm_Indoor_Cup_Dag_1-27', '250201-Stockholm_Indoor_Cup_Dag_1-28', '250201-Stockholm_Indoor_Cup_Dag_1-29', '250201-Stockholm_Indoor_Cup_Dag_1-30', '250201-Stockholm_Indoor_Cup_Dag_1-31', '250201-Stockholm_Indoor_Cup_Dag_1-32', '250201-Stockholm_Indoor_Cup_Dag_1-33', '250201-Stockholm_Indoor_Cup_Dag_1-35', '250201-Stockholm_Indoor_Cup_Dag_1-34', '250201-Stockholm_Indoor_Cup_Dag_1-36', '250201-Stockholm_Indoor_Cup_Dag_1-37', '250201-Stockholm_Indoor_Cup_Dag_1-38', '250201-Stockholm_Indoor_Cup_Dag_1-40', '250201-Stockholm_Indoor_Cup_Dag_1-39', '250201-Stockholm_Indoor_Cup_Dag_1-41', '250201-Stockholm_Indoor_Cup_Dag_1-42', '250201-Stockholm_Indoor_Cup_Dag_1-43', '250201-Stockholm_Indoor_Cup_Dag_1-44', '250201-Stockholm_Indoor_Cup_Dag_1-45'],
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